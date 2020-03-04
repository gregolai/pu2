export default <T>(initSize: number, createFn: () => T) => {
	const _pooled: T[] = [];

	// Init
	for (let i = 0; i < initSize; ++i) {
		_pooled.push(createFn());
	}

	const alloc = () => (_pooled.length === 0 ? createFn() : _pooled.pop());

	const free = (item: T) => {
		if (__DEV__) {
			console.assert(_pooled.indexOf(item) === -1);
		}
		_pooled.push(item);
	};

	return {
		alloc,
		free
	};
};
