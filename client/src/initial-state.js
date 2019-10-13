const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        nickname: null
      }
    }
  }
  // All your other state
};

export default initialState