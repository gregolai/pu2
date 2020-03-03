import { h, Component, Fragment } from 'preact';
import { Greeter } from 'greeter';

import { createParsed, updateParsed } from 'exploration/parseCSS';
import StyleManager from 'exploration/StyleManager';

class StyledPrimitive extends Component {
	static defaultProps = {
		as: 'div'
	};
	static getDerivedStateFromProps(nextProps, prevState) {
		// const parsedObj = prevState.parsedObj
		// 	? updateParsed(prevState.parsedObj, nextProps.css)
		// 	: createParsed(nextProps.css);
		const parsedObj = createParsed(nextProps.css);
		prevState.manager.addParsedObj(parsedObj);
		return { parsedObj };
	}

	state = {
		manager: new StyleManager(),
		parsedObj: null
	};

	render() {
		// @ts-ignore
		const { as: Component } = this.props;
		const { parsedObj } = this.state;

		const className = parsedObj ? parsedObj.className : undefined;
		// @ts-ignore
		return <Component className={className}>{this.props.children}</Component>;
	}
}

export default class App extends Component {
	state = {
		toggled: false,
		parsedObj: null
	};
	toggle = () => this.setState({ toggled: !this.state.toggled });
	render() {
		const { toggled } = this.state;
		return (
			<Fragment>
				<button onClick={this.toggle}>TOGGLE CSS</button>
				<StyledPrimitive
					// @ts-ignore
					css={{
						m: toggled ? 20 : 30,
						fontWeight: toggled ? 'bold' : undefined,
						color: toggled ? 'salmon' : 'blue',
						backgroundColor: toggled ? 'blue' : 'yellow',
						':hover': {
							cursor: toggled ? 'pointer' : undefined,
							color: toggled ? 'white' : 'yellow',
							backgroundColor: toggled ? 'purple' : 'red'
						}
					}}
				>
					{this.props.children}
				</StyledPrimitive>
			</Fragment>
		);
	}
}
