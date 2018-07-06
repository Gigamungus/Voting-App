const initialState = {
  loading: false,
  loaded: false,
  polls: [{ name: "test", options: [{ name: "1" }, { name: "2" }] }]
};

const myPolls = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MY_POLLS_REQUEST":
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        polls: []
      });
    case "GET_MY_POLLS_RESPONSE":
      return Object.assign({}, state, {
        polls: action.polls,
        loading: false,
        loaded: true
      });
    case "RESET_MY_POLLS":
      return {
        loading: false,
        loaded: false,
        polls: [{ name: "test", options: [{ name: "1" }, { name: "2" }] }]
      };
    default:
      return state;
  }
};

export default myPolls;
