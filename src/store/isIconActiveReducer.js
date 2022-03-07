const isIconActiveReducer = (state = "home", action) => {
  switch (action.type) {
    case "IS_ICON_ACTIVE":
      return (state = action.payload.icon);
    default:
      return state;
  }
};

export default isIconActiveReducer;
