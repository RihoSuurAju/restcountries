const port = 3000;

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

function getCountry(d) {
    let country = d.name;
    return country;
}

function getRegion(d){
    let region = d.region;
    return region;
}

function getSubRegion(d){
    let subregion = d.subregion;
    return subregion;
}

function getCallingCode(d){
    let cCode = d.callingcodes;
    return cCode;
}

function getLanguage(d){
    let lang = d.languages.name;
    return lang;
}

function getPopulation(d){
    let pop = d.population;
    return pop;
}

function getTopDomain(d){
    let domain = d.topLevelDomain;
    return domain;
}

function getAlpha3Code(d){
    let a3code = d.alpha3Code;
    return a3code;
}

function getCurrency(d){
    let currency = d.currencies[0].symbol;
    return currency;
}

app.get('/', (req, res) => {
    
    let url = "https://restcountries.eu/rest/v2/name/eesti";

    request(url, function(error, response, body){
        let data = JSON.parse(response.body);
        console.log(data);

        //var stringOfTruth = "Name: " + getCountry(data) + "\n Region: " + getRegion(data) + ", " + getSubRegion(data) + "\n Calling Code: " + getCallingCode(data) + "\n Language: " + getLanguage(data) + "\n Population: " + getPopulation(data) + "\n Top Level Domain: " + getTopDomain(data) + "\n Alpha3 Code: " + getAlpha3Code(data) + "\n Currency: " + getCurrency(data);

        res.render('index', {
            country: getCountry(data),
            region: getRegion(data),
            subregion: getSubRegion(data),
            callingcode: getCallingCode(data),
            language: getLanguage(data),
            population: getPopulation(data),
            topLevelDomain: getTopDomain(data),
            alpha3Code: getAlpha3Code(data),
            currency: getCurrency(data)
        })

        res.write(stringOfTruth);
        res.send();
    })
})

app.listen(port, function(){
    console.log("Server is vibing on port 3000");
})
