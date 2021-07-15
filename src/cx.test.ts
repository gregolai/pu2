import { cx } from './cx';

describe('cx', () => {
	it('handles strings', () => {
		const c = cx('hawk', undefined, 'squirrel', null, 'bear');
		expect(c).toBe('hawk squirrel bear');
	});

	it('handles arrays', () => {
		const c = cx(['hawk'], 'rabbit', ['bear', undefined, null, 'fox'], ['squirrel']);
		expect(c).toBe('hawk rabbit bear fox squirrel');
	});

	it('handles objects', () => {
		const c = cx(
			{
				squirrel: false,
				bear: 'truthy',
				rabbit: ''
			},
			'fox',
			{
				squirrel: 'truthy',
				bear: ''
			}
		);
		expect(c).toBe('bear fox squirrel');
	});
});
