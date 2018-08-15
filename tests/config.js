const path = require('path');

module.exports = {
	outputDir: path.resolve(__dirname, '..', 'output'),
	puppeteerEndpointFile: path.join(__dirname, '..', 'tmp', 'wsEndpoint'),
	random: `?random=${process.env.RANDOM ? 1 : 0}`,
	timeout: 10000,
	url: 'http://localhost:8080',
	viewport: {
		width: 1200,
		height: 1000,
	},
};
