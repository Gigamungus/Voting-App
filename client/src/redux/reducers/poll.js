//used for tracking info about a single poll

const poll = (
  state = {
    loading: false,
    loaded: false,
    loadingVote: false,
    loadedVote: false,
    poll: {},
    err: false,
    userVoted: false
  },
  action
) => {
  switch (action.type) {
    case "GET_POLL_REQUEST":
      //   console.log("get_poll_request");
      return Object.assign({}, state, { loading: true, loaded: false });

    case "GET_POLL_RESPONSE":
      // console.log("get_poll_response");
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

    case "SEND_VOTE_REQUEST":
      return Object.assign({}, state, { loadingVote: true });

    case "VOTED":
      return Object.assign({}, state, {
        loadingVote: false,
        loadedVote: true,
        poll: action.data
      });

    default:
      return state;
  }
};

export default poll;
