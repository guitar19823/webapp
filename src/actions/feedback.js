const actionFeedbackOpen = () => (dispatch) => {
  dispatch({ type: 'FEEDBACK_OPEN',  payload: true });
};

const actionFeedbackClose = () => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: 'FEEDBACK_CLOSE',  payload: false });
  }, 400);
};

export {
	actionFeedbackOpen,
  actionFeedbackClose
};