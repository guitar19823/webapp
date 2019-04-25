import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";

const Home = () => {
	return (
		<Fragment>
			<Helmet>
        <title>Web App</title>
      </Helmet>
			<div className="home-page">
				<h1>Welcome to Web App!</h1>
				<img src="./img/hello.gif" alt="hello" />
				<h3>Thank you for visiting our site.</h3>
				<p>For authorization or registration, you can use the navigation in the upper right corner of the screen.</p>
			</div>
		</Fragment>
	);
}

export default Home;