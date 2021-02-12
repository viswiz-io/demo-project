const fs = require('fs');
const VisWiz = require('viswiz-sdk');
const puppeteer = require('puppeteer');
const config = require('./config');

function random(list) {
	return list[Math.floor(Math.random() * list.length)];
}

function getCommitName() {
	if (process.env.GITHUB_COMMIT_MESSAGE) {
		return process.env.GITHUB_COMMIT_MESSAGE;
	}
	if (fs.existsSync('tmp/commits.txt')) {
		const commits = fs
			.readFileSync('tmp/commits.txt', 'utf-8')
			.replace(/\n$/, '')
			.split('\n');
		return random(commits);
	} else {
		return 'Dev-' + new Date().toISOString();
	}
}

module.exports = async function() {
	console.log('Stopping express...');
	global.__SERVER__.close();

	console.log('Stopping Puppeteer...');
	await global.__BROWSER__.close();

	if (process.env.VISWIZ_API_KEY && process.env.VISWIZ_PROJECT_ID) {
		console.info('Sending build to VisWiz...');
		const client = new VisWiz(process.env.VISWIZ_API_KEY, {
			server: process.env.VISWIZ_SERVER,
		});

		await client.buildWithImages({
			branch: process.env.CI_ACTION_REF_NAME || 'master',
			name: getCommitName(),
			projectID: process.env.VISWIZ_PROJECT_ID,
			revision: process.env.CI_SHA || 'dev-' + new Date().toISOString(),
		}, config.outputDir);
	}
};
