## VEGANbot
A simple Node.js RESTful API that will return information about a vegan-based diet. 

This app was developed in association with Train 2.0. For more information, please visit the [VEGANbot](http://train2point0.com/veganbot/) website.


## Running locally (development)
1. Download the repository
2. Make sure `npm` and `node` are installed
3. In Terminal, navigate to `VEGANbot/`
4. Run `npm install` to install VEGANbot dependencies
5. Run `node veganbot.js`
6. Go to `localhost:8080/Aloe Vera` in any browser


## Supported ingredients
Open `veganbot.json` for a list of supported ingredients. If an unsupported ingredient is put into the URL, it will return `undefined` as the resulting category.
