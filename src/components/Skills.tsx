import "_skills.scss"
import {useTranslation} from "react-i18next";

function Skills () {
    const [t] = useTranslation();

    interface skill {
        name: string;
        level: number;
        item: Array<string>;
    }

    let skillList: Array<skill> = [
        {name: "Front-end", level: 90, item:["React", "Redux", "HTML5", "SCSS", "CSS3", "ES6+", "TypeScript"]},
        {name: "Back-end", level: 60, item:["Flask", "AWS", "Django", "SQL"]},
        {name: "Data Science", level: 50, item:["Python", "R", "Pandas", "Numpy", "NLP"]},
        {name: "Co-work", level: 70, item: ["Git (GitHub/GitLab)", "Zeplin", "Slack"]}
    ]

    return (
        <article className={"container"}>
            <section className={"container__whole"}>
                <h1>Skills & Qualification</h1>
                <p>
                    {t("skills:skills-1")}
                </p>
                <p>
                    {t("skills:skills-2")}
                </p>
                <p>
                    {t("skills:skills-3")}
                </p>
            </section>
            <section className={"container__half"}>
                <table className={"chart"}>
                { skillList.map((i, index) => (
                    <tr>
                        <h4>{i.name}</h4>
                        <footer>
                            <div style={{width: `${i.level}%`}} />
                        </footer>
                        {i.item.map((itm) => (
                            <span className={""}>{itm}</span>
                        ))}
                        <hr/>
                    </tr>
                ))
                }
                </table>
            </section>
        </article>
    )
}

export default Skills;