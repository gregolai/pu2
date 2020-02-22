export class Greeter {
	constructor(private greeting: string) {}
	greet(x: number[]) {
		return `Hello, ${this.greeting}! ${x.join(',')}`;
	}

	greetMe() {
		/* istanbul ignore next line */
		if (__DEV__) {
			// tslint:disable-next-line:no-console
			console.warn('this method is deprecated, use #greet instead');
		}
		// TODO
		const c = Array.from(Array(3)).map((_, i) => i);

		return this.greet(c);
	}
}
