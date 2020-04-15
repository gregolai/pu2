export const enum Scale {
	Color,
	FontSize,
	FontWeight,
	LetterSpacing,
	LineHeight,
	Size,
	Space
}

// SPACING
const m = {
	ruleNames: ['margin'],
	scale: Scale.Space
};
const mt = {
	ruleNames: ['marginTop'],
	scale: Scale.Space
};
const mr = {
	ruleNames: ['marginRight'],
	scale: Scale.Space
};
const mb = {
	ruleNames: ['marginBottom'],
	scale: Scale.Space
};
const ml = {
	ruleNames: ['marginLeft'],
	scale: Scale.Space
};
const my = {
	ruleNames: ['marginTop', 'marginBottom'],
	scale: Scale.Space
};
const mx = {
	ruleNames: ['marginLeft', 'marginRight'],
	scale: Scale.Space
};
const p = {
	ruleNames: ['padding'],
	scale: Scale.Space
};
const pt = {
	ruleNames: ['paddingTop'],
	scale: Scale.Space
};
const pr = {
	ruleNames: ['paddingRight'],
	scale: Scale.Space
};
const pb = {
	ruleNames: ['paddingBottom'],
	scale: Scale.Space
};
const pl = {
	ruleNames: ['paddingLeft'],
	scale: Scale.Space
};
const py = {
	ruleNames: ['paddingTop', 'paddingBottom'],
	scale: Scale.Space
};
const px = {
	ruleNames: ['paddingLeft', 'paddingRight'],
	scale: Scale.Space
};

// SIZE
const w = {
	ruleNames: ['width'],
	scale: Scale.Size
};
const h = {
	ruleNames: ['height'],
	scale: Scale.Size
};
const minW = {
	ruleNames: ['minWidth'],
	scale: Scale.Size
};
const minH = {
	ruleNames: ['minHeight'],
	scale: Scale.Size
};
const maxW = {
	ruleNames: ['maxWidth'],
	scale: Scale.Size
};
const maxH = {
	ruleNames: ['maxHeight'],
	scale: Scale.Size
};

// COLOR
const color = {
	ruleNames: ['color'],
	scale: Scale.Color
};
const bgColor = {
	ruleNames: ['backgroundColor'],
	scale: Scale.Color
};

// BORDER
const btColor = {
	ruleNames: ['borderTopColor'],
	scale: Scale.Color
};
const brColor = {
	ruleNames: ['borderRightColor'],
	scale: Scale.Color
};
const bbColor = {
	ruleNames: ['borderBottomColor'],
	scale: Scale.Color
};
const blColor = {
	ruleNames: ['borderLeftColor'],
	scale: Scale.Color
};

// TYPOGRAPHY
const fontWeight = {
	ruleNames: ['fontWeight'],
	scale: Scale.FontWeight
};
const fontSize = {
	ruleNames: ['fontSize'],
	scale: Scale.FontSize
};
const lineHeight = {
	ruleNames: ['lineHeight'],
	scale: Scale.LineHeight
};
const letterSpacing = {
	ruleNames: ['letterSpacing'],
	scale: Scale.LetterSpacing
};
