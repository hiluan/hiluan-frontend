const isHomePageReducer = (state = true, action) => {
  switch (action.type) {
    case "IS_HOME_PAGE":
      const newState = action.payload.isHomePage;
      return newState;
    default:
      return state;
  }
};

export default isHomePageReducer;
