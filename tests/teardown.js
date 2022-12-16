module.exports = async function () {
	console.log('Stopping express...');
	global.__SERVER__.close();

	console.log('Stopping Puppeteer...');
	await global.__BROWSER__.close();
};
