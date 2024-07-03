/*
 * testResources.js - test file to verify generated resources.
 *
 * Copyright © 2024 JEDLSoft
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
var defaultRSPath = path.join(process.cwd(), "assets/i18n");

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
    var loadData = loadJSON("ko.json");
    var result1 = loadData["App List"];
    var result2 = loadData["App Rating"];
    var result3 = loadData["Back button"];
    var result4 = loadData["Delete All"];
    var result5 = loadData["Search_all"];
    var result6 = loadData["{appName} app cannot be deleted."];
                  
    logResults(arguments.callee.name, "앱 목록", result1);
    logResults(arguments.callee.name, "앱 등급", result2);
    logResults(arguments.callee.name, "이전 버튼", result3);
    logResults(arguments.callee.name, "모두 삭제", result4);
    logResults(arguments.callee.name, "통합 검색", result5);
    logResults(arguments.callee.name, "{appName}앱은 삭제될 수 없습니다.", result6);
}

function testfrCA(){
    var loadData = loadJSON("fr.json");
    var result1 = loadData["App List"];
    var result2 = loadData["App Rating"];
    var result3 = loadData["Back button"];
    var result4 = loadData["Delete All"];
    var result5 = loadData["Search_all"];

    logResults(arguments.callee.name, "Liste des applications", result1);
    logResults(arguments.callee.name, "Évaluation de l'application", result2);
    logResults(arguments.callee.name, "Bouton Retour", result3);
    logResults(arguments.callee.name, "Tout supprimer", result4);
    logResults(arguments.callee.name, "Rechercher", result5);
}

function testfrFR(){
    var loadData = loadJSON("fr_FR.json");
    var result1 = loadData["App List"];
    var result2 = loadData["App Rating"];
    var result3 = loadData["Back button"];
    var result4 = loadData["Delete All"];
    var result5 = loadData["Search_all"];

    logResults(arguments.callee.name, "Liste des applications", result1);
    logResults(arguments.callee.name, "Évaluation de l'application", result2);
    logResults(arguments.callee.name, "Bouton Retour", result3);
    logResults(arguments.callee.name, "Tout supprimer", result4);
    logResults(arguments.callee.name, "Recherche", result5);
}

function testesCO(){
    var loadData = loadJSON("es.json");
    var result1 = loadData["App List"];
    var result2 = loadData["App Rating"];
    var result3 = loadData["Back button"];
    var result4 = loadData["Delete All"];
    var result5 = loadData["Search_all"];
    var result6 = loadData["OK"];
    var result7 = loadData["plural.demo"];

    logResults(arguments.callee.name, "Lista de Aplicaciones", result1);
    logResults(arguments.callee.name, "Clasificación de Aplicación", result2);
    logResults(arguments.callee.name, "Botón regresar", result3);
    logResults(arguments.callee.name, "Eliminar Todo", result4);
    logResults(arguments.callee.name, "Buscar", result5);
    logResults(arguments.callee.name, "Aceptar", result6);
    logResults(arguments.callee.name, "Has pulsado el botón una vez.", result7.one);
    logResults(arguments.callee.name, "Has pulsado el botón dos veces.", result7.two);
    logResults(arguments.callee.name, "Ha pulsado el botón {num} veces.", result7.other);
}

function testesES(){
    var loadData = loadJSON("es_ES.json");
    var result1 = loadData["App List"];
    var result2 = loadData["App Rating"];
    var result3 = loadData["Back button"];
    var result4 = loadData["Delete All"];
    var result5 = loadData["Search_all"];
    var result6 = loadData["OK"];

    logResults(arguments.callee.name, "Lista de aplicaciones", result1);
    logResults(arguments.callee.name, "Clasificación de la aplicación", result2);
    logResults(arguments.callee.name, "Botón atrás", result3);
    logResults(arguments.callee.name, "Eliminar todo", result4);
    logResults(arguments.callee.name, "Búsqueda", result5);
    logResults(arguments.callee.name, "OK", result6);
}

function testenUS(){
    var loadData = loadJSON("en.json");
    var result1 = loadData["App List"];
    var result2 = loadData["App Rating"];
    var result3 = loadData["Back button"];
    var result4 = loadData["Delete All"];
    var result5 = loadData["Search_all"];
    var result6 = loadData["{appName} app cannot be deleted."];

    logResults(arguments.callee.name, "App List", result1);
    logResults(arguments.callee.name, "App Rating", result2);
    logResults(arguments.callee.name, "Back button", result3);
    logResults(arguments.callee.name, "Delete All", result4);
    logResults(arguments.callee.name, "Search", result5);
    logResults(arguments.callee.name, "{appName} app cannot be deleted.", result6);
}

function testjaJP(){
    var loadData = loadJSON("ja.json");
    var result1 = loadData["App List"];
    var result2 = loadData["App Rating"];
    var result3 = loadData["Back button"];
    var result4 = loadData["Delete All"];
    var result5 = loadData["Search_all"];

    logResults(arguments.callee.name, "アプリリスト", result1);
    logResults(arguments.callee.name, "アプリの評価", result2);
    logResults(arguments.callee.name, "[戻る]ボタン", result3);
    logResults(arguments.callee.name, "すべて削除", result4);
    logResults(arguments.callee.name, "検索", result5);
}

function testslSI(){
    var loadData = loadJSON("sl.json");
    var result1 = loadData["Search_all"];
    var result2 = loadData["1#At least 1 letter|#At least {num} letters"];

    logResults(arguments.callee.name, "Iskanje", result1);
    logResults(arguments.callee.name, "Vsaj {num} znak", result2.one);
    logResults(arguments.callee.name, "Vsaj {num} znaka", result2.two);
    logResults(arguments.callee.name, "Vsaj {num} znake", result2.few);
    logResults(arguments.callee.name, "Vsaj {num} znakov", result2.other);
}

testkoKR();
testfrCA();
testfrFR();
testesES();
testesCO();
testenUS();
testjaJP();
testslSI();