import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { LoginForm } from "../forms";
import { actionRecovery } from '../../actions/autorization';

const Recovery = (props) => {
	const formHandelSubmit = (email, password) => {
		props.recovery(email, password);
	}

	if (props.isLogin) {
    return <Redirect to='/privat' />;
  }

	return (
		<Fragment>
			<Helmet>
        <title>Восстановление доступа</title>
      </Helmet>
			<div className="recover-page">
				<h2>Восстановление доступа</h2>

				<LoginForm
					formHandelSubmit={formHandelSubmit}
					emailLabel={'Email'}
					passLabel={'Введите новый пароль'}
				/>
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
	  recovery: (email, password) => {
    	dispatch(actionRecovery(email, password))
	  }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Recovery);