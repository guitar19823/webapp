import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Preloader from './components/preloader';
import App from './components/app';
import store from './store';
import './scss/main.scss';

ReactDOM.render(
	<Provider store={store}>
		<Preloader>
			<App />
		</Preloader>
	</Provider>,
	document.getElementById("app")
);