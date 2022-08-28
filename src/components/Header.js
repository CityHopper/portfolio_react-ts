import {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import "../_header.scss"

function Header() {
    const navigate = useNavigate();
    const [isScrolledDown, setIsScrolledDown] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuHandler = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const [onSearching, setOnSearching] = useState(false);

    const listenScrollEvent = event => {
        if (window.scrollY < 50) {
            return setIsScrolledDown(false);
        } else if (window.scrollY >= 50) {
            return setIsScrolledDown(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    const [searchInput, setSearchInput] = useState("");

    const onEnter = (e) => {
        if (e.key === "Enter") {
            setIsMobileMenuOpen(false)
            navigate(`/search?queryTerm=${searchInput}`)
        }
    }

    return (
        <header>
            <nav role="navigation" className={
                (!isScrolledDown && !isMobileMenuOpen) ? "navbar flex__start" : "navbar navbar-dark flex__start"}>
                <Link className="navbar__title"
                      to={"/"} tabIndex={0}>Younghoon KANG</Link>
                <ul
                    className={isMobileMenuOpen
                        ? "navbar__menu active flex__between"
                        : "navbar__menu flex__between"}>
                    <li className="navbar__menu__item">
                        <NavLink className={"flex__center"} onClick={() => setIsMobileMenuOpen(false)}
                                 to={"/about"}>About</NavLink>
                    </li>
                    <li className="navbar__menu__item">
                        <NavLink className={"flex__center"} onClick={() => setIsMobileMenuOpen(false)}
                                 to={"/skills"}>Skills</NavLink>
                    </li>
                    <li className="navbar__menu__item">
                        <NavLink className={"flex__center"} onClick={() => setIsMobileMenuOpen(false)}
                                 to={"/career"}>Career</NavLink>
                    </li>
                    <li className="navbar__menu__item">
                        <NavLink className={"flex__center"} onClick={() => setIsMobileMenuOpen(false)}
                                 to={"/contact"}>Contact</NavLink>
                    </li>
                </ul>
                <ul
                    className={isMobileMenuOpen
                        ? "navbar__misc active"
                        : "navbar__misc"}>
                    <li className="navbar__misc__item flex__center">
                        <NavLink className={"flex__center"} onClick={() => setIsMobileMenuOpen(false)}
                                 to={"/about"}>?</NavLink>
                    </li>
                    <li className="navbar__misc__item flex__center">
                        <NavLink className={"flex__center"} onClick={() => setIsMobileMenuOpen(false)}
                                 to={"/about"}>!</NavLink>
                    </li>
                    <li className="navbar__misc__item flex__center">
                        <NavLink className={"flex__center"} onClick={() => setIsMobileMenuOpen(false)}
                                 to={"/about"}>#</NavLink>
                    </li>
                </ul>

                <div className="navbar__toggle">
                    <input id="navbar__toggle__checkbox" type="checkbox" checked={isMobileMenuOpen}
                           onChange={mobileMenuHandler}
                    />
                    <label className="navbar__toggle__label" htmlFor="navbar__toggle__checkbox">
                        <span/>
                    </label>
                </div>
            </nav>
        </header>
    )
}

export default Header;