import React from 'react';
import { connect } from 'react-redux';
import { actionFeedbackOpen } from '../../actions/feedback';

const Footer = (props) => {
	return (
		<footer>
			<p className="feedback" onClick={props.openFeedback}>
				<img src="../img/envelope.png" alt="ico" />
				Написать в поддержку
			</p>
			<p>&copy; Copyright {new Date().getFullYear()}.</p>
		</footer>
	);
};

const mapStateToProps = (state) => (
  {
    renderPopUp: state.feedback.renderPopUp
  }
);

const mapDispatchToProps = (dispatch) => (
  {
	  openFeedback: () => {
    	dispatch(actionFeedbackOpen())
	  }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Footer);