import "./component1Mobile.scss"
import React from "react";
import image_icon from "../../../Images/image_icon.png";

const Component1Mobile = () => {

    return(
        <div className="component1">

            <div className="addressDivMobile">
                <a href="https://yandex.ru/maps/-/CDHDfRj0" target="_blank">
                <span className="addressText">
                    город улица дом адрес
                    <br/>
                    метро рядом
                </span>
                </a>
                {/*<link href="https://yandex.ru/maps/-/CDHDfRj0"/>*/}
            </div>

            {/*<div className="logoDiv">*/}
            {/*    <img*/}
            {/*        className="logoImg"*/}
            {/*        src={image_icon}*/}
            {/*        alt=""*/}
            {/*    />*/}
            {/*</div>*/}

            <div className="numberDivMobile">
                <span className="numberTextMobile"> <a href="tel:+7-000-000-000-000">+7 000 000-00-00</a> </span>
            </div>


            <div className="mainDivMobile">
                <div className="mainTitleMobile">
                    <span className="mainTitleTextMobileMobile">
                        БИЛЬЯРДНАЯ ЛИГА
                    </span>
                </div>

                <div className="mainDescriptionMobile">
                    <span className="mainDescriptionTextMobileMobile">
                        Лучшее место для отдыха с друзьями, в приятной и спокойной игровой атмосфере
                    </span>
                </div>
            </div>

            <div className="infoPanelsLayoutMobile">
                <div className="infoPanelMobile">
                    <img
                        className="infoPanelIcon"
                        src={image_icon}
                        alt=""
                    />
                    <div className="infoPanelDescriptionMobile">
                        <span className="infoPanelDescriptionTextMobile">
                            10 бильярдных столов
                        </span>
                    </div>
                </div>

                <div className="infoPanelMobile">
                    <img
                        className="infoPanelIcon"
                        src={image_icon}
                        alt=""
                    />
                    <div className="infoPanelDescriptionMobile">
                        <span className="infoPanelDescriptionTextMobile">
                            Большая кухня и бар
                        </span>
                    </div>
                </div>

                {/*<div className="infoPanel">*/}
                {/*    <img*/}
                {/*        className="infoPanelIcon"*/}
                {/*        src={image_icon}*/}
                {/*        alt=""*/}
                {/*    />*/}
                {/*    <div className="infoPanelDescription">*/}
                {/*        <span className="infoPanelDescriptionText">*/}
                {/*            Бесплатная парковка*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*</div>*/}


                {/*<div className="infoPanel">*/}
                {/*    <img*/}
                {/*        className="infoPanelIcon"*/}
                {/*        src={image_icon}*/}
                {/*        alt=""*/}
                {/*    />*/}
                {/*    <div className="infoPanelDescription">*/}
                {/*        <span className="infoPanelDescriptionText">*/}
                {/*            Работаем 24/7*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Component1Mobile