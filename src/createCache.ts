type Entry<K> = [K, Entry<K> | undefined];

export interface Cache<K, V> {
	get: (key: K) => V | undefined;
	set: (key: K, value: V) => void;
}

export default <K, V>(maxCount = Number.MAX_SAFE_INTEGER): Cache<K, V> => {
	let _head: Entry<K> | undefined,
		_tail: Entry<K> | undefined,
		_count = 0,
		_lookup = new Map<K, V>();

	return {
		get: (key: K) => _lookup.get(key),
		set: (key: K, value: V) => {
			if (_count < maxCount) {
				const arr: Entry<K> = [key, undefined];
				if (_head) _head[1] = arr;
				_head = arr;
				if (!_tail) _tail = _head;
				++_count;
			} else if (_tail) {
				_lookup.delete(_tail[0]);
				_tail = _tail[1];
			}
			// lookup[key] = value;
			_lookup.set(key, value);

			return value;
		}
	};
};
