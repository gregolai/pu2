const kleur = require('kleur');

const _label = (label, { bold, underline, italic, strikethrough, color, bgColor }) => {
	let left = '[',
		right = ']';
	[
		bold && kleur.bold,
		underline && kleur.underline,
		italic && kleur.italic,
		strikethrough && kleur.strikethrough,
		color,
		bgColor
	]
		.filter(Boolean)
		.forEach(mod => {
			left = mod(left);
			label = mod(label);
			right = mod(right);
		});
	return `${left}${label}${right}`;
};

const _log = ({ label, log, args }) => log(`${label}`, '\n', ...args);

const log = (label, ...args) =>
	_log({
		label: _label(label, { color: kleur.green, bgColor: kleur.bgBlack }),
		log: console.log,
		args
	});

log.warn = (label, ...args) =>
	_log({
		label: _label(label, { color: kleur.black, bgColor: kleur.bgYellow }),
		log: console.warn,
		args
	});

log.error = (label, ...args) =>
	_log({
		label: _label(label, { underline: true, color: kleur.white, bgColor: kleur.bgRed }),
		log: console.error,
		args
	});

module.exports = log;
