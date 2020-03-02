interface Shorthand {
	propNames: string[];
	append: string;
}

const PX = 'px';

const m = {
	propNames: ['margin'],
	append: PX
};
const mt = {
	propNames: ['marginTop'],
	append: PX
};
const mr = {
	propNames: ['marginRight'],
	append: PX
};
const mb = {
	propNames: ['marginBottom'],
	append: PX
};
const ml = {
	propNames: ['marginLeft'],
	append: PX
};
const my = {
	propNames: ['marginTop', 'marginBottom'],
	append: PX
};
const mx = {
	propNames: ['marginLeft', 'marginRight'],
	append: PX
};
const p = {
	propNames: ['padding'],
	append: PX
};
const pt = {
	propNames: ['paddingTop'],
	append: PX
};
const pr = {
	propNames: ['paddingRight'],
	append: PX
};
const pb = {
	propNames: ['paddingBottom'],
	append: PX
};
const pl = {
	propNames: ['paddingLeft'],
	append: PX
};
const py = {
	propNames: ['paddingTop', 'paddingBottom'],
	append: PX
};
const px = {
	propNames: ['paddingLeft', 'paddingRight'],
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
