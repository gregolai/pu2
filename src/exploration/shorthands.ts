interface Shorthand {
	ruleNames: string[];
	append: string;
}

const PX = 'px';

const m = {
	ruleNames: ['margin'],
	append: PX
};
const mt = {
	ruleNames: ['marginTop'],
	append: PX
};
const mr = {
	ruleNames: ['marginRight'],
	append: PX
};
const mb = {
	ruleNames: ['marginBottom'],
	append: PX
};
const ml = {
	ruleNames: ['marginLeft'],
	append: PX
};
const my = {
	ruleNames: ['marginTop', 'marginBottom'],
	append: PX
};
const mx = {
	ruleNames: ['marginLeft', 'marginRight'],
	append: PX
};
const p = {
	ruleNames: ['padding'],
	append: PX
};
const pt = {
	ruleNames: ['paddingTop'],
	append: PX
};
const pr = {
	ruleNames: ['paddingRight'],
	append: PX
};
const pb = {
	ruleNames: ['paddingBottom'],
	append: PX
};
const pl = {
	ruleNames: ['paddingLeft'],
	append: PX
};
const py = {
	ruleNames: ['paddingTop', 'paddingBottom'],
	append: PX
};
const px = {
	ruleNames: ['paddingLeft', 'paddingRight'],
	append: PX
};

export default {
	m,
	ml,
	mr,
	mt,
	mb,
	mx,
	my,
	p,
	pl,
	pr,
	pt,
	pb,
	px,
	py
} as Mapped<Shorthand>;
