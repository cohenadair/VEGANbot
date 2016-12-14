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

import { Ingredient } from "../VEGANbot/ingredient_category/Ingredient";

let request = require("supertest");
let assert = require("assert");

// The main URL for this route.
const URL = "/veganbot/ingredient_category/";

describe("responses", function() {
    let server: any;

    beforeEach(function() {
        delete require.cache[require.resolve('../api')];
        server = require("../api");
    });

    afterEach(function() {
        server.close();
    });

    // Test to make sure URLs respond correctly.
    it("(@deprecated) url /", function(done) {
        request(server)
            .get("/aloe%20vera")
            .expect(200)
            .expect("Content-Type", /json/, done);
    });

    it("(@deprecated) url /veganbot", function(done) {
        request(server)
            .get("/veganbot")
            .expect(200, done)
    });

    it("url " + URL, function(done) {
        request(server)
            .get(URL + "/aloe%20vera")
            .expect(200)
            .expect("Content-Type", /json/, done);
    });

    // Test all lowercase input (should correctly capitalize ingredient).
    it("all lower case", function(done) {
        request(server)
            .get(URL + "aloe%20vera")
            .end(function(err: any, res: any) {
                let ingredient: Ingredient = Ingredient.fromJson(res.body);
                assert.equal(ingredient.name, "Aloe Vera");
                assert.equal(ingredient.category, "Vegan");
                done();
            });
    });

    // Test invalid input.
    it("invalid input", function(done) {
        request(server)
            .get(URL + "some%20random%20ingredient%20that%20doesn't%20exist")
            .end(function(err: any, res: any) {
                let ingredient: Ingredient = Ingredient.fromJson(res.body);
                assert.equal(ingredient.name, "Some Random Ingredient That Doesn't Exist");
                assert.equal(ingredient.category, "Undefined");
                done();
            });
    });

    // Test string that contains a valid ingredient.
    it("input contains ingredient", function(done) {
        request(server)
            .get(URL + "What%20about%20aloe%20vera?")
            .end(function(err: any, res: any) {
                let ingredient: Ingredient = Ingredient.fromJson(res.body);
                assert.equal(ingredient.name, "Aloe Vera");
                assert.equal(ingredient.category, "Vegan");
                done();
            });
    });
});