import "./component1.scss"
import React from "react";
import {Link} from "react-router-dom";
import TextLocalization from "../../Utils/TextLocalization";
import image_icon from "../../Images/image_icon.png";

const Component1 = () => {

    return(
        <div className="component1">

            <div className="addressDiv">
                <a href="https://yandex.ru/maps/-/CDHDfRj0" target="_blank">
                <span className="addressText">
                    город улица дом адрес
                    <br/>
                    метро рядом
                </span>
                </a>
                {/*<link href="https://yandex.ru/maps/-/CDHDfRj0"/>*/}
            </div>

            <div className="logoDiv">
                <img
                    className="logoImg"
                    src={image_icon}
                    alt=""
                />
            </div>

            <div className="numberDiv">
                {/*<span className="numberText"> +7 000 000-00-00 </span>*/}
                <span className="numberText"> <a href="tel:+7-000-000-000-000">+7 000 000-00-00</a> </span>
            </div>


            <div className="mainDiv">
            <div className="mainTitle">
                    <span className="mainTitleText">
                        БИЛЬЯРДНАЯ ЛИГА
                    </span>
                </div>

                <div className="mainDescription">
                    <span className="mainDescriptionText">
                        Лучшее место для отдыха с друзьями, в приятной и спокойной игровой атмосфере
                    </span>
                </div>
            </div>

            <div className="infoPanelsLayout">
                <div className="infoPanel">
                    <img
                        className="infoPanelIcon"
                        src={image_icon}
                        alt=""
                    />
                    <div className="infoPanelDescription">
                        <span className="infoPanelDescriptionText">
                            10 бильярдных столов
                        </span>
                    </div>
                </div>

                <div className="infoPanel">
                    <img
                        className="infoPanelIcon"
                        src={image_icon}
                        alt=""
                    />
                    <div className="infoPanelDescription">
                        <span className="infoPanelDescriptionText">
                            Большая кухня и бар
                        </span>
                    </div>
                </div>

                <div className="infoPanel">
                    <img
                        className="infoPanelIcon"
                        src={image_icon}
                        alt=""
                    />
                    <div className="infoPanelDescription">
                        <span className="infoPanelDescriptionText">
                            Бесплатная парковка
                        </span>
                    </div>
                </div>


                <div className="infoPanel">
                    <img
                        className="infoPanelIcon"
                        src={image_icon}
                        alt=""
                    />
                    <div className="infoPanelDescription">
                        <span className="infoPanelDescriptionText">
                            Работаем 24/7
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component1