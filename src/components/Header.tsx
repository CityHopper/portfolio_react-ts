import React, {useCallback, useEffect, useState} from "react";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import "../_header.scss"
import {useTranslation} from "react-i18next";

function Header() {
    const navigate = useNavigate();
    const [isScrolledDown, setIsScrolledDown] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuHandler = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0,0);
    },[location.pathname])


    // // 메뉴바 외부 영역 클릭시 메뉴바 닫기
    // const handleClickOutSide = (e: React.PointerEvent<HTMLBodyElement>) => {
    //     console.log(ref.current.contains(e.target))
    //     if (isMobileMenuOpen && !ref.current.contains(e.target)) {
    //         setIsMobileMenuOpen(false)
    //     }
    // }
    //
    // useEffect(() => {
    //     if (isMobileMenuOpen) document.addEventListener('mousedown', handleClickOutSide)
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutSide)
    //     }
    // })

    const {t, i18n} = useTranslation("home")
    const toggleLocales = useCallback(
        (locale: string) => {
            i18n.changeLanguage(locale);
        }, [i18n]
    );

    const listenScrollEvent = () => {
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

    const [isKo, setIsKo] = useState<boolean>(true);

    useEffect(() => {
        console.log("i18n", i18n.language)
        i18n.language === 'ko-KR' ? setIsKo(true) : setIsKo(false)
    }, [i18n.language])

    return (
        <header>
            <nav role="navigation" className={
                (!isScrolledDown && !isMobileMenuOpen) ? "navbar flex__start" : "navbar navbar--dark flex__start"}>
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
                    <li className="navbar__misc__item flex__between">
                        <button onClick={() => window.open(`https://github.com/CityHopper/react_movie`)}>
                            GitHub</button>
                        <button onClick={() => window.open("https://is-this-it.tistory.com")}>
                            Blog</button>
                    </li>

                    <li className="navbar__misc__item flex__center">
                        {isKo
                            ?
                            <button className={"flex__center"} onClick={() => {
                                setIsMobileMenuOpen(false);
                                toggleLocales("en-US");
                            }}>ENGLISH</button>
                            :
                            <button className={"flex__center"} onClick={() => {
                                setIsMobileMenuOpen(false);
                             toggleLocales("ko-KR")}}>한국어</button>

                        }
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