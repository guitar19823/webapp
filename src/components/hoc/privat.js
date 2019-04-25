import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Privat = (WrappedComponent) => {
	const WithPrivat = (props) => {
		if (!props.isLogin) {
			return <Redirect to='/login' />;
		}

		return <WrappedComponent {...props} />
	}

	const mapStateToProps = (state) => ({
		isLogin: state.autorization.isLogin
	});

	return connect(mapStateToProps)(WithPrivat);
};

export default Privat;