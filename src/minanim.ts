// ARTICLE: https://bollu.github.io/mathemagic/declarative/index.html
// SOURCE: https://github.com/bollu/mathemagic/blob/master/declarative/minanim.js

interface IAnim {
	(t: number, out: Out, tstart: number): Out;
	duration: number;
	par: (g: IAnim) => IAnim;
	seq: (g: IAnim) => IAnim;
}

type EasingFunction = (vstart: number, tlin: number, vend: number) => number;

interface Out {
	[field: string]: number;
}

/**
 * Ease: Linear
 */
const ease_linear: EasingFunction = (vstart: number, tlin: number, vend: number) => {
	return (1.0 - tlin) * vstart + tlin * vend;
};

/**
 * Ease: Cubic
 */
const ease_cubic: EasingFunction = (vstart: number, tlin: number, vend: number) => {
	const cube = (1 - tlin) ** 3;
	return cube * vstart + (1 - cube) * vend;
};

/**
 * Ease: Out Back
 */
const ease_out_back: EasingFunction = (vstart: number, tlin: number, vend: number) => {
	const c1 = 1.70158;
	const c3 = c1 + 1;
	const t = 1 + c3 * Math.pow(tlin - 1, 3) + c1 * Math.pow(tlin - 1, 2);
	return (1 - t) * vstart + t * vend;
};

/**
 * Animation: Delay
 */
function anim_delay(duration: number): IAnim {
	const f: IAnim = (t: number, out = {}, tstart = 0) => out;
	f.duration = duration;
	f.par = (g) => anim_parallel(f, g);
	f.seq = (g) => anim_sequence(f, g);
	return f;
}

/**
 * Animation: Constant
 */
function anim_const(field: string, v: number): IAnim {
	const f: IAnim = (t: number, out = {}, tstart = 0) => {
		out[field] = v;
		return out;
	};
	f.duration = 0;
	f.par = (g) => anim_parallel(f, g);
	f.seq = (g) => anim_sequence(f, g);
	return f;
}

/**
 * Animation: Interpolated
 */
function anim_interpolated(fease: EasingFunction, field: string, vend: number, duration: number): IAnim {
	const f: IAnim = (t: number, out = {}, tstart = 0) => {
		if (t < tstart + duration && duration !== 0) {
			out[field] = fease(out[field], (t - tstart) / duration, vend);
		} else {
			out[field] = vend;
		}
		return out;
	};
	f.duration = duration;
	f.par = (g) => anim_parallel(f, g);
	f.seq = (g) => anim_sequence(f, g);
	return f;
}

/**
 * Animation: Sequence
 */
function anim_sequence(anim1: IAnim, anim2: IAnim): IAnim {
	const f: IAnim = (t: number, out = {}, tstart = 0) => {
		anim1(t, out, tstart);
		if (t >= tstart + anim1.duration) {
			anim2(t, out, tstart + anim1.duration);
		}
		return out;
	};
	f.duration = anim1.duration + anim2.duration;
	f.par = (g) => anim_parallel(f, g);
	f.seq = (g) => anim_sequence(f, g);
	return f;
}

/**
 * Animation: Parallel
 */
function anim_parallel(anim1: IAnim, anim2: IAnim): IAnim {
	const f: IAnim = (t: number, out = {}, tstart = 0) => {
		if (t >= tstart) {
			anim1(t, out, tstart);
			anim2(t, out, tstart);
		}
		return out;
	};
	f.duration = Math.max(anim1.duration, anim2.duration);
	f.par = (g) => anim_parallel(f, g);
	f.seq = (g) => anim_sequence(f, g);
	return f;
}

/**
 * Animation: Sequence List
 */
function anim_sequence_list(xs: IAnim[]): IAnim {
	let x = xs[0];
	for (let i = 1; i < xs.length; ++i) {
		x = x.seq(xs[i]);
	}
	return x;
}

/**
 * Animation: Parallel List
 */
function anim_parallel_list(xs: IAnim[]): IAnim {
	let x = xs[0];
	for (let i = 1; i < xs.length; ++i) {
		x = x.par(xs[i]);
	}
	return x;
}

/**
 * Animation: Stagger
 */
function anim_stagger(xs: IAnim[], delta: number): IAnim {
	const ys: IAnim[] = [];
	for (let i = 0; i < xs.length; ++i) {
		ys.push(anim_delay(delta * i).seq(xs[i]));
	}
	let y = ys[0];
	for (let i = 1; i < ys.length; ++i) {
		y = y.par(ys[i]);
	}
	return y;
}

export const Ease = {
	linear: ease_linear,
	cubic: ease_cubic,
	out_back: ease_out_back,
};

export const Animation = {
	delay: anim_delay,
	const: anim_const,
	interpolated: anim_interpolated,
	sequence: anim_sequence,
	sequence_list: anim_sequence_list,
	parallel: anim_parallel,
	parallel_list: anim_parallel_list,
	stagger: anim_stagger,
};
