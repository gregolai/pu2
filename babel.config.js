module.exports = {
	env: {
		esm: {
			presets: [
				'@babel/preset-react',
				['@babel/preset-typescript', { isTSX: true, allExtensions: true }]
			]
		}
	}
};
