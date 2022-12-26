/*
 * testResources.js - test file to verify generated resources.
 *
 * Copyright © 2022 JEDLSoft
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
        console.log(testname + " is passed.");
    } else {
        console.log(testname + " is failed." +  "\n\texpected:\t"+expected+"\tactual:\t\t"+actual);
    }
}

function loadJSON(filepath){
    var loaddata = {};
    var fullPath = path.join(defaultRSPath, filepath);
    if (fs.existsSync(fullPath)){
        data = fs.readFileSync(fullPath, "utf-8");
        jsonData = JSON.parse(data);
        return jsonData;
    }
    return loaddata;
}

function isExistKey(filepath, key){
    var data, jsonData;
    var fullPath = path.join(defaultRSPath, filepath);
    if (fs.existsSync(fullPath)){
        data = fs.readFileSync(fullPath, "utf-8");
        jsonData = JSON.parse(data);
        return (jsonData && jsonData.hasOwnProperty(key)) ? true : false;
    }
    return false;
}

console.log("\n***** `Run testResources.js` file *****");

function testkoKR(){

    var loadData = loadJSON("ko/cstrings.json");
    var result1 = loadData["No"];
    var result2 = loadData["OK"];
                  
    logResults(arguments.callee.name, "아니오", result1);
    logResults(arguments.callee.name, "확인", result2);
}


function testenUS(){
    var loadData = loadJSON("cstrings.json");
    var result1 = loadData["Ivory Coast"];
    var result2 = loadData["Programme"];

    logResults(arguments.callee.name, "Côte d’Ivoire", result1);
    logResults(arguments.callee.name, "Channel", result2);
}

function testenAU(){
    var loadData = loadJSON("en/AU/cstrings.json");

    var result1 = loadData["Service Area Zip Code"];
    var result2 = loadData["TV Program Locks"];
    var result3 = loadData["Programme"];

    logResults(arguments.callee.name, "Service Area Postcode", result1);
    logResults(arguments.callee.name, "TV Rating Locks", result2);
    logResults(arguments.callee.name, "Programme", result3);

    var existKey = isExistKey("en/AU/cstrings.json", "Programme");
    var existKey2 = isExistKey("en/AU/cstrings.json", "Ivory Coast");
    logResults(arguments.callee.name, true, existKey);
    logResults(arguments.callee.name, false, existKey2);
}

function testenGB(){
    var loadData = loadJSON("en/GB/cstrings.json");

    var result1 = loadData["Service Area Zip Code"];
    var result2 = loadData["TV Program Locks"];
    var result3 = loadData["Programme"];

    logResults(arguments.callee.name, "Service Area Postcode", result1);
    logResults(arguments.callee.name, "TV Rating Locks", result2);
    logResults(arguments.callee.name, "Programme", result3);

    var existKey = isExistKey("en/GB/cstrings.json", "Programme");
    var existKey2 = isExistKey("en/GB/cstrings.json", "Ivory Coast");
    logResults(arguments.callee.name, true, existKey);
    logResults(arguments.callee.name, false, existKey2);
}

function testfrCA(){
    var loadData = loadJSON("fr/cstrings.json");

    var result1 = loadData["Agree"];
    var result2 = loadData["Programme"];
    var result3 = loadData["Others"];
    logResults(arguments.callee.name, "D’accord", result1);
    logResults(arguments.callee.name, "Programme", result2);
    logResults(arguments.callee.name, "Autres", result3);
}

function testfrFR(){
    var loadData = loadJSON("fr/FR/cstrings.json");

    var result1 = loadData["Agree"];
    var existKey = isExistKey("fr/FR/cstrings.json", "Others");
    
    logResults(arguments.callee.name, "J'accepte", result1);
    logResults(arguments.callee.name, false, existKey);
}

function testesES(){
    var loadData = loadJSON("es/ES/cstrings.json");
    var result1 = loadData["Sound Out"];
    logResults(arguments.callee.name, "Salida de sonido", result1);
}

function testesCO(){
    var loadData = loadJSON("es/cstrings.json");
    var result1 = loadData["Sound Out"];
    logResults(arguments.callee.name, "Salida de Audio", result1);
}

function testjaJP(){
    var loadData = loadJSON("ja/cstrings.json");
    var result1 = loadData["No"];
    var result2 = loadData["OK"];
    logResults(arguments.callee.name, "いいえ", result1);
    logResults(arguments.callee.name, "確認", result2);
}

testkoKR();
testenUS();
testenAU();
testenGB();
testfrCA();
testfrFR();
testesES();
testesCO();
testjaJP();