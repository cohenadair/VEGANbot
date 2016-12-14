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

require("../../lib/String.prototypes");

export class Ingredient {
    /**
     * @param  {String} name The name for the ingredient. Normally, this would be the user input.
     * @returns Ingredient with an undefined category.
     */
    static unknown(name: String): Ingredient {
        return new Ingredient(name, "undefined");
    }

    /**
     * @param  {any} json
     * @returns Ingredient with properties from the given JSON, or undefined properties if they
     *          don't exist.
     */
    static fromJson(json: any): Ingredient {
        return new Ingredient(json.name, json.category);
    }

    /**
     * @param  {String} name The name of the ingredient.
     * @param  {String} category The category of the ingredient.
     */
    constructor(public readonly name: String, public readonly category: String) {
    }

    /**
     * @returns Ingredient An Ingredient that is ready to be seen by a user.
     */
    toClientVersion(): Ingredient {
        return new Ingredient(this.name.capitalizeWords(), this.category.capitalizeWords());
    }
}