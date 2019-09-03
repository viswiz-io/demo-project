const RANDOM = window.location.search.indexOf('random=1') > -1;

function list(list) {
	if (!RANDOM) {
		return list[0];
	}
	return list[Math.floor(Math.random() * list.length)];
}

function boolean() {
	if (!RANDOM) {
		return true;
	}
	return Math.random() < 0.5;
}

const config = {
	dashboard: {
		menuItemMissing: boolean(),
		kpiMissing: boolean(),
		staffBestColor: list(['green', 'yellow']),
	},
	home: {
		headerIcon: boolean(),
		orderColor: list(['orange', 'red']),
		orderText: list(['Place Order', 'I want BANANAs!']),
	},
	RANDOM,
};

export default config;
