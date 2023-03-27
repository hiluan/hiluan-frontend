export const isMenuActiveAction = (status) => (dispatch) => {
  dispatch({
    type: "IS_MENU_ACTIVE",
    payload: {
      isMenuActive: status,
    },
  });
};
