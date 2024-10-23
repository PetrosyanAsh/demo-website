import React from "react";

const TextLocalization = (key: string) => {

    function GetLocalizedTextByKey(key: string){
        var localizationDataJson = JSON.stringify(LocalizationData);
        let jsonData = JSON.parse(localizationDataJson);

        let value = ""
        if(jsonData[key] != null && jsonData[key] !== undefined)
            value = jsonData[key].ru;

        return value;
    }


    const LocalizationData = {
        "header_text" : {
            "ru" : "Главный текст",
            "en" : "Main Text"
        },
        "header_description" : {
            "ru" : "Главное описание",
            "en" : "Main description"
        },
    }

    return GetLocalizedTextByKey(key);
}

export default TextLocalization