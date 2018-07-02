const polls = (
  state = {
    loading: false,
    loaded: false,
    name: undefined,
    polls: []
  },
  action
) => {
  switch (action.type) {
    case "GET_POLLS_REQUEST":
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        name: action.name
      });
    case "GET_POLLS_RESPONSE":
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
