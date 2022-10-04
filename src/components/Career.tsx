import "_skills.scss";
import {Fragment} from "react";
import {useTranslation} from "react-i18next";
import Title from "./Title";

function Career() {
    const [t] = useTranslation('career');

    type Company = {
        name?: string;
        role?: string;
        period?: string;
        project?: Project[];
    }
    type Project = {
        title?: string;
        content?: string[];
    }

    const company: Company[] = t('company', {returnObjects: true});

    type Education = {
        [key: string]: any;
        name?: string;
        association?: string;
        period?: string;
        content?: string[];
    }
    const education: Education[] = t('education', {returnObjects: true});

    return (
        <article className={"container flex__column"}>
            <Title title="Career & Experience"/>
            {company ? (company || []).map((com: any, id: number) => (
                    <section key={id} className={"box"}>
                        <h4 className={"box__title bg--gray"}>{com.name}</h4>
                        <div className={"box__content flex__between"}>
                            <div className="box__content__summary">
                                <h5>{com.role}</h5>
                                <h5>{com.period}</h5>
                            </div>
                            <div className={"box__content__detail"}>
                                {com.project ? (com.project || []).map((p: any, pn: number) => (
                                        <Fragment key={pn}>
                                            <h4>{p.title}</h4>
                                            <ul>
                                                {p.content ? (p.content || []).map((pc: string, pcn: number) => (
                                                    <li key={pcn}>{pc}</li>
                                                )) : null}
                                            </ul>
                                        </Fragment>
                                    )
                                ) : null}
                            </div>
                        </div>
                    </section>
                )
            ) : null}

            {education ? (education || []).map((e: any, eid: number) => (
                    <section key={eid} className={"box"}>
                        <h4 className={"box__title bg--gray"}>{e.name}</h4>
                        <div className={"box__content flex__between"}>
                            <div className="box__content__summary">
                                <h5>{e.association}</h5>
                                <h5>{e.period}</h5>
                            </div>
                            <div className={"box__content__detail"}>
                                <ul>
                                    {e ? (e.content || []).map((content: string, cid: number) => (
                                        <li key={`${cid}`}>{content}</li>)) : null}
                                </ul>
                            </div>
                        </div>
                    </section>
                )
            ) : null}
        </article>
    )
}

export default Career;