//poll creation option action creators
const APIPrefix =
  window.location.host === "localhost:3000"
    ? "http://localhost:5000"
    : "https://" + window.location.host;

let nextOptionId = 2;
export const addOption = () => ({
  type: "ADD_OPTION",
  id: ++nextOptionId
});

export const removeOption = id => ({
  type: "REMOVE_OPTION",
  id
});

export const resetOptions = () => {
  nextOptionId = 2;
  return {
    type: "RESET_OPTIONS"
  };
};

export const titleInput = val => ({
  type: "TITLE_INPUT",
  val
});

export const optionInput = (id, val) => ({
  type: "OPTION_INPUT",
  id,
  val
});

export const createPoll = (e, jwt) => {
  // console.log(jwt);
  e.preventDefault();
  const title = e.target[0].value;
  let options = [];

  for (let i = 1; i < e.target.length - 3; i += 2) {
    options.push(e.target[i].value);
  }
  options = options.filter(option => option);
  if (!title || options.length < 2 || options.length > 100)
    return {
      type: "CREATE_POLL_ERROR",
      nameError: !Boolean(title),
      optionsError: options.length < 2 || options.length > 100
    };

  let body = { title, options };
  if (jwt) body.jwt = jwt;
  return dispatch => {
    dispatch(creatingPoll());
    fetch(`${APIPrefix}/api/newpoll`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => dispatch(createdPoll(res)));
  };
};

export const creatingPoll = () => ({
  type: "CREATING_POLL"
});

export const createdPoll = pollId => ({
  type: "CREATED_POLL",
  pollId
});

export const resetCreatePollPage = () => ({
  type: "RESET_CREATE_POLL_PAGE"
});

//single poll action creators
export const getPollRequest = id => ({
  type: "GET_POLL_REQUEST",
  id
});

export const getPollResponse = poll => ({
  type: "GET_POLL_RESPONSE",
  poll
});

export const getPollError = err => ({
  type: "GET_POLL_ERROR",
  err
});

export const fetchPoll = (id, jwt) => {
  // console.log(id, jwt)
  return dispatch => {
    dispatch(getPollRequest(id));
    return (
      fetch(`${APIPrefix}/api/poll/${id}`, { headers: { jwt } })
        .then(res => {
          // console.log(res);
          return res.json();
        })
        // error => {console.log(error)}
        .then(poll => {
          // console.log(poll);
          dispatch(getPollResponse(poll));
        })
    );
  };
};

export const userVoted = () => ({
  type: "USER_VOTED"
});

export const incrementVoteCount = id => ({
  type: "INCREMENT_VOTE_COUNT",
  id
});

export const setVotingDataWidth = width => ({
  type: "SET_VOTING_DATA_WIDTH",
  width
});

export const savePollLocation = location => ({
  type: "SAVE_POLL_LOCATION",
  location
});

//voting acion creators
export const sendVoteRequest = id => ({
  type: "SEND_VOTE_REQUEST",
  id
});

export const voted = data => ({
  type: "VOTED",
  data
});

export const sendVote = (id, jwt, socket) => {
  // console.log(socket.emit, socket);
  // console.log(id);
  return dispatch => {
    // dispatch(incrementVoteCount(id))

    dispatch(sendVoteRequest(id));
    return fetch(`${APIPrefix}/api/vote/${id}`, {
      method: "POST",
      headers: { Authorization: `bearer ${jwt}` }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        if (data.error) {
          if (data.error === "user voted on this poll") {
            dispatch(userVoted());
          }
        } else {
          dispatch(userVoted());
          dispatch(voted(data));
          // console.log(socket.emit);
          socket.emit("votecast", { id });
        }
      });
  };
};

// multiple polls action creators
export const findPollsInput = text => ({
  type: "FIND_POLLS_INPUT",
  text
});

export const getPolls = nameLike => {
  return dispatch => {
    // console.log(nameLike);
    dispatch(getPollsRequest());
    return fetch(`${APIPrefix}/api/polls`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ nameLike })
    })
      .then(data => {
        return data.json();
      })
      .then(data => {
        dispatch(getPollsResponse(data));
      });
  };
};

export const getPollsRequest = () => ({
  type: "GET_POLLS_REQUEST"
});

export const getPollsResponse = polls => ({
  type: "GET_POLLS_RESPONSE",
  polls
});

//login action creators
export const signinRequest = () => ({
  type: "SIGNIN_REQUEST"
});

export const signinSuccess = (jwt, pollLocation = undefined) => ({
  type: "SIGNIN_SUCCESS",
  jwt,
  pollLocation
});

export const signinFail = err => ({
  type: "SIGNIN_FAIL",
  err
});

export const signin = (username, password, pollLocation = undefined) => {
  return dispatch => {
    dispatch(signinRequest());
    return fetch(`${APIPrefix}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        // console.log(res);
        return res.json();
      })
      .then(data => {
        // console.log(data)
        data.error
          ? dispatch(signinFail(data))
          : dispatch(signinSuccess(data, pollLocation));
      });
  };
};

export const loginUsernameInput = e => ({
  type: "LOGIN_USERNAME_INPUT",
  input: e.target.value
});

export const loginPasswordInput = e => ({
  type: "LOGIN_PASSWORD_INPUT",
  input: e.target.value
});

//signup action creators
export const signupUsernameInput = e => ({
  type: "SIGNUP_USERNAME_INPUT",
  event: e
});

export const signupPassword1Input = e => ({
  type: "SIGNUP_PASSWORD_1_INPUT",
  event: e
});

export const signupPassword2Input = e => ({
  type: "SIGNUP_PASSWORD_2_INPUT",
  event: e
});

export const createUser = (username, password) => {
  return dispatch => {
    if (username.length > 16 || username.length < 2) {
      dispatch(signupNameBadLength());
    } else {
      dispatch(signupRequest());
      return fetch(`${APIPrefix}/api/createuser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            if (res.error.userName) {
              // console.log(res);
              dispatch(signupUsernameTaken());
            }
          } else {
            // console.log(res);
            dispatch(signupResponse(res));
          }
        });
    }
  };
};

export const signupRequest = () => ({
  type: "SIGNUP_REQUEST"
});

export const signupResponse = data => ({
  type: "SIGNUP_RESPONSE",
  data
});

export const signupUsernameTaken = () => ({
  type: "SIGNUP_USERNAME_TAKEN"
});

export const signupNameBadLength = () => ({
  type: "SIGNUP_NAME_BAD_LENGTH"
});

export const passwordMismatch = () => ({
  type: "PASSWORD_MISMATCH"
});

export const resetSignupPage = () => ({
  type: "RESET_SIGNUP_PAGE"
});

//logout action creator
export const logout = () => ({
  type: "LOGOUT_USER"
});

//get user's polls action creators
export const getMyPolls = jwt => {
  return dispatch => {
    dispatch(getMyPollsRequest());
    return fetch(`${APIPrefix}/api/mypolls`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ jwt })
    })
      .then(res => res.json())
      .then(res => dispatch(getMyPollsResponse(res)));
  };
};

export const getMyPollsRequest = () => ({
  type: "GET_MY_POLLS_REQUEST"
});

export const getMyPollsResponse = polls => ({
  type: "GET_MY_POLLS_RESPONSE",
  polls
});

export const resetMyPolls = () => ({
  type: "RESET_MY_POLLS"
});
