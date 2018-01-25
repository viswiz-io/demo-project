const JestNodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');
const fs = require('fs');
const config = require('./config');

class TestEnvironment extends JestNodeEnvironment {
	constructor(config) {
		super(config);
	}

	async setup() {
		await super.setup();

		const wsEndpoint = fs.readFileSync(config.puppeteerEndpointFile, 'utf8');
		if (!wsEndpoint) {
			throw new Error('wsEndpoint not found');
		}

		this.global.__BROWSER__ = await puppeteer.connect({
			browserWSEndpoint: wsEndpoint,
		});
	}

	async teardown() {
		await super.teardown();
	}

	runScript(script) {
		return super.runScript(script);
	}
}

module.exports = TestEnvironment;
