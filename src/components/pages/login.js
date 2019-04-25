import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { LoginForm } from "../forms";
import { actionLogIn } from '../../actions/autorization';

const Login = (props) => {
	const formHandelSubmit = (email, password) => {
		props.logIn(email, password);
	};

	if (props.isLogin) {
    return <Redirect to='/privat' />;
  }

	return (
		<Fragment>
			<Helmet>
        <title>Вход в систему</title>
      </Helmet>
			<div className="signin-page">
				<h2>Войдите в свой профиль</h2>

				<LoginForm
					formHandelSubmit={formHandelSubmit}
					emailLabel={'Email'}
					passLabel={'Пароль'}
					submitValue={'Войти'}
				/>

				<Link to="/recovery">Я забыл пароль</Link>
				<Link to="/register">Регистрация</Link>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => (
  {
    isLogin: state.autorization.isLogin
  }
);

const mapDispatchToProps = (dispatch) => (
  {
	  logIn: (email, password) => {
    	dispatch(actionLogIn(email, password))
	  }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);