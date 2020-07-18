type PersistMap<T> = {
	[K in keyof T]: {
		read: () => T[K];
		write: (v: T[K]) => void;
	};
};

const createPersist = <T>(namespace: string, defaultsMap: T) => {
	const ret: Partial<PersistMap<T>> = {};

	for (const key in defaultsMap) {
		const defaultValue = defaultsMap[key];
		const persistKey = `${namespace}.${key}`;

		ret[key] = {
			read: () => {
				const item = localStorage.getItem(persistKey);
				return item === null ? defaultValue : JSON.parse(item);
			},
			write: (value) => {
				localStorage.setItem(persistKey, JSON.stringify(value));
			}
		};
	}

	return ret as PersistMap<T>;
};

export default createPersist;
