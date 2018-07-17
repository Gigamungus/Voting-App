//used for tracking multiple polls, useful for generating a list of polls

const polls = (
  state = {
    loading: false,
    loaded: false,
    polls: []
  },
  action
) => {
  switch (action.type) {
    case "GET_POLLS_REQUEST":
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });
    case "GET_POLLS_RESPONSE":
      console.log(action);
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        polls: action.polls
      });
    default:
      return state;
  }
};

export default polls;
