<<<<<<< HEAD
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
=======
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
>>>>>>> 949e034603fd33898c83216d7dcd5ac4a7b2d19c
