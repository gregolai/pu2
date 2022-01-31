import { ParsedCSS } from './parser';

export abstract class Handler {
	abstract add(p: ParsedCSS): void;
}
