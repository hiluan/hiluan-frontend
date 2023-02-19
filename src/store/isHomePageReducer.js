<<<<<<< HEAD
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
=======
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
>>>>>>> 949e034603fd33898c83216d7dcd5ac4a7b2d19c
