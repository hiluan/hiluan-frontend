export const isSlideActiveAction = (index) => (dispatch) => {
  dispatch({
    type: "IS_SLIDE_ACTIVE",
    payload: {
      index,
    },
  });
};
