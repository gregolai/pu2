import { createParsed, updateParsed } from './parseCSS';

describe('Styled_tmp', () => {
	it('stuff', () => {
		const parsed = createParsed({
			fontSize: 16,
			':hover': {
				fontSize: 32
			}
		});

		let expected = {
			id: 2,
			children: {
				':hover': {
					id: 1,
					checksum: 28118446,
					children: {},
					className: 'g-1:hover',
					str: 'font-size:32;',
					props: {
						fontSize: {
							hash: 28118446,
							propName: 'fontSize',
							value: 32,
							str: 'font-size:32;'
						}
					}
				}
			},
			className: 'g-1',
			str: 'font-size:16;',
			props: {
				fontSize: {
					hash: 28691816,
					propName: 'fontSize',
					value: 16,
					str: 'font-size:16;'
				}
			},
			checksum: 28691816
		};
		//expected.children[':hover'] = expected.children[0];
		//expected.children[0] = expected.children[':hover'];
		expect(parsed).toEqual(expected);

		updateParsed(parsed, {
			// Update thing and add thing
			fontSize: 8,
			color: 'white',

			':hover': {
				// Remove thing and add thing
				color: 'blue'
			}
		});

		expected = {
			...expected,
			checksum: 5407413,
			children: {
				':hover': {
					...expected.children[':hover'],

					checksum: 16222175,
					// id,
					// className: 'g-1:hover',
					str: 'color:blue;',
					props: {
						// @ts-ignore
						color: {
							hash: 16222175,
							propName: 'color',
							value: 'blue',
							str: 'color:blue;'
						}
					}
				}
			},
			// className
			// id
			props: {
				fontSize: {
					hash: 21899988,
					propName: 'fontSize',
					str: 'font-size:8;',
					value: 8
				},
				// @ts-ignore
				color: {
					hash: 18655329,
					propName: 'color',
					value: 'white',
					str: 'color:white;'
				}
			},
			str: 'font-size:8;color:white;'
		};
		expect(parsed).toEqual(expected);

		const generateCSSString = (parsed, obj) => {
			obj.str += `.${parsed.className}{${parsed.str}}`;

			for (let key in parsed.children) {
				generateCSSString(parsed.children[key], obj);
			}
		};

		const obj = { str: '' };
		generateCSSString(expected, obj);

		expect(obj.str).toBe('.g-1{font-size:8;color:white;}.g-1:hover{color:blue;}');

		updateParsed(parsed, {
			// Remove font size. Update color
			color: 'blue',

			// Add h1 sub-selector
			' h1': {
				color: 'salmon'
			}
			// Remove :hover and everything in it
		});

		expected = {
			// @ts-ignore
			children: {
				// @ts-ignore
				' h1': {
					id: 3,
					checksum: 12977747,
					children: {},
					className: 'g-1 h1',
					str: 'color:salmon;',
					props: {
						// @ts-ignore
						color: {
							hash: 12977747,
							propName: 'color',
							value: 'salmon',
							str: 'color:salmon;'
						}
					}
				}
			},
			props: {
				// @ts-ignore
				color: {
					hash: 16222175,
					propName: 'color',
					value: 'blue',
					str: 'color:blue;'
				}
			},
			id: 2,
			className: 'g-1',
			str: 'color:blue;',
			checksum: 16222175
		};

		expect(parsed).toEqual(expected);
	});
});
