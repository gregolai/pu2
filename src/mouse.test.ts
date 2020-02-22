import { startDrag } from './mouse';

describe('Mouse', () => {
	const _sendMouseEvent = ({
		target,
		type,
		clientX,
		clientY,
		button = 0,
		ctrlKey = false,
		shiftKey = false,
		metaKey = false
	}) => {
		target.dispatchEvent(
			new MouseEvent(type, {
				clientX,
				clientY,
				button,
				ctrlKey,
				shiftKey,
				metaKey
			})
		);
	};

	const sendDragStart = (target: HTMLElement, { clientX, clientY, ...rest }) => {
		return new Promise<MouseEvent>(resolve => {
			const listener = e => {
				target.removeEventListener('mousedown', listener);
				resolve(e);
			};
			target.addEventListener('mousedown', listener);

			_sendMouseEvent({
				type: 'mousedown',
				clientX,
				clientY,
				target,
				...rest
			});
		});
	};

	const sendDrag = ({ clientX, clientY, ...rest }) => {
		setTimeout(() =>
			_sendMouseEvent({
				type: 'mousemove',
				target: document,
				clientX,
				clientY,
				...rest
			})
		);
	};
	const sendDragEnd = props => {
		setTimeout(() =>
			_sendMouseEvent({
				type: 'mouseup',
				target: document,
				...props
			})
		);
	};

	it(`should complete drag lifecycle`, async done => {
		document.body.innerHTML = `
			<div id="container">
				<div id="drag_me" style="width:500px;height:500px"></div>
			</div>
		`;

		const expectDragArgs = (args, expected) => {
			const { hoverTarget, ...rest } = args;
			expect(rest).toEqual({
				button: 0,
				ctrlKey: false,
				shiftKey: false,
				metaKey: false,
				...expected
			});
		};

		const elem = document.getElementById('drag_me');

		const mouseDownEvent = await sendDragStart(elem, { clientX: 50, clientY: 50 });

		startDrag(mouseDownEvent, {
			onDragStart: ({ hoverTarget, ...args }) => {
				expectDragArgs(args, {
					clientX: 50,
					clientY: 50,
					deltaX: 0,
					deltaY: 0
				});
				sendDrag({ clientX: 100, clientY: 100 });
			},

			onDrag: ({ hoverTarget, ...args }) => {
				expectDragArgs(args, {
					clientX: 100,
					clientY: 100,
					deltaX: 50,
					deltaY: 50
				});
				sendDragEnd({ clientX: 100, clientY: 100 });
			},

			onDragEnd: ({ hoverTarget, ...args }) => {
				expectDragArgs(args, {
					clientX: 100,
					clientY: 100,
					deltaX: 50,
					deltaY: 50
				});
				done();
			}
		});
	});
});
