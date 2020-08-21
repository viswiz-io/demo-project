const config = require('../config');

describe('/dashboard (Dashboard Page)', () => {
	let page;

	beforeAll(async () => {
		page = await __BROWSER__.newPage();
		await page.setViewport(config.viewport);
		await page.goto(`${config.url}/dashboard${config.random}`);
	});

	afterAll(async () => {
		await page.close();
	});

	it(
		'should load the dashboard page',
		async () => {
			const text = await page.evaluate(() => document.body.textContent);
			expect(text).toContain('KPIs This Week');

			const imageFile = `${config.outputDir}/dashboard.png`;
			await page.screenshot({
				fullPage: true,
				path: imageFile,
			});
		}
	);
});
