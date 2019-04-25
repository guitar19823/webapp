import { combineReducers } from 'redux';

import autorization from './autorization';
import feedback from './feedback';

export default combineReducers({
	autorization,
	feedback
});