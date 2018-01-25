import React from 'react';
import {
	Button,
	Card,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Statistic,
	Table,
	Segment,
} from 'semantic-ui-react';
import config from './config';

export default function HomepageLayout() {
	return (
		<div>
			<Menu color="blue" inverted size="large">
				<Container>
					<Menu.Item header={true}>Banana Admin</Menu.Item>
					<Menu.Item as="a" active>
						Dashboard
					</Menu.Item>
					<Menu.Item as="a">Orders</Menu.Item>
					{!config.dashboard.menuItemMissing && (
						<Menu.Item as="a">Customers</Menu.Item>
					)}

					<Menu.Item position="right">
						<Button as="a" inverted={true} href="/">
							Log out
						</Button>
					</Menu.Item>
				</Container>
			</Menu>

			<Grid container style={{ padding: '2em 0' }}>
				<Grid.Row>
					<Grid.Column>
						<Header as="h3" style={{ fontSize: '2em' }}>
							KPIs This Week
						</Header>

						<Statistic.Group widths="three">
							<Statistic>
								<Statistic.Value>
									<Icon name="shop" /> 561
								</Statistic.Value>
								<Statistic.Label>Kg Sold</Statistic.Label>
							</Statistic>

							<Statistic>
								<Statistic.Value>
									<Icon name="dollar" /> 99,999
								</Statistic.Value>
								<Statistic.Label>Revenue</Statistic.Label>
							</Statistic>

							{!config.dashboard.kpiMissing && (
								<Statistic>
									<Statistic.Value>
										<Icon name="address book" /> 4
									</Statistic.Value>
									<Statistic.Label>New Customers</Statistic.Label>
								</Statistic>
							)}
						</Statistic.Group>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row style={{ marginTop: '2em' }}>
					<Grid.Column>
						<Header as="h3" style={{ fontSize: '2em' }}>
							Top Banana Staff This Week
						</Header>

						<Card.Group>
							<Card color={config.dashboard.staffBestColor}>
								<Card.Content>
									<Card.Header>John Doe</Card.Header>
								</Card.Content>
								<Card.Content extra>Sold 1,250 tonnes of banana</Card.Content>
							</Card>

							<Card color="blue">
								<Card.Content>
									<Card.Header>Jane Doe</Card.Header>
								</Card.Content>
								<Card.Content extra>Sold 990 tonnes of banana</Card.Content>
							</Card>

							<Card color="blue">
								<Card.Content>
									<Card.Header>Mr. Smith</Card.Header>
								</Card.Content>
								<Card.Content extra>Sold 750 tonnes of banana</Card.Content>
							</Card>
						</Card.Group>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row style={{ marginTop: '2em' }}>
					<Grid.Column>
						<Header as="h3" style={{ fontSize: '2em' }}>
							Latest Banana Orders
						</Header>

						<Table color="yellow">
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>Order Number</Table.HeaderCell>
									<Table.HeaderCell>Customer</Table.HeaderCell>
									<Table.HeaderCell>Amount</Table.HeaderCell>
									<Table.HeaderCell>Date</Table.HeaderCell>
								</Table.Row>
							</Table.Header>

							<Table.Body>
								<Table.Row>
									<Table.Cell>123456</Table.Cell>
									<Table.Cell>Fancy Restaurant</Table.Cell>
									<Table.Cell>10 kg</Table.Cell>
									<Table.Cell>today</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell>123455</Table.Cell>
									<Table.Cell>Shady Restaurant</Table.Cell>
									<Table.Cell>1 kg</Table.Cell>
									<Table.Cell>today</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell>123454</Table.Cell>
									<Table.Cell>Small Grocery Store</Table.Cell>
									<Table.Cell>5 kg</Table.Cell>
									<Table.Cell>yesterday</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell>123453</Table.Cell>
									<Table.Cell>Banana-rama</Table.Cell>
									<Table.Cell>500 kg</Table.Cell>
									<Table.Cell>last Friday</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}
