export const isSlidesPlayingAction = (status) => (dispatch) => {
  dispatch({
    type: "IS_SLIDES_PLAYING",
    payload: {
      isSlidesPlaying: status,
    },
  });
};
