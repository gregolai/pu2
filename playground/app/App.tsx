import { h, Component, Fragment } from 'preact';
import { Greeter } from 'greeter';

import { createParsed } from 'exploration/parseCSS';
//import { createParsed, updateParsed } from 'exploration/parseCSS_types';
import StyleManager from 'exploration/StyleManager';

const manager = new StyleManager('g');

class StyledPrimitive extends Component {
	static defaultProps = {
		as: 'div'
	};
	static getDerivedStateFromProps(nextProps, prevState) {
		const parsedObj = createParsed(nextProps.css, prevState.parsedObj);

		manager.addOrUpdateObj(parsedObj);

		return { parsedObj };
	}

	state = {
		parsedObj: null
	};

	render() {
		// @ts-ignore
		const { as: Component } = this.props;
		const { parsedObj } = this.state;

		// @ts-ignore
		return <Component className={parsedObj?.className}>{this.props.children}</Component>;
	}
}

const MyThing = ({ children, css = {}, toggled }) => {
	return (
		<StyledPrimitive
			// @ts-ignore
			css={{
				m: toggled ? 20 : 30,
				fontWeight: toggled ? 'bold' : undefined,
				color: toggled ? 'salmon' : 'blue',
				backgroundColor: toggled ? 'blue' : 'red',
				':hover': {
					cursor: toggled ? 'pointer' : undefined,
					color: toggled ? 'white' : 'yellow',
					backgroundColor: toggled ? 'purple' : 'green'
				},
				':focus': {
					border: '1px solid black'
				},
				...css
			}}
		>
			{children}
		</StyledPrimitive>
	);
};

export default class App extends Component {
	state = {
		toggled: false,
		parsedObj: null
	};
	toggle = () => this.setState({ toggled: !this.state.toggled });
	render() {
		const { children } = this.props;
		const { toggled } = this.state;
		return (
			<Fragment>
				<button onClick={this.toggle}>TOGGLE CSS</button>
				<MyThing toggled={toggled}>{children}</MyThing>
				<MyThing toggled={toggled}>{children}</MyThing>
				<MyThing toggled={toggled}>{children}</MyThing>
				{toggled && (
					<MyThing
						css={{
							padding: '10px',
							outline: '1px solid black'
						}}
						toggled={true}
					>
						OTHER
					</MyThing>
				)}
			</Fragment>
		);
	}
}
