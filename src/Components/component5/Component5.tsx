import "./component5.scss"
import React from "react";
import {Link} from "react-router-dom";
import image_icon from "../../Images/image_icon.png";


const Component5 = () => {
    return(
        <div className="component5">
            <div className="contactsDiv">
                <div className="contactsHeader">
                    <div className="contactsLogoDiv">
                        <img
                            className="contactsLogoImg"
                            src={image_icon}
                            alt=""
                        />
                    </div>
                </div>
                <div className="contactsBody">
                    <div className="contactsAddressDiv">
                        <div className="addressHeaderDiv">
                            <span className="addressHeaderText"> Адрес </span>
                        </div>

                        <div className="addressDiv">
                            <a href="https://yandex.ru/maps/-/CDHDfRj0" target="_blank">
                            <span className="addressText">
                                город улица дом адрес
                                <br/>
                                метро рядом
                            </span>
                            </a>
                        </div>

                        <div className="addressMetroDiv">
                            <span className="addressMetroText"> Метро Шипиловская </span>
                        </div>
                    </div>


                    <div className="contactsNumberDiv">
                        <div className="numberHeaderDiv">
                            <span className="numberHeaderText"> Контакты </span>
                        </div>

                        <div className="numberBodyDiv">
                            <span className="numberBodyText"> <a
                                href="tel:+7-000-000-000-000">+7 000 000-00-00</a> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component5