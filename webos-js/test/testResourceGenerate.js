/*
 * testResourcesSpecial.js - test file to verify resources which generate different results than generate mode
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
   
console.log("\n***** Run `testResourceGenerate.js` file  *****");
function testkoKR(){
    var rb = new ResBundle({
        locale:"ko-KR",
        basePath : defaultRSPath
    });
    // common data path.
    var result1 = rb.getString("Please enter password.").toString();
    logResults(arguments.callee.name, "Please enter password.", result1);
}


function testjaJP(){
    var rb = new ResBundle({
        locale:"ja-JP",
        basePath : defaultRSPath
    });

    // fyi. https://github.com/iLib-js/ilib-loctool-webos-javascript/pull/34
    var result1 = rb.getString("To read the Terms and Conditions, go to Settings > Support >  Privacy & Terms.").toString();
    logResults(arguments.callee.name, "To read the Terms and Conditions, go to Settings > Support >  Privacy & Terms.", result1);
}

testkoKR();
testjaJP();
