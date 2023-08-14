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
var xmljs = require("xml-js");
var defaultRSPath = path.join(process.cwd(), "resources");

function logResults(testname, expected, actual) {
    if (expected === actual) {
        console.log(testname + " has passed.");
    } else {
        console.log(testname + " has failed." +  "\n\texpected:\t"+expected+"\tactual:\t\t"+actual);
    }
}

function loadResource(filepath){
    var fullPath = path.join(defaultRSPath, filepath);
    if (fs.existsSync(fullPath)){
        var tsFile = fs.readFileSync(fullPath, "utf8");
        var options = {trim:false, nativeTypeAttribute: true, compact: true};
        var result = xmljs.xml2js(tsFile, options);
        loaddata = result.TS;
    }
    return loaddata;
}

function compareOutput(funcName, contextRes, expected) {
    for(var i=0; i < contextRes.length; i++) {
        var name = contextRes[i].name._text;
        var msg = contextRes[i].message;
        var translation;
        msg = Array.isArray(msg) === true ? msg : [msg];

        for(var j=0; j < msg.length; j++) {
            translation = msg[j].translation._text;
            logResults(funcName, expected[name][j], translation);
        }
    }
}

function line() {
    console.log("---------------------------------");
}

console.log("\n***** `Run testResources.js` file *****");

function testkoKR(){
    var loadData = loadResource("music_ko.ts");
    
    var contextRes = loadData.context;
    contextRes = Array.isArray(contextRes) === true ? contextRes : [contextRes];
    logResults(arguments.callee.name, contextRes.length, 4);

    var expected = {
        "StringSheet": [ "앨범", "오디오", "저장 안 함", "장르", "음악", '네트워크가 연결되지 않았습니다.\n네트워크 설정 확인 후 다시 시도하세요.',
                        "재생 중", "재생목록",'[common] 비밀번호를 입력해 주세요.', "노래", "[common] 시간 설정"],
        "context" : ["검색"],
        "sample" : ["설정"],
        "systemUI": ['사용할 수 없는 기능입니다.'],
        "appLaunch": ['사용할 수 없는 기능입니다.']
    }
    compareOutput("testkoKR", contextRes, expected);
    line();
}

function testenUS(){
    var loadData = loadResource("music_en.ts");
    
    var contextRes = loadData.context;
    contextRes = Array.isArray(contextRes) === true ? contextRes : [contextRes];
    logResults(arguments.callee.name, contextRes.length, 1);

    var expected = {
        "StringSheet": ["Service Area Zip Code", "TV Program Locks"]
    }
    compareOutput("testenUS", contextRes, expected);
    line();
}

function testenJP(){
    var loadData = loadResource("music_en_JP.ts");
    
    var contextRes = loadData.context;
    contextRes = Array.isArray(contextRes) === true ? contextRes : [contextRes];
    logResults(arguments.callee.name, contextRes.length, 1);

    var expected = {
        "StringSheet": ["Game Optimiser", "HDMI Deep Colour", "Service Area Postcode", "TV Rating Locks"]
    }
    compareOutput("testenJP", contextRes, expected);
    line();
}

function testenGB(){
    var loadData = loadResource("music_en_GB.ts");
    
    var contextRes = loadData.context;
    contextRes = Array.isArray(contextRes) === true ? contextRes : [contextRes];
    logResults(arguments.callee.name, contextRes.length, 1);

    var expected = {
        "StringSheet": ["Game Optimiser", "HDMI Deep Colour", "Service Area Postcode", "TV Rating Locks"]
    }
    compareOutput("testenGB", contextRes, expected);
    line();
}
function testenAU(){
    var loadData = loadResource("music_en_AU.ts");
    
    var contextRes = loadData.context;
    contextRes = Array.isArray(contextRes) === true ? contextRes : [contextRes];
    logResults(arguments.callee.name, contextRes.length, 1);

    var expected = {
        "StringSheet": ["Game Optimiser", "HDMI Deep Colour", "Service Area Postcode", "TV Rating Locks"]
    }
    compareOutput("testenAU", contextRes, expected);
    line();
}

function testesES(){
    var loadData = loadResource("music_es_ES.ts");
    
    var contextRes = loadData.context;
    contextRes = Array.isArray(contextRes) === true ? contextRes : [contextRes];
    logResults(arguments.callee.name, contextRes.length, 1);

    var expected = {
        "StringSheet": ["Salida de sonido"]
    }
    compareOutput("testesES", contextRes, expected);
    line();
}

function testesCO(){
    var loadData = loadResource("music_es.ts");
    
    var contextRes = loadData.context;
    contextRes = Array.isArray(contextRes) === true ? contextRes : [contextRes];
    logResults(arguments.callee.name, contextRes.length, 1);

    var expected = {
        "StringSheet": ["Salida de Audio"]
    }
    compareOutput("testesCO", contextRes, expected);
    line();
}

function testfrFR(){
    var loadData = loadResource("music_fr_FR.ts");
    
    var contextRes = loadData.context;
    contextRes = Array.isArray(contextRes) === true ? contextRes : [contextRes];
    logResults(arguments.callee.name, contextRes.length, 1);

    var expected = {
        "StringSheet": ["Quitter", "Autres"]
    }
    compareOutput("testfrFR", contextRes, expected);
    line();
}

function testfrCA(){
    var loadData = loadResource("music_fr.ts");
    
    var contextRes = loadData.context;
    contextRes = Array.isArray(contextRes) === true ? contextRes : [contextRes];
    logResults(arguments.callee.name, contextRes.length, 1);

    var expected = {
        "StringSheet": ["Quitter"]
    }
    compareOutput("testfrCA", contextRes, expected);
    line();
}

function testitIT(){
    var loadData = loadResource("music_it.ts");
    
    var contextRes = loadData.context;
    contextRes = Array.isArray(contextRes) === true ? contextRes : [contextRes];
    logResults(arguments.callee.name, contextRes.length, 1);

    var expected = {
        "StringSheet": ["Album", "Audio", "Generi", "Musica", "Ora in riproduzione", "Elenco di riproduzione",
        "[common] Immettere la password.", "Canzoni", "[common] Impostazioni Orario"]
    }
    compareOutput("testitIT", contextRes, expected);
    line();
}

function testasIN(){
    var loadData = loadResource("music_as.ts");
    
    var contextRes = loadData.context;
    contextRes = Array.isArray(contextRes) === true ? contextRes : [contextRes];
    logResults(arguments.callee.name, contextRes.length, 1);

    var expected = {
        "StringSheet": ["পুনৰ চেষ্টা", "পুনৰাম্ভ কৰক"]
    }
    compareOutput("testasIN", contextRes, expected);
    line();
}

testkoKR();
testenUS();
testenJP();
testenGB();
testenAU();
testesES();
testesCO();
testfrFR();
testfrCA();
testitIT();
testasIN();