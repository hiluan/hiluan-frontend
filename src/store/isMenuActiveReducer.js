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
