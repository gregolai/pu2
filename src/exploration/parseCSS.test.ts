import { createParsed } from './parseCSS';

describe('Styled_tmp', () => {
	it('stuff', () => {
		let parsed = createParsed(
			{
				fontSize: 16,
				':hover': {
					fontSize: 32
				}
			},
			undefined
		);

		expect(parsed.rulesStr).toEqual('font-size:16;');
		expect(parsed.children[':hover'].rulesStr).toEqual('font-size:32;');

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

		expect(parsed.rulesStr).toEqual('font-size:8;color:white;');
		expect(parsed.children[':hover'].rulesStr).toEqual('color:blue;');

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

		expect(parsed.rulesStr).toEqual('color:blue;');
		expect(parsed.children[' h1'].rulesStr).toEqual('color:salmon;');

		expect(createParsed({ fontSize: 8, color: 'red' }).checksum).toEqual(
			createParsed({ color: 'red', fontSize: 8 }).checksum
		);
	});
});
