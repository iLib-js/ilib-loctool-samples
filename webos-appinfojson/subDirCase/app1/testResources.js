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

console.log("\n***** `Run app1/testResources.js` file *****");

function test_koKR(){
    var loadData = loadJSON("ko/appinfo.json");
    var result1 = loadData["title"];
    var result2 = loadData["vendor"];
    logResults(arguments.callee.name, "[common]현재 방송", result1);
    logResults(arguments.callee.name, "전자", result2);
}

function test_enUS(){
    var loadData = loadJSON("appinfo.json");
    var result1 = loadData["title"];
    logResults(arguments.callee.name, "(en-US) Live TV", result1);
}

function test_enGB(){
    var loadData = loadJSON("en/GB/appinfo.json");
    var result1 = loadData["title"];
    logResults(arguments.callee.name, "(en-GB) Live TV", result1);
}

function test_zhHansCN(){
    var loadData = loadJSON("zh/appinfo.json");
    var result1 = loadData["vendor"];   
    logResults(arguments.callee.name, "电子", result1);
}

test_koKR();
test_enUS();
test_enGB();
test_zhHansCN();