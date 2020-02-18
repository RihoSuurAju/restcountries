const port = 3000;

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.set("view engine", "ejs")
app.use(express.static("public"));

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
    let cCode = d.callingCodes[0];
    return cCode;
}

function getLanguage(d){
    let lang = d.languages[0].name;
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

function getFlag(d){
    let flag = d.flag;
    return flag;
}

function getCurrency(d){
    let currency = d.currencies[0].symbol;
    return currency;
}

app.get('/', (req, res) => {
    
    let url = "https://restcountries.eu/rest/v2/name/eesti";

    request(url, function(error, response, body){
        let data = JSON.parse(response.body);
        data = data[0];

        res.render('index', {
            country: getCountry(data),
            region: getRegion(data),
            subregion: getSubRegion(data),
            callingcode: getCallingCode(data),
            language: getLanguage(data),
            population: getPopulation(data),
            topLevelDomain: getTopDomain(data),
            alpha3Code: getAlpha3Code(data),
            currency: getCurrency(data),
            flag: getFlag(data)
        })
    })
})

app.listen(process.env.PORT || port, function(){
    console.log("Server is vibing");
})
