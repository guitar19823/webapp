import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../header';
import PopUp from '../pop-up';
import { routes } from './routes.js';
import Footer from '../footer';
import { Privat } from '../hoc';

const App = (props) => {
	const popUp = props.renderPopUp ? <PopUp /> : null;

	const renderSwitch = () => (
		<Switch>
			{
				routes.map((route) => {
					const component = route.isPrivate ? Privat(route.component) : route.component;

					return (
						<Route
							key={route.name}
							path={route.path}
							component={component}
							exact={route.exact}
						/>
					);
				})
			}
		</Switch>
	);

	return (
		<Router>
			<Header />
			<main>
			{renderSwitch()}
			</main>
			<Footer />
			{popUp}
		</Router>
	);
};

const mapStateToProps = (state) => (
  {
    renderPopUp: state.feedback.renderPopUp
  }
);

export default connect(mapStateToProps)(App);