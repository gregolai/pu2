declare const __DEV__: boolean;

// TODO: WHY SHOULD THIS NEED TO BE HERE?!?!?!?
interface Mapped<T> {
	[key: string]: T;
}
