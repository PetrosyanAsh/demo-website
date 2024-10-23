import "./component4.scss"
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image_icon from "../../Images/image_icon.png";


const Component4 = () => {

    const images = [
        { url: image_icon },
        { url: image_icon },
        { url: image_icon },
        { url: image_icon },
        { url: image_icon },
        { url: image_icon },
    ];

    var width = window.innerWidth * 60 / 100;
    var height = width / 1.77;

    return(
        <div className="component4">
            <div className="headerTitle">
                <span className="headerTitleText">Премиум сервис, Большая лаунж зона, кухня и бар</span>
            </div>
            <div className="headerDescription">
                <span className="headerDescriptionText">В нашем клубе большой выбор разных блюд и напитков, внимательный и заботливый персонал, бесплатный WI-FI, большие телевизоры, приятная музыка</span>
            </div>

            <div className="sliderDiv">
                <SimpleImageSlider
                    // width={width}
                    // height={height}
                    width="60vw"
                    height="33vw"
                    // height="100%"
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    autoPlayDelay={3}
                />
            </div>
            {/*<div className="header">*/}
            {/*    <span className="headerText">component4</span>*/}
            {/*</div>*/}
        </div>
    )
}

export default Component4