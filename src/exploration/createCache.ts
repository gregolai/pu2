type Entry = [string, Entry | null];

export default <T>(maxCount: number) => {
	let head: Entry, tail: Entry, count: number, lookup: Mapped<T>;
	const reset = () => {
		head = null;
		tail = null;
		count = 0;
		lookup = {};
	};
	reset();
	return {
		get: (key: string) => lookup[key],
		set: (key: string, value: T) => {
			if (count < maxCount) {
				const arr: Entry = [key, null];
				if (head) head[1] = arr;
				head = arr;
				if (!tail) tail = head;
				++count;
			} else {
				const [killKey, next] = tail;
				delete lookup[killKey];
				tail = next;
			}
			lookup[key] = value;
			return value;
		},
		reset,
		__DEBUG__: () => ({
			lookup
		})
	};
};
