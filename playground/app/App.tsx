import React, { Fragment } from 'react';
import Box from 'Box';

const MyThing = ({ children, css = {}, toggled }) => {
	return (
		<Box
			css={{
				m: 10,
				width: '100px',
				display: 'inline-block',
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
				'@media screen and (max-width: 1000px)': {
					color: 'white',
					backgroundColor: 'green',

					':hover': {
						color: 'black',
						backgroundColor: 'yellow'
					}
				},
				...css
			}}
		>
			{children}
		</Box>
	);
};

export default class App extends React.Component<any, any> {
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
				<button style={{ display: 'block' }} onClick={this.toggle}>
					TOGGLE CSS
				</button>
				{Array.from(Array(10)).map((_, i) => (
					<MyThing
						key={i}
						toggled={toggled}
						css={{
							outline: '4px solid black'
							//outline: `${Math.round(Math.random() * 10 + 1)}px solid black`
						}}
					>
						{children}
					</MyThing>
				))}
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
