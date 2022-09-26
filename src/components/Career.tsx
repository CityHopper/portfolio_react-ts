import "_skills.scss";
import {Fragment, useEffect} from "react";
import {useTranslation} from "react-i18next";

function Career() {
    const [t] = useTranslation('career');

    const company: Company[] = t('company', {returnObjects: true});

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

    type Education = {
        [key: string]: any;
        name?: string;
        association?: string;
        content?: string[];
    }
    const education: Education = t('education', {returnObjects: true});

    useEffect(() => {
        console.log(company)
    }, [])

    return (
        <article className={"container flex__column"}>
            <h1>Career & Experience</h1>
            {company ? (company || []).map((com: any, id: number) => (
                    <section key={id} className={"box"}>
                        <h4 className={"box__title"}>{com.name}</h4>
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

            <section className={"box"}>
                <h4 className={"box__title"}>{education.name}</h4>
                <div className={"box__content flex__between"}>
                    <div className={"box__content__summary"}>
                        <h5>{education && education.association}</h5>
                        <h5>2019.11 ~ 2020.06</h5>
                    </div>
                    <div className={"box__content__detail"}>
                        <ul>
                            {education ? (education.content || []).map((e: string, eid: number) => (
                                <li key={`${eid}`}>{e}</li>)) : null}
                        </ul>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Career;