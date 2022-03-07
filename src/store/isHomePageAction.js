export const isHomePageAction = (isHomePage) => (dispatch) => {
  dispatch({
    type: "IS_HOME_PAGE",
    payload: {
      isHomePage,
    },
  });
};
