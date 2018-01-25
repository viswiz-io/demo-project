const express = require('express');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const config = require('./config');

module.exports = async function() {
	console.log('Starting Puppeteer...');
	const browser = await puppeteer.launch({});
	global.__BROWSER__ = browser;
	fs.writeFileSync(config.puppeteerEndpointFile, browser.wsEndpoint());

	console.log('Starting express...');
	const app = express();
	app.use(express.static('public/dist'));
	// Respond to all errors with index.html (since we use client-side routing)
	app.use((req, res, next) => {
		res.sendFile(path.join(__dirname, '../public/dist/index.html'));
	});
	global.__SERVER__ = app.listen(8080);
};
