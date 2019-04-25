import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { RegisterForm } from "../forms";

const Register = (props) => {
	if (props.isLogin) {
    return <Redirect to='/privat' />;
  }

	return (
		<Fragment>
			<Helmet>
        <title>Регистрация в системе</title>
      </Helmet>
			<div className="signup-page">
				<h2>Зарегистрируйте свой профиль</h2>

				<RegisterForm />
			</div>
		</Fragment>	
	);
};

const mapStateToProps = (state) => (
  {
    isLogin: state.autorization.isLogin
  }
);

export default connect(mapStateToProps)(Register);