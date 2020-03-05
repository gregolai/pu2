import createCache from './createCache';

describe('createCache', () => {
	it('sets and returns value', () => {
		const c = createCache();

		c.set('foo', 1);

		expect(c.get('baz')).toBe(undefined);
		expect(c.get('foo')).toBe(1);
	});

	it('handles max size', () => {
		const c = createCache(2);

		c.set('foo', 1);
		c.set('bar', 2);
		c.set('baz', 3);

		expect(c.get('foo')).toBe(undefined);
		expect(c.get('bar')).toBe(2);
		expect(c.get('baz')).toBe(3);
	});
});
