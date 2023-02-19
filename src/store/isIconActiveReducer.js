<<<<<<< HEAD
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
=======
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
>>>>>>> 949e034603fd33898c83216d7dcd5ac4a7b2d19c
