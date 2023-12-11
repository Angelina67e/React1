import png3 from "./../img/Group 5.svg"
import png4 from "./../img/bgc.png"
import png5 from "./../img/sss.svg"
import png12 from "./../img/image 3 (Traced).svg"
import png13 from "./../img/image 4 (Traced).svg"
import png14 from "./../img/image 5 (Traced).svg"
import png15 from "./../img/image 6 (Traced).svg"
import png16 from "./../img/work-9.png"
import png17 from "./../img/work-6.png"
import png18 from "./../img/work-3.png"
import png19 from "./../img/work-8.png"
import png20 from "./../img/work-5.png"
import png21 from "./../img/work-2.png"
import png22 from "./../img/work-7.png"
import png23 from "./../img/work-4.png"
import png24 from "./../img/work-1.png"
import Card from "../components/card/Card"
import {card} from "./../helpers/CardList"
import {card2} from "./../helpers/CardList2"
const Home = () => {
    return ( 
        <>
        <main className="page">
                <div className="page__main-block main-block">
                    <div className="main-block__container _container">
                        <div className="main-block__body"> 
                            <h1 className="main-block__title">
                                Салон красоты «Delote-Beauty» на Крестовском
                            </h1>
                            <div className="main-block__buttons">
                                <a href="" className="main-block__button"><img src={png3} alt=""/></a>
                                <a href="" className="main-block__button">Прокрутите вниз</a>
                            </div>
                        </div>  
                    </div>
                    <div className="main-block__image _ibg">
                        <img src={png4} alt="cover"/>
                    </div>
                </div>
            </main>
            <section className="content__container">
                <div className="content__container1 _container">
                    <a className="blok-img" href="">
                        <img src={png5} alt=""/>
                    </a>
                    <div className="blok-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque quam tortor, malesuada iaculis.
                        <br/>
                        <br/>Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.</div>
                </div>
                <div className="content__container2 _container">
                    <div className="content__block">
                        {card.map((card) => {
                            return <Card title={card.title} img={card.img}/>
                        }
                        )}
                    </div>
                    <div className="content__block _otc">
                        {card2.map((card2) => {
                            return <Card title={card2.title} img={card2.img}/>
                        }
                        )}
                    </div>
                </div>
                <div className="content__container3 _container">
                    <div className="icon-block">
                        <a href="" className="icon">
                            <img src={png12} alt=""/>
                        </a>
                        <a href="" className="icon">
                            <img src={png13} alt=""/>
                        </a>
                        <a href="" className="icon">
                            <img src={png14} alt=""/>
                        </a>
                        <a href="" className="icon">
                            <img src={png15} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="content__container4 _container">
                    <div className="text-conblok4">Наши работы</div>
                    <ul className="menu__listt">
                        <li className="menu__iteme">
                            <a href="serials.html" className="menu__link">Показать все</a>
                        </li>
                        <li className="menu__iteme">
                            <a href="mult.html" className="menu__link">Парикмахерские услуги</a>
                        </li>
                        <li className="menu__iteme">
                            <a href="films.html" className="menu__link">Маникюр</a>
                        </li>
                        <li className="menu__iteme">
                            <a href="films.html" className="menu__link">Педикюр</a>
                        </li>
                    </ul>
                    <div className="content-cardd">
                        <a href="" className="images _nbb">
                            <img className="cdf" src={png16} alt=""/>
                        </a>
                        <a href="" className="images _nbb">
                            <img className="cdf" src={png17} alt=""/>
                        </a>
                        <a href="" className="images _ns">
                            <img className="cdf" src={png18} alt=""/>
                        </a>
                    </div>
                    <div className="content-cardd _po">
                        <a href="" className="images _nbb">
                            <img className="cdf" src={png19} alt=""/>
                        </a>
                        <a href="" className="images _nbb">
                            <img className="cdf" src={png20} alt=""/>
                        </a>
                        <a href="" className="images _ns">
                            <img className="cdf" src={png21} alt=""/>
                        </a>
                    </div>
                    <div className="content-cardd _po">
                        <a href="" className="images _nbb">
                            <img className="cdf" src={png22} alt=""/>
                        </a>
                        <a href="" className="images _nbb">
                            <img className="cdf" src={png23} alt=""/>
                        </a>
                        <a href="" className="images _ns">
                            <img className="cdf" src={png24} alt=""/>
                        </a>
                    </div>
                </div>
            </section>
            </>
     );
}
 
export default Home;