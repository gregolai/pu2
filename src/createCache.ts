type Entry<K> = [K, Entry<K> | null];

export interface Cache<K, V> {
	get: (key: K) => V;
	set: (key: K, value: V) => void;
}

export default <K, V>(maxCount: number = Number.MAX_SAFE_INTEGER): Cache<K, V> => {
	let head: Entry<K>,
		tail: Entry<K>,
		count = 0;
	const lookup = new Map<K, V>();

	return {
		get: (key: K) => lookup.get(key),
		set: (key: K, value: V) => {
			if (count < maxCount) {
				const arr: Entry<K> = [key, null];
				if (head) head[1] = arr;
				head = arr;
				if (!tail) tail = head;
				++count;
			} else {
				const [killKey, next] = tail;
				lookup.delete(killKey);
				// delete lookup[killKey];
				tail = next;
			}
			// lookup[key] = value;
			lookup.set(key, value);

			return value;
		}
	};
};
