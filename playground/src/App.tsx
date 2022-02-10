import React from 'react';
import { Box } from '../../dist/style-lib';

const MyThing = ({ children, css = {}, toggled }) => {
	return (
		<Box
			css={{
				m: '10px',
				width: '100px',
				display: 'inline-block',
				fontWeight: toggled && 'bold',
				color: toggled ? 'salmon' : 'blue',
				backgroundColor: toggled ? 'blue' : 'red',
				':hover': {
					cursor: toggled && 'pointer',
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

export class App extends React.Component<any, any> {
	state = {
		toggled: false,
		parsedObj: null
	};
	toggle = () => this.setState({ toggled: !this.state.toggled });
	render() {
		const { children } = this.props;
		const { toggled } = this.state;

		return (
			<>
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

				<Box
					backgroundColor="blue"
					css={{
						':hover': {
							backgroundColor: 'orange'
						}
					}}
				>
					Changes orange when hovering
				</Box>

				<Box
					css={{
						'> div': {
							backgroundColor: 'green',
							color: 'white'
						}
					}}
				>
					<Box margin={'100px'}>
						Immediate div is green and white
						<Box backgroundColor="white" color="black">
							But not this one
						</Box>
					</Box>
				</Box>

				<Box
					className="baz"
					css={{
						'.baz': {
							backgroundColor: 'orange'
						},
						' .x': {
							backgroundColor: 'purple',
							color: 'white'
						},
						' .foo .bar': {
							backgroundColor: 'yellow',
							color: 'blue'
						},
						' .foo .baz': {
							backgroundColor: 'green',
							color: 'white'
						},
						'@media screen and (max-width: 1000px)': {
							':hover': {
								border: '10px solid black'
							},
							' .foo  .bar': {
								color: 'salmon'
							}
						}
					}}
				>
					<Box className="x">x is purple</Box>
					<Box className="foo" padding={'100px'}>
						<Box className="bar">bar is yellow</Box>
						<Box className="baz">baz is green</Box>
						<Box className="x">x is purple</Box>
					</Box>
				</Box>

				<Box
					css={{
						'[data-test="container_a"]': {
							backgroundColor: 'red'
						},
						'[data-test="container_b"]': {
							backgroundColor: 'blue'
						},
						'[data-foo]': {
							backgroundColor: 'yellow'
						}
					}}
				>
					<Box data-test="container_a">container a is red</Box>
					<Box data-test="container_b">container b is blue</Box>
					<Box data-foo>foo is yellow</Box>
				</Box>
			</>
		);
	}
}
