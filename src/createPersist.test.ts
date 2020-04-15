import createPersist from './createPersist';

describe('persist', () => {
	it('read and write', () => {
		const persist = createPersist('Foo', {
			num: 2,
			str: 'hawk'
		});

		expect(persist.num.read()).toBe(2);
		expect(persist.str.read()).toBe('hawk');

		persist.num.write(4);
		persist.str.write('rabbit');

		expect(persist.num.read()).toBe(4);
		expect(persist.str.read()).toBe('rabbit');
	});
});
