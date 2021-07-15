export type CxClassName = { [key: string]: any } | string | CxClassName[] | undefined;

export const cx = (...args: CxClassName[]) => {
	const classes: string[] = [];

	for (let i = 0, ii = args.length; i < ii; ++i) {
		const arg = args[i];

		/**
		 * No falsy args
		 */
		if (!arg) continue;

		if (typeof arg === 'string') {
			/**
			 * e.g. "my-button"
			 */
			classes.push(arg);
		} else if (Array.isArray(arg)) {
			/**
			 * e.g. ["my-button", "primary"]
			 */
			if (arg.length) {
				const inner = cx(...arg);
				if (inner) classes.push(inner);
			}
		} else if (typeof arg === 'object') {
			/**
			 * e.g. { "my-button": true, "primary": true, "secondary": false }
			 */
			for (const key in arg) {
				if (arg[key]) classes.push(key);
			}
		}
	}

	/**
	 * e.g. "my-button primary"
	 */
	return classes.join(' ');
};
