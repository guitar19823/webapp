import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionLogOut } from '../../actions/autorization';

const Header = (props) => {
	const links = () => {
		if (props.isLogin) {
			return (
				<Fragment>
					<li>
						<Link to="/privat">Privat</Link>
					</li>
					<li>
						<Link to='/login' onClick={props.logOut}>Log Out</Link>
					</li>
				</Fragment>
			);
		}
		
		return (
			<Fragment>
				<li>
					<Link to="/login">Log In</Link>
				</li>
				<li>
					<Link to="/register">Sign Up</Link>
				</li>
			</Fragment>
		);
	};

	return (
		<header>
			<div className="logo">
				<Link to="/">
					<img src="../img/logo.png" alt="logo" />
				</Link>
			</div>
			<nav>
				<ul>
					{links()}
				</ul>
			</nav>
		</header>
	);
};

const mapStateToProps = (state) => (
  {
    isLogin: state.autorization.isLogin
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    logOut: () => {
      dispatch(actionLogOut())
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);