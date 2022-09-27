import "_skills.scss"
import {useTranslation} from "react-i18next";
import {Fragment} from "react";

function Skills() {
    const [t] = useTranslation("skills");

    interface skill {
        name: string;
        level: number;
        item: Array<string>;
    }

    let skillList: Array<skill> = [
        {name: "Front-end", level: 90, item: ["React", "Redux", "HTML5", "SCSS", "CSS3", "ES6+", "TypeScript"]},
        {name: "Back-end", level: 60, item: ["Flask", "AWS", "Django", "SQL"]},
        {name: "Data Science", level: 50, item: ["Python", "R", "Pandas", "Numpy", "NLP"]},
        {name: "Co-work", level: 70, item: ["Git (GitHub/GitLab)", "Zeplin", "Slack"]}
    ]

    type Certification = {
        date?: string;
        name: string;
        issuer?: string;
        url?: string;
    }

    const certs: Certification[] = t("certifications", {returnObjects: true});
    const works: Certification[] = t("works", {returnObjects: true});

    return (
        <article className={"container flex__wrap"}>
            <section className={"container__half"}>
                <h1>Skills & Qualifications</h1>
                <p>
                    {t("skills-1")}
                </p>
                <p>
                    {t("skills-2")}
                </p>
                <p>
                    {t("skills-3")}
                </p>
            </section>
            <section className={"container__half"}>
                <div className={"chart"}>
                    {skillList.map((i: any, id: number) => (
                        <div className={"chart__group"} key={id}>
                            <h4>{i.name}</h4>
                            <footer>
                                <div style={{width: `${i.level}%`}}/>
                            </footer>
                            <div className={"chart__group__skills flex__start flex__wrap"}>
                                {i.item.map((itm: string, itmId: number) => (
                                    <span key={itmId} className={""}>{itm}</span>
                                ))}
                            </div>
                            <hr/>
                        </div>
                    ))
                    }
                </div>
            </section>
            <section className={"container__whole flex__center"}>
                <div className={"box"}>
                    <h4 className={"box__title bg--gray"}>Certificates</h4>
                    <div className={"certs"}>
                        {certs ? (certs || []).map((cert:any, id:number) => (
                            <Fragment key={id}>
                                <p><strong>{cert.name}</strong></p>
                                <p>{cert.date}</p>
                                <p>{cert.issuer}</p>
                            </Fragment>
                        )) : null}
                    </div>
                </div>
            </section>

            <section className={"container__whole flex__center"}>
                <div className={"box"}>
                    <h4 className={"box__title bg--gray"}>Works</h4>
                    <div className={"works"}>
                        {works ? (works || []).map((w:any, wid:number) => (
                            <Fragment key={wid}>
                                <p><strong>{w.name}</strong></p>
                                <button onClick={() => window.open(`${w.url}`)}>{t("view")}</button>
                            </Fragment>
                        )) : null}
                    </div>
                </div>
            </section>

        </article>
    )
}

export default Skills;