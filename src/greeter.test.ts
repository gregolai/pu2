import { Greeter } from './greeter';

describe(`Greeter`, () => {
	let greeter: Greeter;

	beforeEach(() => {
		greeter = new Greeter('World');
	});

	it(`should greet`, () => {
		const actual = greeter.greet([3, 4, 5]);
		const expected = 'Hello, World! 3,4,5';

		expect(actual).toBe(expected);
	});

	it(`should greet and print deprecation message if in dev mode`, () => {
		const spyWarn = jest.spyOn(console, 'warn');
		const actual = greeter.greetMe();
		const expected = 'Hello, World! 0,1,2';

		expect(actual).toBe(expected);
		expect(spyWarn).toHaveBeenCalledWith('this method is deprecated, use #greet instead');
	});
});
