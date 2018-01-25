function random(list) {
	return list[Math.floor(Math.random() * list.length)];
}

function randomBoolean() {
	return Math.random() < 0.5;
}

const config = {
	dashboard: {
		menuItemMissing: randomBoolean(),
		kpiMissing: randomBoolean(),
		staffBestColor: random(['green', 'yellow']),
	},
	home: {
		headerIcon: randomBoolean(),
		orderColor: random(['orange', 'red']),
		orderText: random(['Place Order', 'I want BANANAs!']),
	},
};

export default config;
