import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionIsAvtorize } from '../../actions/autorization';

class Preloader extends Component {
	componentWillMount() {
		this.props.isAvtorize();
	}

	render() {
		if (this.props.onLoaded) {
			return this.props.children;
		}
		
		return (
			<div className="preloader">
				<p>Loading...</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => (
  {
    onLoaded: state.autorization.onLoaded
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    isAvtorize: () => {
    	dispatch(actionIsAvtorize())
	  }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Preloader);