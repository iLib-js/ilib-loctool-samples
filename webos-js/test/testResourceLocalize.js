/*
 * testResourcesLocalize.js - test file for normal `localize` mode output
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
var path = require("path");
var fs = require("fs");
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

console.log("\n***** Run `testResourceLocalize.js` file  *****");
function testkoKR(){
    var rb = new ResBundle({
        locale:"ko-KR",
        basePath : defaultRSPath
    });
    // common data path.
    var result1 = rb.getString("Please enter password.").toString();
    logResults(arguments.callee.name, "[common] 비밀번호를 입력해 주세요.", result1);
}

function testjaJP(){
    var rb = new ResBundle({
        locale:"ja-JP",
        basePath : defaultRSPath
    });

    // fyi. https://github.com/iLib-js/ilib-loctool-webos-javascript/pull/34
    var result1 = rb.getString("To read the Terms and Conditions, go to Settings > Support >  Privacy & Terms.").toString();
    logResults(arguments.callee.name, "利用規約を読むには、設定 > サポート > 利用規約 & 法的情報に移動します。", result1);
}

function testenGB(){
    var rb = new ResBundle({
        locale:"en-GB",
        basePath : defaultRSPath
    });
    // common data's locale Inheritence
    var result1 = rb.getString("Game Optimizer").toString();
    var result2 = rb.getString("HDMI Deep Color").toString();
    //multi-space
    var result3 = rb.getString("Go to  'Settings > General > Channels > Channel Tuning & Settings > Transponder Edit' and add one.").toString();

    logResults(arguments.callee.name, "Game Optimiser", result1);
    logResults(arguments.callee.name, "HDMI Deep Colour", result2);
    logResults(arguments.callee.name, "Go to 'Settings > General > Programmes > Programme Tuning & Settings > Transponder Edit' and add one.", result3);
}

function testenAU(){
    var rb = new ResBundle({
        locale:"en-AU",
        basePath : defaultRSPath
    });
    // common data's locale Inheritence
    var result1 = rb.getString("Game Optimizer").toString();
    var result2 = rb.getString("HDMI Deep Color").toString();
    //multi-space
    var result3 = rb.getString("Go to  'Settings > General > Channels > Channel Tuning & Settings > Transponder Edit' and add one.").toString();

    logResults(arguments.callee.name, "Game Optimiser", result1);
    logResults(arguments.callee.name, "HDMI Deep Colour", result2);
    logResults(arguments.callee.name, "Go to 'Settings > General > Programmes > Programme Tuning & Settings > Transponder Edit' and add one.", result3);
}

function testfrCA(){
    var rb = new ResBundle({
        locale:"fr-CA",
        basePath : defaultRSPath
    });
    // common data
    var result1 = rb.getString("Exit").toString();
    logResults(arguments.callee.name, "Quitter", result1);

    var existKey = isExistKey("fr/strings.json", "Exit");
    logResults(arguments.callee.name, true, existKey);
}

function testfrFR(){
    var rb = new ResBundle({
        locale:"fr-FR",
        basePath : defaultRSPath
    });
    // common data
    var result1 = rb.getString("Exit").toString();
    logResults(arguments.callee.name, "Quitter", result1);

    var existKey = isExistKey("fr/FR/strings.json", "Exit");
    logResults(arguments.callee.name, false, existKey);
}

function testesCO(){
    var rb = new ResBundle({
        locale:"es-CO",
        basePath : defaultRSPath
    });
    // common data
    var result1 = rb.getString("OK").toString();
    logResults(arguments.callee.name, "Aceptar", result1);
}

function testesES(){
    var rb = new ResBundle({
        locale:"es-ES",
        basePath : defaultRSPath
    });
    // common data
    var result1 = rb.getString("OK").toString();
    logResults(arguments.callee.name, "OK", result1);

    var existKey = isExistKey("es/ES/strings.json", "OK");
    logResults(arguments.callee.name, true, existKey);

}

testkoKR();
testjaJP();
testenGB();
testenAU();
testfrCA();
testfrFR();
testesCO();
testesES();