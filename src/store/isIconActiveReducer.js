const isIconActiveReducer = (state = "home", action) => {
  switch (action.type) {
    case "IS_ICON_ACTIVE":
      const newState = action.payload.icon;
      return newState;
    default:
      return state;
  }
};

export default isIconActiveReducer;
