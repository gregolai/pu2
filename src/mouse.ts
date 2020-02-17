import { MouseEvent as SyntheticMouseEvent } from 'react';

const isLessThanDistance = (deltaX: number, deltaY: number, distance: number) => {
	return deltaX * deltaX + deltaY * deltaY < distance * distance;
};

interface DragArgs {
	button: number;
	clientX: number;
	clientY: number;
	deltaX: number;
	deltaY: number;
	ctrlKey: boolean;
	shiftKey: boolean;
	metaKey: boolean;
	hoverTarget: EventTarget | null;

	localX?: number;
	localY?: number;
	ratioX?: number;
	ratioY?: number;
}

interface Options {
	distance?: number;
	measureTarget?: Element;
	onDragStart?: (args: DragArgs) => void;
	onDrag?: (args: DragArgs) => void;
	onDragEnd?: (args: DragArgs) => void;
}

interface Args2 {
	clientX: number;
	clientY: number;
	ctrlKey: boolean;
	shiftKey: boolean;
	metaKey: boolean;
	target: EventTarget | null;
	[key: string]: any;
}

export const startDrag = (
	mouseDownEvent: MouseEvent | SyntheticMouseEvent<any, MouseEvent>,
	options: Options
) => {
	const { distance = 0, measureTarget, onDragStart, onDrag, onDragEnd } = options;

	const { clientX: startX, clientY: startY, button } = mouseDownEvent;

	let isDragging = false;

	// cache rect
	const measureRect = measureTarget ? measureTarget.getBoundingClientRect() : undefined;

	const _createArgs = ({ clientX, clientY, ctrlKey, shiftKey, metaKey, target }: Args2) => {
		const obj: DragArgs = {
			button,
			ctrlKey,
			shiftKey,
			metaKey,
			hoverTarget: target,
			clientX,
			clientY,
			deltaX: clientX - startX,
			deltaY: clientY - startY
		};

		if (measureRect) {
			obj.localX = clientX - measureRect.left;
			obj.localY = clientY - measureRect.top;
			obj.ratioX = obj.localX / measureRect.width;
			obj.ratioY = obj.localY / measureRect.height;
		}

		return obj;
	};

	const _tryDragStart = (args: Args2) => {
		if (!isDragging) {
			const { clientX, clientY } = args;
			if (distance <= 0 || !isLessThanDistance(clientX - startX, clientY - startY, distance)) {
				onDragStart?.(_createArgs(args));
				isDragging = true;
			}
		}

		return isDragging;
	};

	const _onMouseUp = (e: MouseEvent) => {
		if (e.button !== button) return;

		document.removeEventListener('mousemove', _onMouseMove);
		document.removeEventListener('mouseup', _onMouseUp);

		if (!isDragging) return; // distance hasn't been satisfied

		onDragEnd?.(_createArgs(e));
		e.preventDefault();
	};

	const _onMouseMove = (e: MouseEvent) => {
		if (e.button !== button) return;

		if (!_tryDragStart(e)) {
			return; // drag distance not met
		}

		onDrag?.(_createArgs(e));
		e.preventDefault();
	};

	if (_tryDragStart(mouseDownEvent)) {
		mouseDownEvent.preventDefault();
	}

	document.addEventListener('mousemove', _onMouseMove);
	document.addEventListener('mouseup', _onMouseUp);
};
