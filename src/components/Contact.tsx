import {useForm, SubmitHandler} from "react-hook-form";

function Contact() {
    interface FormValue {
        name: string;
        email: string;
        subject: string;
        message: string;
    }

    const {register, handleSubmit, formState: {errors}} = useForm<FormValue>()
    const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
        console.log(data)
    }
    return (
        <article className={"container"}>
            <form className={"form"}
                  onSubmit={handleSubmit(onSubmitHandler)}>
                <label>name</label>
                <input {...register("name", {required: true})} />
                {errors.name && errors.name.type === "required" && (
                    <div className={"form__error"}>이름을 입력해 주세요.</div>
                )}
                <label>email</label>
                <input type="email" {...register("email",
                    {required: true, pattern: /^\S+@\S+$/i})} />
                {errors.email && errors.email.type === "required" && (
                    <div className={"form__error"}>이메일을 정확히 입력해 주세요.</div>
                )}
                <label>subject</label>
                <input {...register("subject", {required: true})} />
                {errors.subject && errors.subject.type === "required" && (
                    <div className={"form__error"}>제목을 입력해 주세요.</div>
                )}
                <label>message</label>
                <input {...register("message", {required: true})} />
                {errors.message && errors.message.type === "required" && (
                    <div className={"form__error"}>내용을 입력해 주세요.</div>
                )}
                <button type={"submit"}>Submit</button>

            </form>
        </article>
    )
}

export default Contact;