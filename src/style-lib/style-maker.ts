import { ParsedCSS } from './parser';

const createRuleStr = (className: string, obj: ParsedCSS['objs'][0]) => {
	return obj.rules.length ? `.${className}${obj.sel}{${obj.rules.map((r) => r.str).join('')}}` : '';
};

export const createStyleManager = (nextSheetId = 1) => {
	const insertStyleEl = (el: HTMLStyleElement, parent = document.head) => {
		const lastManaged = parent.querySelector(`style[sheet-id="${nextSheetId - 2}"]`);
		if (lastManaged) {
			// Insert after last managed <style[sheet-id]> tag
			lastManaged.after(el);
			return;
		}
		// Attempt to get first non-managed <style> or <link> tag
		const firstNonManaged = parent.querySelector('style,link[rel="stylesheet"]');
		if (firstNonManaged) {
			// Insert before non-managed <style> or <link> tag
			parent.insertBefore(el, firstNonManaged);
		} else {
			// Edge case - no styles or links found. Just insert it at the end
			parent.appendChild(el);
		}
	};

	const createSheet = (mediaQ?: string) => {
		const el = document.createElement('style');
		el.setAttribute('sheet-id', `${nextSheetId++}`);
		if (mediaQ) el.setAttribute('media', mediaQ);
		insertStyleEl(el);
		const sheet = el.sheet as CSSStyleSheet;

		const _add = (className: string, obj: ParsedCSS['objs'][0]) => {
			const str = createRuleStr(className, obj);
			if (__DEV__) {
				const delim = ` /**/    /**/ `;
				const lines = el.innerText.split(delim);
				lines.push(str);
				el.innerText = lines.join(delim);
			} else {
				sheet.insertRule(str, sheet.cssRules.length);
			}
		};

		return {
			add: (className: string, objs: ParsedCSS['objs']) => {
				const n = objs.length;
				for (let i = 0; i < n; ++i) {
					_add(className, objs[i]);
				}
			}
		};
	};

	type ManagedSheet = ReturnType<typeof createSheet>;

	const _mediaSheets: Mapped<ManagedSheet> = {};
	let _sheet: ManagedSheet | null = null;

	const getSheet = () => _sheet || (_sheet = createSheet());
	const getMediaSheet = (mediaQ: string) =>
		_mediaSheets[mediaQ] || (_mediaSheets[mediaQ] = createSheet(mediaQ));

	return {
		add: (obj: ParsedCSS) => {
			getSheet().add(obj.className, obj.objs);
			for (const mediaQ in obj.medias) {
				getMediaSheet(mediaQ).add(obj.className, obj.medias[mediaQ]);
			}
		}
	};
};

export const getSSRStyleString = (parsed: ParsedCSS[]) => {
	let styleStr = '';
	let mediaStrs: Mapped<string> = {};

	// e.g. ".foo{color:blue;}.bar{background:red;}"
	const getStyleStr = (className: string, objs: ParsedCSS['objs']) => {
		return objs.reduce((str, obj) => str + createRuleStr(className, obj), '');
	};

	const n = parsed.length;
	for (let i = 0; i < n; ++i) {
		const { className, medias, objs } = parsed[i];
		styleStr += getStyleStr(className, objs);

		for (const mediaQ in medias) {
			if (!mediaStrs[mediaQ]) mediaStrs[mediaQ] = '';
			mediaStrs[mediaQ] += getStyleStr(className, medias[mediaQ]);
		}
	}

	let mediaStr = '';
	for (const mediaQ in mediaStrs) {
		mediaStr += `<style media="${mediaQ}">${mediaStrs[mediaQ]}</style>`;
	}
	return `<style>${styleStr}</style>${mediaStr}`;
};
