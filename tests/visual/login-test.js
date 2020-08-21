const config = require('../config');

describe('/login (Login Page)', () => {
	let page;

	beforeAll(async () => {
		page = await __BROWSER__.newPage();
		await page.setViewport(config.viewport);
		await page.goto(`${config.url}/login${config.random}`);
	});

	afterAll(async () => {
		await page.close();
	});

	it(
		'should load the login page',
		async () => {
			const text = await page.evaluate(() => document.body.textContent);
			expect(text).toContain('Log-in to your Banana account');

			const imageFile = `${config.outputDir}/login.png`;
			await page.screenshot({
				fullPage: true,
				path: imageFile,
			});
		}
	);
});
