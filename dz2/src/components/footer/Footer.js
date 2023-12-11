import "./../../styles/style.css";
import png25 from "./../../img/omega-sign-svgrepo-com 1.png"
import png26 from "./../../img/Group 2.png"
const Footer = () => {
    return (
        <footer className="content__containerf">
            <div className="stick _container"></div>
            <div className="footer-block  _container">
                <a href="" className="header__logo">
                    <img src={png25} alt=""/>
                </a>
                <div className="contacts">
                    <div className="contacts-text">Контакты</div>
                    <div className="text-foot">+7 (812) 123-45-67</div>
                    <div className="text-foot _ki">+7 (812) 123-45-67</div>
                    <div className="text-foot _ki">Новоостровский проспект, дом 36 лит. С</div>
                </div>
                <div className="operating-mode">
                    <div className="contacts-text">Режим работы</div>
                    <div className="text-foot">C 10:00 до 21:00 (Пн-Пт)</div>
                    <div className="text-foot _ki">С 11:00 до 20:00 (Сб-Вс)</div>
                </div>
                <div className="inctagram">
                    <div className="contacts-text">Мы в Instagram</div>
                    <a href="" className="header__logotip">
                        <img src={png26} alt=""/>
                    </a>
                </div>
            </div>
            <div className="stick _container"></div>
            <div className="main-block__button _sa _container">Copyright © 2017 - 2022</div>
        </footer>
      );
}
 
export default Footer;