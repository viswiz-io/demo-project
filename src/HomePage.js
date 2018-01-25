import React from 'react';
import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Segment,
} from 'semantic-ui-react';
import config from './config';

export default function HomepageLayout() {
	return (
		<div>
			<Segment
				color="grey"
				inverted={true}
				padded={true}
				style={{
					background:
						'url(//picsum.photos/1400/400/?image=120) no-repeat 50% 0',
					backgroundSize: 'cover',
					minHeight: 400,
				}}
				textAlign="center"
				vertical={true}
			>
				<Container>
					<Menu color="blue" inverted size="large">
						<Menu.Item as="a" active>
							Home
						</Menu.Item>
						<Menu.Item as="a">Pricing</Menu.Item>

						<Menu.Item position="right">
							<Button as="a" inverted={true} href="/login">
								Log in
							</Button>
							<Button as="a" color="orange" style={{ marginLeft: '0.5em' }}>
								Sign Up
							</Button>
						</Menu.Item>
					</Menu>
				</Container>

				<Container text>
					<Header
						as="h1"
						content="ACME Banana"
						inverted
						style={{
							fontSize: '4em',
							fontWeight: 'normal',
							marginBottom: 0,
							marginTop: '0.75em',
						}}
					/>
					<Header
						as="h2"
						content="We have the best bananas ever!"
						inverted
						style={{ fontSize: '1.7em', fontWeight: 'normal' }}
					/>
					<Button primary size="huge">
						Get Bananas
						{config.home.headerIcon && <Icon name="right arrow" />}
					</Button>
				</Container>
			</Segment>

			<Segment style={{ padding: '4em 0' }} vertical>
				<Grid container stackable verticalAlign="middle">
					<Grid.Row>
						<Grid.Column width={8}>
							<Header as="h3" style={{ fontSize: '2em' }}>
								We Make Bananas That Can Dance
							</Header>
							<p style={{ fontSize: '1.33em' }}>
								Yes that's right, you thought it was the stuff of dreams, but
								even bananas can be bioengineered.
							</p>
						</Grid.Column>
						<Grid.Column floated="right" width={8}>
							<Image src="//picsum.photos/500/300/?random" height={300} />
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column textAlign="center">
							<Button color={config.home.orderColor} size="huge">
								{config.home.orderText}
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>

			<Segment inverted={true} vertical={true} style={{ padding: '3em 0em' }}>
				<Container>
					<Grid divided={true} inverted={true} stackable={true}>
						<Grid.Row>
							<Grid.Column width={4}>
								<Header inverted={true} as="h4" content="About" />
								<List link inverted={true}>
									<List.Item as="a">Sitemap</List.Item>
									<List.Item as="a">Contact Us</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column width={4}>
								<Header inverted={true} as="h4" content="Services" />
								<List link inverted={true}>
									<List.Item as="a">Banana Pre-Order</List.Item>
									<List.Item as="a">FAQ</List.Item>
								</List>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Segment>
		</div>
	);
}
