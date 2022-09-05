function Home() {
    return (
        <section className={"container flex__row flex__start"}>
            <div className={"name-card"}>
                <p>
                    Younghoon KANG, <br/>
                    Front-end Developer
                </p>
                <button className={"button--main flex__center"}>
                    Contact Me!
                </button>
            </div>
            <ul className="word-step">
                <li className="word-step__line">
                    <p>&nbsp;</p>
                    <p>Hi!</p>
                </li>
                <li className="word-step__line">
                    <p>Hi!</p>
                    <p>I'm Young</p>
                </li>
                <li className="word-step__line">
                    <p>I'm Young,</p>
                    <p>A web</p>
                </li>
                <li className="word-step__line">
                    <p>A web</p>
                    <p>developer</p>
                </li>
                <li className="word-step__line">
                    <p>developer</p>
                    <p>&nbsp;</p>
                </li>
            </ul>
        </section>
    )
}

export default Home;