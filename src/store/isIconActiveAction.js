export const isIconActiveAction = (icon) => (dispatch) => {
  dispatch({
    type: "IS_ICON_ACTIVE",
    payload: {
      icon,
    },
  });
};
