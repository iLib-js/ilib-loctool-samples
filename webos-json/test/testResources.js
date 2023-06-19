/*
 * testResources.js - test file to verify generated resources.
 *
 * Copyright © 2023 JEDLSoft
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

function test_koKR(){
    var loadData = loadJSON("ko/appinfo.json");
    var result1 = loadData["title"];
    logResults(arguments.callee.name, "현재 방송", result1);
}

function test_enUS(){
    var loadData = loadJSON("appinfo.json");
    var result1 = loadData["title"];
    var result2 = loadData["vendor"];

    logResults(arguments.callee.name, "(en-US) Live TV", result1);
    logResults(arguments.callee.name, "(dup) test", result2);
}

function test_enAU(){
    var loadData = loadJSON("en/AU/appinfo.json");
    var result1 = loadData["title"];
    logResults(arguments.callee.name, "(en-GB) Live TV", result1);
}

function test_enGB(){
    var loadData = loadJSON("en/GB/appinfo.json");
    var result1 = loadData["title"];
    logResults(arguments.callee.name, "(en-GB) Live TV", result1);
}

function test_frCA(){
    var loadData = loadJSON("fr/appinfo.json");
    var result1 = loadData["title"];
    logResults(arguments.callee.name, "(fr) Live TV", result1);
}

function test_frFR(){
    var loadData = loadJSON("fr/appinfo.json");
    var result1 = loadData["title"];
    logResults(arguments.callee.name, "(fr) Live TV", result1);
}

function test_esES(){
    var loadData = loadJSON("es/ES/appinfo.json");
    var result1 = loadData["title"];   
    logResults(arguments.callee.name, "(es-ES) Live TV", result1);
}

function test_esCO(){
    var loadData = loadJSON("es/appinfo.json");
    var result1 = loadData["title"];   
    logResults(arguments.callee.name, "(es-CO) Live TV", result1);
}

function test_itIT(){
    var loadData = loadJSON("it/appinfo.json");
    var result1 = loadData["title"];   
    logResults(arguments.callee.name, "[common]Canali TV", result1);
}

function test_zhHansCN(){
    var loadData = loadJSON("zh/appinfo.json");
    var result1 = loadData["title"];   
    logResults(arguments.callee.name, "直播电视", result1);
}

function test_zhHantHK(){
    var loadData = loadJSON("zh/Hant/HK/appinfo.json");
    var result1 = loadData["title"];   
    logResults(arguments.callee.name, "Live TV", result1);
}

function test_zhHantTW(){
    var loadData = loadJSON("zh/Hant/TW/appinfo.json");
    var result1 = loadData["title"];   
    logResults(arguments.callee.name, "直播電視", result1);
}

function test_koKR_qcardinfo(){
    var loadData = loadJSON("ko/qcardinfo.json");
    var result1 = loadData["title"];
    var result2 = loadData["description"];
    logResults(arguments.callee.name, "스포츠", result1);
    logResults(arguments.callee.name, "스포츠 정보를 한눈에", result2);
}

console.log("\n***** `Run testResources.js` file (appinfo.json) *****");
test_koKR();
test_enUS();
test_enAU();
test_enGB();
test_frCA();
test_frFR();
test_esES();
test_esCO();
test_itIT();
test_zhHansCN();
test_zhHantHK();
test_zhHantTW();

console.log("\n***** `Run testResources.js` file (qcardinfo.json) *****");
test_koKR_qcardinfo();