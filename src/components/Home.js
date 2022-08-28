function Home() {
    return (
        <section className={"container"}>
            <div className={"container__left"}>
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

                <p>
                    Front-end Developer
                </p>
                <button className={"button--main flex__center"}>
                    Contact Me!
                </button>
            </div>
        </section>
    )
}

export default Home;