const config = require('../config');

describe('/ (Home Page)', () => {
	let page;

	beforeAll(async () => {
		page = await __BROWSER__.newPage();
		await page.setViewport(config.viewport);
		await page.goto(`${config.url}/`);
	}, config.timeout);

	afterAll(async () => {
		await page.close();
	});

	it(
		'should load the home page',
		async () => {
			const text = await page.evaluate(() => document.body.textContent);
			expect(text).toContain('ACME Banana');

			const imageFile = `${config.outputDir}/home.png`;
			await page.screenshot({
				fullPage: true,
				path: imageFile,
			});
		},
		config.timeout,
	);
});
