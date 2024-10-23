import "./component2.scss"
import React from "react";
import {Link} from "react-router-dom";
import image_icon from "../../Images/image_icon.png"


const Component2 = () => {

    return(
        <div className="component2">
            <div className="headerDiv">
                <span className="headerText">Пользуйтесь всеми удобствами и возможностями нашего заведения</span>
            </div>


            <div className="infoPointsLayout">

                <div className="infoPointDiv">
                    <div className="infoPointImageDiv">
                        <img
                            className="infoPanelImage"
                            src={image_icon}
                            alt=""
                        />
                    </div>
                    <div className="infoPointTextDiv">
                        <span className="infoPanelHeaderText">
                            10 столов
                        </span>
                        <span className="infoPanelDescText">
                            В нашем заведении имеются:
                            7 столов для русского бильярда
                            и 3 стола для американского пула
                        </span>
                    </div>
                </div>

                <div className="infoPointDiv">
                    <div className="infoPointTextDiv">
                        <span className="infoPanelHeaderText">
                            Оборудование премиум класса
                        </span>
                        <span className="infoPanelDescText">
                            Столы и оборудование высшего класса: сукно Iwan Simonis 760 от мирового лидера и шары Aramith Premier; бильярдный стол для русской пирамиды «Онега» (12 футов, сланец 45мм)
                        </span>
                    </div>
                    <div className="infoPointImageDiv">
                        <img
                            className="infoPanelImage"
                            src={image_icon}
                            alt=""
                        />
                    </div>
                </div>
                <div className="infoPointDiv">
                    <div className="infoPointImageDiv">
                        <img
                            className="infoPanelImage"
                            src={image_icon}
                            alt=""
                        />
                    </div>
                    <div className="infoPointTextDiv">
                        <span className="infoPanelHeaderText">
                            Большая площадь
                        </span>
                        <span className="infoPanelDescText">
                            Большая площадь зала 500 м², продуманный интерьер — все это позволяет нашим гостям с комфортом наслаждаться игрой
                        </span>
                    </div>
                </div>

                <div className="infoPointDiv">
                    <div className="infoPointTextDiv">
                        <span className="infoPanelHeaderText">
                            Индивидуальные тренировки, мастер классы
                        </span>
                        <span className="infoPanelDescText">
                            Индивидуальное занятие или мастер-класс для больших компаний, на которых вас обучат игре в бильярд и трюкам.
                        </span>
                    </div>
                    <div className="infoPointImageDiv">
                        <img
                            className="infoPanelImage"
                            src={image_icon}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component2