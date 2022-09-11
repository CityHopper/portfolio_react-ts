import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Career from "./Career";
import Contact from "./Contact";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function Content() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/skills"} element={<Skills/>}/>
                    <Route path={`/career`} element={<Career/>}/>
                    <Route path={`/contact`} element={<Contact/>}/>
                    {/*<Route path={"/search?/*"} element={<Search/>}/>*/}
                    {/*<Route path={`/movies/:id`} element={<Detail/>}/>*/}

                </Routes>
        </BrowserRouter>
    )
}

export default Content;