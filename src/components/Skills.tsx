import "_skills.scss"

function Skills () {
    interface skill {
        name: string;
        level: number;
    }

    let skillList: Array<skill> = [
        {name: "Front-end", level: 90},
        {name: "Back-end", level: 60},
        {name: "React.js", level: 60},
        {name: "JavaScript", level: 40}
    ]

    return (
        <article className={"container"}>
            <section className={"container__half"}>
                <h1>Skills</h1>
                <p>
                    I create successful responsive websites with up-to-date technologies.
                    The main area of my expertise is front-end development, HTML, CSS, JS, and building small and medium web apps.
                </p>
                <p>
                </p>
                    I also have a back-end experience,
                    which I built an API by Flask in order to provide geographic data(GeoJson) on AWS by myself.
                <p>
                </p>
            </section>
            <section className={"container__half"}>
                <table className={"chart"}>
                { skillList.map((i, index) => (
                    <tr>
                        <span>{i.name}</span>
                        <footer>
                            <div style={{width: `${i.level}%`}} />
                        </footer>
                    </tr>
                ))
                }
                </table>
            </section>
        </article>
    )
}

export default Skills;