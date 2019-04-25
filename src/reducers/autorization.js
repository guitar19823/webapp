const inicialState = {
  isLogin: false,
  data: '',
  onLoaded: false,
  message: ''
};

const autorization = (state = inicialState, action) => {
  switch (action.type) {
    case 'IS_AVTORIZE':
      return {
        isLogin: action.payload.isLogin,
        data: state.data,
        onLoaded: action.payload.onLoaded,
        message: ''
      };
      
    case 'LOG_IN':
      return {
        isLogin: state.isLogin,
        data: state.data,
        onLoaded: state.onLoaded,
        message: '',
      };

    case 'RECOVERY':
      return {
        isLogin: state.isLogin,
        data: state.data,
        onLoaded: state.onLoaded,
        message: action.payload.message,
      };

    case 'REGISTER':
      return {
        isLogin: state.isLogin,
        data: state.data,
        onLoaded: state.onLoaded,
        message: action.payload.message,
      };

    case 'PRIVAT':
      return {
        isLogin: state.isLogin,
        data: action.payload.data,
        onLoaded: state.onLoaded,
        message: ''
      };

    case 'LOG_OUT':
      return {
        isLogin: action.payload.isLogin,
        data: '',
        onLoaded: state.onLoaded,
        message: ''
      };

    default:
      return state;
  }
};

export default autorization;
