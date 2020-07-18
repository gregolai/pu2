export interface Pool<T> {
	alloc(): T;
	free(item: T): void;
}
export default <T>(initSize: number, createFn: () => T): Pool<T> => {
	const _pooled: T[] = [];

	// Init
	for (let i = 0; i < initSize; ++i) {
		_pooled.push(createFn());
	}

	return {
		alloc: () => (_pooled.length === 0 ? createFn() : (_pooled.pop() as T)),
		free: (item: T) => {
			if (__DEV__) {
				console.assert(_pooled.indexOf(item) === -1, 'Pooled item is already free');
			}
			_pooled.push(item);
		}
	};
};
