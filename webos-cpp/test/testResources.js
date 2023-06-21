/*
 * testResources.js - test file to verify generated resources.
 *
 * Copyright © 2022-2023 JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fs = require("fs");
var path = require("path");
var defaultRSPath = path.join(process.cwd(), "resources");

function logResults(testname, expected, actual) {
    if (expected === actual) {
        console.log(testname + " has passed.");
    } else {
        console.log(testname + " has failed." +  "\n\texpected:\t"+expected+"\tactual:\t\t"+actual);
    }
}

function loadJSON(filepath){
    var loaddata = {};
    var fullPath = path.join(defaultRSPath, filepath);
    if (fs.existsSync(fullPath)) {
        data = fs.readFileSync(fullPath, "utf-8");
        loaddata = JSON.parse(data);
        return loaddata;
    }
    return loaddata;
}

function isExistKey(filepath, key){
    var data, jsonData;
    var fullPath = path.join(defaultRSPath, filepath);
    if (fs.existsSync(fullPath)) {
        data = fs.readFileSync(fullPath, "utf-8");
        jsonData = JSON.parse(data);
        return (jsonData && jsonData.hasOwnProperty(key)) ? true : false;
    }
    return false;
}

console.log("\n***** `Run testResources.js` file *****");

function testkoKR(){
    var loadData = loadJSON("ko/cppstrings.json");
    var result1 = loadData["No"];
    var result2 = loadData["Update"];
    var result3 = loadData["Do you want to change the settings from 'Digital Sound Output' to 'Pass Through' to minimize audio delay while playing game?"];
                  
    logResults(arguments.callee.name, "아니오", result1);
    logResults(arguments.callee.name, "업데이트", result2);
    logResults(arguments.callee.name, "'디지털 음향 내보내기' 를 오디오 지연을 최소화하여 게임을 즐길 수 있는 'Pass Through'로 변경할까요?", result3);
}

function testenUS(){
    var loadData = loadJSON("cppstrings.json");
    var result1 = loadData["Ivory Coast"];
    var result2 = loadData["Programme"];

    logResults(arguments.callee.name, "Côte d’Ivoire", result1);
    logResults(arguments.callee.name, "Channel", result2);
}

function testenAU(){
    var loadData = loadJSON("en/AU/cppstrings.json");
    var result1 = loadData["Service Area Zip Code"];
    var result2 = loadData["TV Program Locks"];
    var result3 = loadData["Programme"];
    //common data
    var result4 = loadData["Game Optimizer"];
    var result5 = loadData["HDMI Deep Color"];

    logResults(arguments.callee.name, "Service Area Postcode", result1);
    logResults(arguments.callee.name, "TV Rating Locks", result2);
    logResults(arguments.callee.name, "Programme", result3);
    logResults(arguments.callee.name, "Game Optimiser", result4);
    logResults(arguments.callee.name, "HDMI Deep Colour", result5);

    var existKey = isExistKey("en/AU/cppstrings.json", "Programme");
    var existKey2 = isExistKey("en/AU/cppstrings.json", "Ivory Coast");
    logResults(arguments.callee.name, true, existKey);
    logResults(arguments.callee.name, false, existKey2);
}

function testenGB(){
    var loadData = loadJSON("en/GB/cppstrings.json");
    var result1 = loadData["Service Area Zip Code"];
    var result2 = loadData["TV Program Locks"];
    var result3 = loadData["Programme"];
    //common data
    var result4 = loadData["Game Optimizer"];
    var result5 = loadData["HDMI Deep Color"];

    logResults(arguments.callee.name, "Service Area Postcode", result1);
    logResults(arguments.callee.name, "TV Rating Locks", result2);
    logResults(arguments.callee.name, "Programme", result3);
    logResults(arguments.callee.name, "Game Optimiser", result4);
    logResults(arguments.callee.name, "HDMI Deep Colour", result5);

    var existKey = isExistKey("en/GB/cppstrings.json", "Programme");
    var existKey2 = isExistKey("en/GB/cppstrings.json", "Ivory Coast");
    logResults(arguments.callee.name, true, existKey);
    logResults(arguments.callee.name, false, existKey2);
}

function testfrCA(){
    var loadData = loadJSON("fr/cppstrings.json");
    var result1 = loadData["Agree"];
    var result2 = loadData["Programme"];
    var result3 = loadData["Others"];
    var result5 = loadData["Do you want to change the settings from 'Digital Sound Output' to 'Pass Through' to minimize audio delay while playing game?"];
    //common data
    var result4 = loadData["Exit"];

    logResults(arguments.callee.name, "D’accord", result1);
    logResults(arguments.callee.name, "Programme", result2);
    logResults(arguments.callee.name, "Autres", result3);
    logResults(arguments.callee.name, "Quitter", result4);
    logResults(arguments.callee.name, "Voulez-vous changer les paramètres de « Sortie audio numérique » à « Passage » pour minimiser le délai audio pendant les jeux?", result5);
}

function testfrFR(){
    var loadData = loadJSON("fr/FR/cppstrings.json");
    var result1 = loadData["Agree"];
    var result2 = loadData["Do you want to change the settings from 'Digital Sound Output' to 'Pass Through' to minimize audio delay while playing game?"];
    var existKey = isExistKey("fr/FR/cppstrings.json", "Others");
    var existKey2 = isExistKey("fr/FR/cppstrings.json", "Exit");
    
    logResults(arguments.callee.name, "J'accepte", result1);
    logResults(arguments.callee.name, "Souhaitez-vous modifier les paramètres de « Sortie audio numérique » en « Interconnexion » pour limiter le décalage audio pendant le jeu ?", result2);
    logResults(arguments.callee.name, false, existKey);
    logResults(arguments.callee.name, false, existKey2);
}

function testesES(){
    var loadData = loadJSON("es/ES/cppstrings.json");
    var result1 = loadData["Sound Out"];
    var result2 = loadData["OK"];
    logResults(arguments.callee.name, "Salida de sonido", result1);
    logResults(arguments.callee.name, "OK", result2);

    var existKey = isExistKey("es/ES/cppstrings.json", "OK");
    logResults(arguments.callee.name, true, existKey);
}

function testesCO(){
    var loadData = loadJSON("es/cppstrings.json");
    var result1 = loadData["Sound Out"];
    var result2 = loadData["OK"];
    logResults(arguments.callee.name, "Salida de Audio", result1);
    logResults(arguments.callee.name, "Aceptar", result2);
}

testkoKR();
testenUS();
testenAU();
testenGB();
testfrCA();
testfrFR();
testesES();
testesCO();