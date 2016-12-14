//
// Copyright 2016 Train 2.0
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

interface String {
    capitalizeWords(): String;
    caseInsensitiveContains(str: String): boolean;
}

/**
 * @returns A version of the receiver whose characters are lowercase, except the first letter in
 *          each word. For example: "heLLo WOrlD!" will return "Hello World!".
 */
String.prototype.capitalizeWords = function() {
    let words: String[] = this.toLowerCase().split(" ");
    for (let i in words) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

/**
 * @returns True if the given string exists in the receiver; false otherwise. 
 */ 
String.prototype.caseInsensitiveContains = function(str: String) {
    return this.toLowerCase().includes(str.toLowerCase());
}