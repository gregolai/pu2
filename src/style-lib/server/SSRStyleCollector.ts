import { ParsedCSS } from '../internal/parser';
import { createRuleStr } from '../internal/utils';
import { Handler } from '../internal/Handler';

// e.g. ".foo{color:blue;}.bar{background:red;}"
const getStyleStr = (className: string, objs: ParsedCSS['objs']) => {
	return objs.reduce((str, obj) => str + createRuleStr(className, obj), '');
};

export class SSRStyleCollector extends Handler {
	_styles: ParsedCSS[] = [];
	_maxI: number = -1;
	add(p: ParsedCSS): void {
		this._styles.push(p);
		this._maxI = Math.max(p.i, this._maxI);
	}
	getHtml() {
		let styleStr = '';
		let mediaStrs: { [mediaQ: string]: string } = {};

		const n = this._styles.length;
		for (let i = 0; i < n; ++i) {
			const { className, medias, objs } = this._styles[i];
			styleStr += getStyleStr(className, objs);

			for (const mediaQ in medias) {
				if (!mediaStrs[mediaQ]) mediaStrs[mediaQ] = '';
				mediaStrs[mediaQ] += getStyleStr(className, medias[mediaQ]);
			}
		}

		let mediaStr = '';
		for (const mediaQ in mediaStrs) {
			mediaStr += `<style media="${mediaQ}" type="text/css">${mediaStrs[mediaQ]}</style>`;
		}
		return `<style type="text/css">${styleStr}</style>${mediaStr}` + this._getScript();
	}

	_getScript() {
		return `<script type="text/javascript">window._ssr_i=${this._maxI};</script>`;
	}
}
