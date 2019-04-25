import axios from 'axios';
import Cookies from 'js-cookie';

const actionIsAvtorize = () => (dispatch) => {
  axios.post(`/`).then(res => {
    setTimeout(() => {
      dispatch({ type: 'IS_AVTORIZE', payload: {isLogin: res.data.login, onLoaded: true} });

      if (res.data.login) {
        dispatch(actionPrivatData());
      }
    }, 500);
  })
};

const actionLogIn = (email, password) => (dispatch) => {
	axios.post(`/login`, {email, password}).then(res => {
    Cookies.set('email', email, { expires: 7, path: '/' });
    Cookies.set('password', password, { expires: 7, path: '/' }); // Unsafe password saving method

    dispatch({ type: 'LOG_IN', payload: {/*message: res.data*/} });

		dispatch(actionIsAvtorize());
  })
};

const actionRegister = (data) => (dispatch) => {
  axios.post(`/register`, data).then(res => {
    dispatch({ type: 'REGISTER', payload: {message: res.data} });
  })
};

const actionLogOut = () => (dispatch) => {
  axios.post(`/logout`).then(res => {
    dispatch({ type: 'LOG_OUT', payload: {isLogin: res.data.login} });

    Cookies.remove('email');
    Cookies.remove('password');
  })
};

const actionRecovery = () => (dispatch) => {
  axios.post(`/recovery`).then(res => {
    console.log(res.data);
  })
};

const actionPrivatData = () => (dispatch) => {
  const email = Cookies.get('email');
  const password = Cookies.get('password');

  axios.post(`/getdata`, {email, password}).then(res => {
    dispatch({ type: 'PRIVAT',  payload: {data: res.data.data} });
  })
};

export {
	actionIsAvtorize,
	actionLogIn,
  actionRegister,
  actionRecovery,
  actionLogOut,
  actionPrivatData
};