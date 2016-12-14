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

import { Ingredient } from "./Ingredient";

require("../../lib/String.prototypes");

var express = require("express");

// Setup router.
var router = express.Router();
module.exports = router;

// JSON keys.
let KEY_INGREDIENT = "ingredient";
let KEY_CATEGORY = "category";

// Load JSON data.
let json = require("../veganbot.json");

// Create Ingredient list from JSON.
let ingredients: Ingredient[] = new Array();
for (let ingredient of json) {
    ingredients.push(
        new Ingredient(ingredient[KEY_INGREDIENT].toLowerCase(), ingredient[KEY_CATEGORY])
    );
}

/**
 * Returns an Ingredient object for the given input. All known ingredients are iterated, comparing
 * its name to the user input. If the ingredient's name is found in the input string, the 
 * ingredient is returned, otherwise a new ingredient with an "undefined" category is returned.
 * 
 * @param  {String} userInput The input string from the user (i.e "What about aloe vera?").
 * @returns Ingredient matching the user input.  
 */
function findIngredient(userInput: String): Ingredient {
    for (let obj of ingredients) {
        let ingredient: Ingredient = obj;
        if (userInput.caseInsensitiveContains(ingredient.name)) {
            return ingredient.toClientVersion();
        }
    }

    // Not found, return unknown Ingredient.
    return Ingredient.unknown(userInput).toClientVersion();
}

router.get("/:" + KEY_INGREDIENT, function(req: any, res: any) {
    res.send(findIngredient(req.params[KEY_INGREDIENT]));
});