## VEGANbot - Train 2.0
A simple Node.js RESTful API that will return information about a vegan-based diet. 

This app was developed in association with Train 2.0. For more information, please visit the [VEGANbot](https://train2point0.com/veganbot/) website.

## Status
This project is discontinued and no longer hosted anywhere.

## Supported Ingredients
Open `app/veganbot.json` for a list of supported ingredients. If an unsupported ingredient is put into the URL, it will return `undefined` as the resulting category.


## Development
### Tools
* [Visual Studio Code](https://code.visualstudio.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/) 
* [Express](http://expressjs.com/)
* [Mocha](http://mochajs.org/)
* [supertest](https://www.npmjs.com/package/supertest) 


### Testing
1. Download the repository
2. Make sure you have `npm`, `Node,js`, and `TypeScript 2.0+` installed
3. In Terminal, navigate to the `Train-2.0/` directory
5. Run `npm install` to install dependencies
6. Compile TypeScript files: `tsc` or `tsc -w` for automatic compiling when files are modified
7. Run the app: `node api.js`
8. Go to the desired URL (or use `curl`), such as `localhost:8080/veganbot/ingredient_category/aloe%20vera`
9. View the result


### Running Test Suites
1. Make sure you have `mocha` installed globally
2. In Terminal, navigate to the `Train-2.0/` directory
3. Run `mocha`
	> Note that by default, Mocha runs all `.js` files in the `test/` directory
	
4. To run a single test file, run `mocha <file-name.js>`


### Updating the Server
1. `ssh` into server
2. Update repository: `cd Train-2.0 && git pull`
3. Compile TypeScript files: `tsc`
4. Stop the server: `pm2 stop api`
5. Start the server: `pm2 start api.js`


## Contact

**Cohen Adair**
* [GitHub](https://github.com/cohenadair)
* [Twitter](http://twitter.com/cohenadair)
* [LinkedIn](https://ca.linkedin.com/in/cohenadair)
* [Facebook](https://www.facebook.com/cohen.adair)

**Jason Yee and Train 2.0**
* [Train 2.0](https://train2point0.com/)
