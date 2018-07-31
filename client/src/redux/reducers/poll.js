//used for tracking info about a single poll
const initialState = {
  loading: false,
  loaded: false,
  loadingVote: false,
  loadedVote: false,
  poll: {},
  err: false,
  userVoted: false,
  votingDataWidth: undefined,
  pollLocation: undefined
};

const poll = (state = initialState, action) => {
  switch (action.type) {
    case "USER_VOTED":
      return Object.assign({}, state, { userVoted: true });
    case "GET_POLL_REQUEST":
      //   console.log("get_poll_request");
      return Object.assign({}, state, { loading: true, loaded: false });

    case "GET_POLL_RESPONSE":
      // console.log("get_poll_response");
      // console.log(action)
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        poll: action.poll,
        userVoted: action.poll.userVoted
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
      // console.log("screwing it all up")
      return Object.assign({}, state, {
        loadingVote: false,
        loadedVote: true,
        poll: Object.assign({}, action.data, { userVoted: true })
      });
    case "INCREMENT_VOTE_COUNT":
      // console.log("incrementing vote count");
      let newState = Object.assign({}, state);
      // console.log("newstate", newState, "newstate");
      newState.poll.options = newState.poll.options.map(option => {
        // if (option._id === action.id) console.log(option.count);
        return option._id === action.id
          ? Object.assign({}, option, { count: option.count + 1 })
          : option;
      });
      return newState;
    case "SET_VOTING_DATA_WIDTH":
      return Object.assign({}, state, { votingDataWidth: action.width });
    case "SAVE_POLL_LOCATION":
      // console.log(action, state);
      let pollLocation =
        action.location === "/login" || action.location === "/signup"
          ? state.pollLocation
          : action.location;
      // console.log(pollLocation);
      return Object.assign({}, state, { pollLocation: pollLocation });
    default:
      return state;
  }
};

export default poll;
