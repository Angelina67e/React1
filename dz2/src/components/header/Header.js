import "./../../styles/style.css";
import png1 from "./../../img/Group 2.png"
import png2 from "./../../img/omega-sign-svgrepo-com 1.png"
import {HeaderLink} from "react-router-dom"
const Header = () => {
    return (
        <header className="header">
                <div className="header__container _container">
                    <a href="" className="header__logo">
                        <img src={png1} alt=""/>
                    </a>
                    <nav className="header__menu menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <HeaderLink to="/" className="menu__link">
                                    Главная
                                </HeaderLink>
                            </li>
                            <li className="menu__item">
                                <HeaderLink to="/masters" className="menu__link">
                                    Мастера
                                </HeaderLink>
                            </li>
                            <li className="menu__item">
                                <HeaderLink to="/prices" className="menu__link">
                                    Косметика
                                </HeaderLink>
                            </li>
                        </ul>
                        <a href="" className="header__logo">
                            <img className="x" src={png2} alt=""/>
                        </a>
                        <ul className="menu__list">
                            <li className="menu__item">
                                <HeaderLink to="/prices" className="menu__link">
                                    Акции
                                </HeaderLink>
                            </li>
                            <li className="menu__item">
                                <HeaderLink to="/prices" className="menu__link">
                                    Отзывы
                                </HeaderLink>
                            </li>
                            <li className="menu__item">
                                <HeaderLink to="/contacts" className="menu__link">
                                    Контакты
                                </HeaderLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="burger">
                        <span></span>
                    </div>
                    
                </div>
                <div className="stick _container"></div>
            </header>
      );
}
 
export default Header;