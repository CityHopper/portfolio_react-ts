import {useRef} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import emailjs from '@emailjs/browser';

function Contact() {
    interface FormValue {
        name: string;
        email: string;
        subject: string;
        message: string;
    }

    const form = useRef(null);

    let serviceId:string = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
    let templateId:string = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
    let publicKey:string = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;

    const {register, handleSubmit, reset, formState: {errors}} = useForm<FormValue>()
    const onSubmitHandler: SubmitHandler<FormValue> = ()=> {
        emailjs.sendForm(serviceId, templateId, form.current!, publicKey)
            .then((result) => {
                // console.log(result.text);
                alert("E-mail sent.")
                reset();
            }, (error) => {
                console.log(error.text);
                alert("Failed!")
            });
    }

    return (
        <article className={"container"}>
            <section className={"container__whole flex__column"}>
                <h1>Contact Me</h1>
                <form className={"form"} ref={form}
                      onSubmit={handleSubmit(onSubmitHandler)}>
                    <label>name</label>
                    <input {...register("name", {required: true})} />
                    <div className={"form__error"}>{errors.name && errors.name.type === "required" && (
                        <>이름을 입력해 주세요.</>
                    )}</div>
                    <label>email</label>
                    <input type="email" {...register("email",
                        {required: true, pattern: /^\S+@\S+$/i})} />
                    <div className={"form__error"}>{errors.email && errors.email.type === "required" && (
                        <>이메일을 정확히 입력해 주세요.</>
                    )}</div>
                    <label>subject</label>
                    <input {...register("subject", {required: true})} />
                    <div className={"form__error"}>{errors.subject && errors.subject.type === "required" && (
                        <>제목을 입력해 주세요.</>
                    )}</div>
                    <label>message</label>
                    <textarea rows={10} {...register("message", {required: true})} />
                    <div className={"form__error"}>{errors.message && errors.message.type === "required" && (
                        <>내용을 입력해 주세요.</>
                    )}</div>
                    <button type={"submit"} className={"button button--main"}>Send</button>
                </form>
            </section>
        </article>
    )
}

export default Contact;