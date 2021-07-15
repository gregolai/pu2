import { createParsed } from './parseCSS';

describe('Styled_tmp', () => {
	it('stuff', () => {
		return;
		let parsed = createParsed(
			{
				fontSize: 16,
				':hover': {
					fontSize: 32
				}
			},
			undefined
		);

		let expected = {
			children: {
				':hover': {
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

		parsed = createParsed(
			{
				// Update thing and add thing
				fontSize: 8,
				color: 'white',

				':hover': {
					// Remove thing and add thing
					color: 'blue'
				}
			},
			parsed
		);

		expected = {
			...expected,
			checksum: 5407413,
			children: {
				':hover': {
					...expected.children[':hover'],

					checksum: 16222175,
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

		parsed = createParsed(
			{
				// Remove font size. Update color
				color: 'blue',

				// Add h1 sub-selector
				' h1': {
					color: 'salmon'
				}
				// Remove :hover and everything in it
			},
			parsed
		);

		expected = {
			// @ts-ignore
			children: {
				// @ts-ignore
				' h1': {
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
			className: 'g-1',
			str: 'color:blue;',
			checksum: 16222175
		};

		expect(parsed).toEqual(expected);
	});
});
