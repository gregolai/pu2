import { ParsedCSS } from './parser';

export const createRuleStr = (className: string, obj: ParsedCSS['objs'][0]) => {
	return obj.rules.length ? `.${className}${obj.sel}{${obj.rules.map((r) => r.str).join('')}}` : '';
};
