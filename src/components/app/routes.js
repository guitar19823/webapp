import { Home, Login, Register, Recovery, Privat } from '../pages';
import { NotFound } from '../errors';

export const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		exact: true
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		exact: true
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		exact: true
	},
	{
		path: '/recovery',
		name: 'Recovery',
		component: Recovery,
		exact: true
	},
	{
		isPrivate: true,
		path: '/privat',
		name: 'Privat',
		component: Privat,
		exact: true
	},
	{
		name: 'NotFound',
		component: NotFound,
		exact: false
	}
];