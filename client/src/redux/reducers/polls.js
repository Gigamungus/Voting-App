const poll = (
  state = {
    loading: false,
    loaded: false,
    poll: {},
    err: false
  },
  action
) => {
  switch (action.type) {
    case "GET_POLL_REQUEST":
      //   console.log("get_poll_request");
      return Object.assign({}, state, { loading: true, loaded: false });
    case "GET_POLL_RESPONSE":
      console.log("get_poll_response");
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        poll: action.poll
      });
    case "GET_POLL_ERROR":
      console.log("get_poll_error");
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        err: action.err
      });
    default:
      return state;
  }
};

export default poll;
