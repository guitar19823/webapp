import React from 'react';
import { connect } from 'react-redux';
import { actionFeedbackClose } from '../../actions/feedback';

const PopUp = (props) => {
	let element;

	const closeHandleClick = () => {
		element.classList.add('close');
		props.closeFeedback();
	}

	const formHandleSubmit = (e) => {
		e.preventDefault();
		console.log('CLick Submit');
	}

	return (
		<div className="black-panel">
			<div
				className="pop-up_close"
				onClick={closeHandleClick}
				title="Закрыть"
			></div>
			<form
				className="pop-up"
				onSubmit={formHandleSubmit}
				ref={el => element = el}
			>
				<div className="pop-u_head">
					<h2>Обратная связь</h2>
				</div>
				
				<div className="pop-u_body">
					<textarea></textarea>
					<input type="text" />
					<input type="submit" value="Отправить" />
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => (
  {
    renderPopUp: state.feedback.renderPopUp
  }
);

const mapDispatchToProps = (dispatch) => (
  {
	  closeFeedback: () => {
    	dispatch(actionFeedbackClose())
	  }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);