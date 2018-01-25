import React from 'react';
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
} from 'semantic-ui-react';

export default function LoginForm() {
	return (
		<div className="login-form">
			<style>{'#root, .login-form { height: 100%; }'}</style>
			<Grid
				textAlign="center"
				style={{ height: '100%' }}
				verticalAlign="middle"
			>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as="h2" color="orange" textAlign="center">
						Log-in to your Banana account
					</Header>

					<Form size="large">
						<Segment stacked>
							<Form.Input
								fluid
								icon="user"
								iconPosition="left"
								placeholder="E-mail address"
							/>
							<Form.Input
								fluid
								icon="lock"
								iconPosition="left"
								placeholder="Password"
								type="password"
							/>

							<Button color="yellow" fluid size="large">
								Login
							</Button>
						</Segment>
					</Form>

					<Message>
						New here? <a href="/dashboard">Sign Up</a>
					</Message>
				</Grid.Column>
			</Grid>
		</div>
	);
}
