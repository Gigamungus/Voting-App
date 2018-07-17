const initialState = { input: "", getPollsLoading: false };

const navbar = (state = initialState, action) => {
  //   console.log(action, "here");
  // console.log(state);
  switch (action.type) {
    case "FIND_POLLS_INPUT":
      return Object.assign({}, state, { input: action.text });
    default:
      return state;
  }
};

export default navbar;
