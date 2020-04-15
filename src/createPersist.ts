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
				// We want null to be a valid store value, but localStorage.getItem
				// returns null if the item's not found. To prevent this, we first need
				// to check if the key exists.
				if (!localStorage.hasOwnProperty(persistKey)) {
					return defaultValue;
				}

				// Parse localStorage item. If null, JSON.parse will return null
				return JSON.parse(localStorage.getItem(persistKey));
			},
			write: value => {
				localStorage.setItem(persistKey, JSON.stringify(value));
			}
		};
	}

	return ret as PersistMap<T>;
};

export default createPersist;
