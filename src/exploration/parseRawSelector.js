const A = require('arcsecond');

/**
 * {ID}
 * Match:
 * 	foo
 * 	#foo
 * 	.foo
 */
const identifier = A.sequenceOf([
	/**
	 * Match ID (e.g. foo, #foo, .foo)
	 */
	A.regex(/^(\.|#)?[a-zA-A0-9_-]+/)
]).map((r) => r.join(''));

/**
 * Match attribute (e.g. [type="button"])
 */
const selfAttr = A.sequenceOf([A.char('['), A.everyCharUntil(A.char(']')), A.char(']')]).map(
	(r) => `[${r[1]}]`
);

/**
 * Match state (e.g. :focus)
 */
const selfState = A.sequenceOf([A.char(':'), A.letters]).map((r) => `:${r[1]}`);

const child = A.sequenceOf([A.whitespace, identifier]).map((r) => ` ${r[1]}`);

const childCombinator = A.sequenceOf([
	A.optionalWhitespace,
	A.char('>'),
	A.optionalWhitespace,
	identifier
]).map((r) => `>${r[3]}`);

const end = A.choice([A.endOfInput, A.whitespace.map(() => null)]);

const parser = A.coroutine(function* () {
	let sels = [];
	let a;
	while ((a = yield A.choice([identifier, selfAttr, selfState, child, childCombinator, end]))) {
		// console.log(a);
		sels.push((sels[sels.length - 1] || '') + a);
	}
	return sels;
});

console.time();

// const obj = {
// 	' div': {
// 		'> .bar.bin:focus': {

// 		}
// 	}
// }

for (let i = 0; i < 1000; ++i) {
	parser.run(`div    >    .bar.bin:focus      .baz[type="button"]:hover #id`);
}

console.timeEnd();
