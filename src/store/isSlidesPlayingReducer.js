const isSlidesPlayingReducer = (state = false, action) => {
  switch (action.type) {
    case "IS_SLIDES_PLAYING":
      const newState = action.payload.isSlidesPlaying;
      return newState;
    default:
      return state;
  }
};

export default isSlidesPlayingReducer;
