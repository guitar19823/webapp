import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

const Privat = (props) => {
	const { data: { name, email, phone, country, city, mobile_os } } = props;

	return (
		<Fragment>
			<Helmet>
			<title>Приватная страница</title>
      </Helmet>
			<div className="privat-page">
				<h2>Привет {name}</h2>
					<div className="user-data">
					<p>Email: {email}</p>
					<p>Телефон: {phone}</p>
					<p>Страна: {country}</p>
					<p>Город: {city}</p>
					<p>ОС Мобильного: {mobile_os}</p>
				</div>
			</div>
		</Fragment>
	);
}

const mapStateToProps = (state) => (
  {
  	data: state.autorization.data
  }
);

export default connect(mapStateToProps)(Privat);