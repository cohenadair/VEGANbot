//
// Copyright {yyyy} {name of copyright owner}
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

var express = require("express")
var app = express()

var KEY_NAME = "ingredient"
var VALUE_NAME = "category"

// Load JSON data.
var json = require("./veganbot.json")

// Create ingredient-category map.
var map = {};
for (var i in json) {
	map[json[i][KEY_NAME].toLowerCase()] = json[i][VALUE_NAME]
}

// Capitalizes the first letter of the given string.
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// @param ingredient The ingredient to look up.
app.get("/:ingredient", function (req, res) {
	var category = map[req.params[KEY_NAME].toLowerCase()] 
	var result = {}
	result[KEY_NAME] = capitalizeFirstLetter(req.params[KEY_NAME].toLowerCase())
	result[VALUE_NAME] = category == undefined ? "undefined" : category
  	res.send(result)
})

app.listen(8080, function () {
  	console.log("VEGANbot listening...")
})