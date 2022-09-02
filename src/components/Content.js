import Header from "./Header";
import Home from "./Home";
import App from "./About";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function Content() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<App/>}/>
                    {/*<Route path={"/search"} element={<Search/>}/>*/}
                    {/*<Route path={"/search?/*"} element={<Search/>}/>*/}
                    {/*<Route path={`/movies/:id`} element={<Detail/>}/>*/}
                    {/*<Route path={`/about`} element={<About/>}/>*/}
                </Routes>
        </BrowserRouter>
    )
}

export default Content;