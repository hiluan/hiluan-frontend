<<<<<<< HEAD
const isMenuActiveReducer = (state = false, action) => {
  switch (action.type) {
    case "IS_MENU_ACTIVE":
      const newState = action.payload.isMenuActive;
      return newState;
    default:
      return state;
  }
};

export default isMenuActiveReducer;
=======
const isMenuActiveReducer = (state = false, action) => {
  switch (action.type) {
    case "IS_MENU_ACTIVE":
      const newState = action.payload.isMenuActive;
      return newState;
    default:
      return state;
  }
};

export default isMenuActiveReducer;
>>>>>>> 949e034603fd33898c83216d7dcd5ac4a7b2d19c
