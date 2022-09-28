import {useRef} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import emailjs from '@emailjs/browser';
import {useTranslation} from "react-i18next";
import Title from "./Title";

function Contact() {
    const [t] = useTranslation('contact');

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
                alert(t("email_sent"))
                reset();
            }, (error) => {
                console.log(error.text);
                alert(t("email_unsent"))
            });
    }

    return (
        <article className={"container"}>
            <section className={"container__whole flex__column"}>
                <Title title="Contact Me"/>
                <form className={"form"} ref={form}
                      onSubmit={handleSubmit(onSubmitHandler)}>
                    <label>{t("name")}</label>
                    <input {...register("name", {required: true})} />
                    <div className={"form__error"}>{errors.name && errors.name.type === "required" && (
                        <>{t("name_error")}</>
                    )}</div>
                    <label>{t("email")}</label>
                    <input type="email" {...register("email",
                        {required: true, pattern: /^\S+@\S+$/i})} />
                    <div className={"form__error"}>{errors.email && errors.email.type === "required" && (
                        <>{t("email_error")}</>
                    )}</div>
                    <label>{t("subject")}</label>
                    <input {...register("subject", {required: true})} />
                    <div className={"form__error"}>{errors.subject && errors.subject.type === "required" && (
                        <>{t("subject_error")}</>
                    )}</div>
                    <label>{t("message")}</label>
                    <textarea rows={10} {...register("message", {required: true})} />
                    <div className={"form__error"}>{errors.message && errors.message.type === "required" && (
                        <>{t("message_error")}</>
                    )}</div>
                    <button type={"submit"} className={"button button--main"}>{t("send")}</button>
                </form>
            </section>
        </article>
    )
}

export default Contact;