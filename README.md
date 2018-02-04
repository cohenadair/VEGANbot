## Train 2.0 Apps and Services
This repository houses source code for various Train 2.0 apps and services.  For more information, please visit the [Train 2.0 website](http://train2point0.com/).


## Development Tools
* [Visual Studio Code](https://code.visualstudio.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/) 
* [Express](http://expressjs.com/)
* [Mocha](http://mochajs.org/)
* [supertest](https://www.npmjs.com/package/supertest) 


## Testing
1. Download the repository
2. Make sure you have `npm`, `Node,js`, and `TypeScript 2.0+` installed
3. In Terminal, navigate to the `Train-2.0/` directory
5. Run `npm install` to install dependencies
6. Compile TypeScript files: `tsc` or `tsc -w` for automatic compiling when files are modified
7. Run the app: `node api.js`
8. Go to the desired URL (or use `curl`), such as `localhost:8080/veganbot/ingredient_category/aloe%20vera`
9. View the result


## Running Test Suites
1. Make sure you have `mocha` installed globally
2. In Terminal, navigate to the `Train-2.0/` directory
3. Run `mocha`
	> Note that by default, Mocha runs all `.js` files in the `test/` directory
	
4. To run a single test file, run `mocha <file-name.js>`


## Updating the Server
1. `ssh` into server
2. Update repository: `cd Train-2.0 && git pull`
3. Compile TypeScript files: `tsc`
4. Stop the server: `pm2 stop api`
5. Start the server: `pm2 start api.js`


## License

The source code for all Train 2.0 apps and services is available under the Apache 2.0 License. See the [LICENSE](https://github.com/cohenadair/Train-2.0/blob/master/LICENSE) file for more information.


## Contact

**Cohen Adair**
* [GitHub](https://github.com/cohenadair)
* [Twitter](http://twitter.com/cohenadair)
* [LinkedIn](https://ca.linkedin.com/in/cohenadair)
* [Facebook](https://www.facebook.com/cohen.adair)

**Jason Yee and Train 2.0**
* [Train 2.0](http://train2point0.com/)
