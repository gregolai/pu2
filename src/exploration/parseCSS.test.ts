import { equal, strictEqual } from 'assert';
import { parseCSS } from './parseCSS';

const getHash = (o) => parseCSS(o).hash;

const hashEq = (o1, o2) => expect(parseCSS(o1).hash).toStrictEqual(parseCSS(o2).hash);
const hashNotEq = (o1, o2) => expect(parseCSS(o1).hash).not.toStrictEqual(parseCSS(o2).hash);

describe('new parse css', () => {
	it('prevents checksum conflicts', () => {
		const SELF_CLASS_KEYS = ['.x', '.y'];
		const SELF_ATTR_KEYS = ['[data-field]', '[name="foo"]'];
		const SELF_PSEUDO_KEYS = [':focus', ':hover'];
		const CHILD_KEYS = [' div', ' .a'];
		const IMM_CHILD_KEYS = ['>div', '>.a'];
		const MEDIA_KEYS = ['@media screen', '@media screen and (max-width: 1000px)'];

		let css1 = {
			color: 'blue',
			lineHeight: '20px'
		};

		let css2 = {
			background: 'orange',
			fontSize: '8px'
		};

		let css3 = {
			m: '20px'
		};

		[SELF_CLASS_KEYS, SELF_ATTR_KEYS, SELF_PSEUDO_KEYS, CHILD_KEYS, IMM_CHILD_KEYS, MEDIA_KEYS].forEach(
			([key0, key1]) => {
				hashEq(
					{
						...css1,
						[key0]: css2,
						...css3
					},
					{
						...css3,
						...css1,
						[key0]: css2
					}
				);

				hashNotEq(
					{
						...css1,
						[key0]: css1,
						[key1]: css2
					},
					{
						...css1,
						[key0]: css2,
						[key1]: css1
					}
				);
			}
		);
	});
	it('stuff', () => {});
});
