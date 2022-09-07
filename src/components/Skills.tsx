import "_skills.scss"

function Skills () {
    interface skill {
        name: string;
        level: number;
        item: Array<string>;
    }

    let skillList: Array<skill> = [
        {name: "Front-end", level: 90, item:["React", "Redux", "HTML5", "SCSS", "CSS3", "ES6+", "TypeScript"]},
        {name: "Back-end", level: 60, item:["Flask", "AWS", "Django", "SQL"]},
        {name: "Data Science", level: 50, item:["Python", "Pandas", "Numpy", "NLP"]},
        {name: "Co-work", level: 70, item: ["Git (GitHub/GitLab)", "Zeplin", "Slack"]}
    ]

    return (
        <article className={"container"}>
            <section className={"container__whole"}>
                <h1>Skills & Qualification</h1>
                <p>
                    I create successful responsive websites with up-to-date technologies.
                    The main area of my expertise is front-end development,
                    HTML, CSS, JS, and building small and medium web apps.
                </p>
                <p>
                    Regarding back-end experience,
                    had built an Flask API providing geographic data(GeoJson) at a start-up company by myself.
                </p>
                <p>
                    I also have data analysis ability with Python(Pandas, numpy) and R.
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