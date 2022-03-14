import myDesignsInfo from "../components/_myDesignsInfo";

const isSlideActiveReducer = (state = myDesignsInfo, action) => {
  switch (action.type) {
    case "IS_SLIDE_ACTIVE":
      const index = action.payload.index;
      state[index].active = true;
      return [...state];
    default:
      return state;
  }
};

export default isSlideActiveReducer;
