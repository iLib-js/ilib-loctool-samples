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

var ResBundle = require("ilib/lib/ResBundle");
var defaultRSPath = path.join(process.cwd(), "resources");

function logResults(testname, expected, actual) {
    if (expected === actual) {
        console.log(testname + " is passed.");
    } else {
        console.log(testname + " is failed." +  "\n\texpected:\t"+expected+"\tactual:\t\t"+actual);
    }
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
    var rb = new ResBundle({
        locale:"ko-KR",
        basePath : defaultRSPath
    });

    var result1 = rb.getString("TV Name : ").toString();
    var result2 = rb.getString("Time Settings").toString();

    logResults(arguments.callee.name, "TV Name :", result1);
    logResults(arguments.callee.name, "[App] 시간 설정", result2);
}

function testkoUS(){
    var rb = new ResBundle({
        locale:"ko-US",
        basePath : defaultRSPath
    });
    var result1 = rb.getString("Antenna NEXTGEN TV").toString();
    logResults(arguments.callee.name, "안테나 NEXTGEN TV", result1);    
}

function testenUS(){
    var rb = new ResBundle({
        locale:"en-US",
        basePath : defaultRSPath
    });
    var result1 = rb.getString("Ivory Coast").toString();
    var result2 = rb.getString("Programme").toString();

    logResults(arguments.callee.name, "Côte d’Ivoire", result1);
    logResults(arguments.callee.name, "Channel", result2);
}

function testenAU(){
    var rb = new ResBundle({
        locale:"en-AU",
        basePath : defaultRSPath
    });
    var result1 = rb.getString("Service Area Zip Code").toString();
    var result2 = rb.getString("TV Program Locks").toString();
    var result3 = rb.getString("Programme").toString();
    var result4 = rb.getString("Ivory Coast").toString();

    logResults(arguments.callee.name, "Service Area Postcode", result1);
    logResults(arguments.callee.name, "TV Rating Locks", result2);
    logResults(arguments.callee.name, "Programme", result3);
    logResults(arguments.callee.name, "Côte d’Ivoire", result4);

    var existKey = isExistKey("en/AU/strings.json", "Programme");
    var existKey2 = isExistKey("en/AU/strings.json", "Ivory Coast");
    logResults(arguments.callee.name, true, existKey);
    logResults(arguments.callee.name, false, existKey2);
}

function testenGB(){
    var rb = new ResBundle({
        locale:"en-GB",
        basePath : defaultRSPath
    });
    var result1 = rb.getString("Service Area Zip Code").toString();
    var result2 = rb.getString("TV Program Locks").toString();
    var result3 = rb.getString("Programme").toString();
    var result4 = rb.getString("Ivory Coast").toString();

    logResults(arguments.callee.name, "Service Area Postcode", result1);
    logResults(arguments.callee.name, "TV Rating Locks", result2);
    logResults(arguments.callee.name, "Programme", result3);
    logResults(arguments.callee.name, "Côte d’Ivoire", result4);

    var existKey = isExistKey("en/AU/strings.json", "Programme");
    var existKey2 = isExistKey("en/AU/strings.json", "Ivory Coast");
    logResults(arguments.callee.name, true, existKey);
    logResults(arguments.callee.name, false, existKey2);
}

function testfrCA(){
    var rb = new ResBundle({
        locale:"fr-CA",
        basePath : defaultRSPath
    });
    var result1 = rb.getString("Agree").toString();
    var result2 = rb.getString("Programme").toString();

    logResults(arguments.callee.name, "D’accord", result1);
    logResults(arguments.callee.name, "Programme", result2);
}

function testfrFR(){
    var rb = new ResBundle({
        locale:"fr-FR",
        basePath : defaultRSPath
    });
    var result1 = rb.getString("Agree").toString();
    logResults(arguments.callee.name, "J'accepte", result1);
}

function testesES(){
    var rb = new ResBundle({
        locale:"es-ES",
        basePath : defaultRSPath
    });
    var result1 = rb.getString("Sound Out").toString();
    logResults(arguments.callee.name, "Salida de sonido", result1);
}

function testesCO(){
    var rb = new ResBundle({
        locale:"es-CO",
        basePath : defaultRSPath
    });
    var result1 = rb.getString("Sound Out").toString();
    logResults(arguments.callee.name, "Salida de Audio", result1);
}

function testjaJP(){
    var rb = new ResBundle({
        locale:"ja-JP",
        basePath : defaultRSPath
    });
    var result1 = rb.getString("Live TV").toString();
    var result2 = rb.getString("TV Name : ").toString();
    logResults(arguments.callee.name, "Live TV", result1);
    logResults(arguments.callee.name, "機器名：", result2);
}

function testdeDE(){
    var rb = new ResBundle({
        locale:"de-DE",
        basePath : defaultRSPath
    });
    var result1 = rb.getString("EXIT APP").toString();
    var result2 = rb.getString("SETTINGS").toString();

    logResults(arguments.callee.name, "APP BEENDEN", result1);
    logResults(arguments.callee.name, "EINSTELLUNGEN", result2);
}

testkoKR();
testkoUS();
testenUS();
testenAU();
testenGB();
testfrCA();
testfrFR();
testesCO();
testesES();
testjaJP();
testdeDE();