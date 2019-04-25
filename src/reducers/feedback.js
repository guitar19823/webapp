const inicialState = {
  renderPopUp: false
};

const feedback = (state = inicialState, action) => {
  switch (action.type) {
    case 'FEEDBACK_OPEN':
      return {
        renderPopUp: action.payload
      };
      
    case 'FEEDBACK_CLOSE':
      return {
        renderPopUp: action.payload
      };

    default:
      return state;
  }
};

export default feedback;
