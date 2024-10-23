import "./component3.scss"
import React from "react";
import {Link} from "react-router-dom";

const Component3 = () => {
    return(
        <div className="component3">
            <div className="header">
                <span className="headerText">ПРАЙС</span>
            </div>

            <div className="priceLayout">
                <div className="priceDiv">
                    <div className="priceHeaderDiv">
                        <span className="priceHeaderText">РУССКИЙ БИЛЬЯРД</span>
                    </div>
                    <div className="priceBodyDiv">
                        <div className="priceBodyTopDiv">
                            <div className="priceBodyTopLeftDiv">
                                <span className="priceBodyText">до 17:00</span>
                            </div>
                            <div className="priceBodyTopRightDiv">
                                <span className="priceBodyText">1200 рублей</span>
                            </div>
                        </div>
                        <div className="priceBodyBottomDiv">
                            <div className="priceBodyBottomLeftDiv">
                                <span className="priceBodyText">после 17:00</span>
                            </div>
                            <div className="priceBodyBottomRightDiv">
                                <span className="priceBodyText">1500 рублей</span>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="priceDiv">
                    <div className="priceHeaderDiv">
                        <span className="priceHeaderText">АМЕРИКАНСКИЙ ПУЛ</span>
                    </div>
                    <div className="priceBodyDiv">
                        <div className="priceBodyTopDiv">
                            <div className="priceBodyTopLeftDiv">
                                <span className="priceBodyText">до 17:00</span>
                            </div>
                            <div className="priceBodyTopRightDiv">
                                <span className="priceBodyText">1200 рублей</span>
                            </div>
                        </div>
                        <div className="priceBodyBottomDiv">
                            <div className="priceBodyBottomLeftDiv">
                                <span className="priceBodyText">после 17:00</span>
                            </div>
                            <div className="priceBodyBottomRightDiv">
                                <span className="priceBodyText">1500 рублей</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component3