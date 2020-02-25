type CxClassName = { [key: string]: any } | string | CxClassName[];

export const cx = (...args: CxClassName[]) => {
	const classes: string[] = [];

	for (let i = 0, ii = args.length; i < ii; ++i) {
		const arg = args[i];
		if (!arg) continue; // No falsy args

		if (typeof arg === 'string') {
			classes.push(arg);
		} else if (Array.isArray(arg)) {
			const inner = cx(...arg);
			if (inner) classes.push(inner);
		} else if (typeof arg === 'object') {
			for (const key in arg) {
				if (arg[key]) classes.push(key);
			}
		}
	}

	return classes.join(' ');
};
