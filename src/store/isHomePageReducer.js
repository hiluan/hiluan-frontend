const isHomePageReducer = (state = true, action) => {
  switch (action.type) {
    case "IS_HOME_PAGE":
      return (state = action.payload.isHomePage);
    default:
      return state;
  }
};

export default isHomePageReducer;
