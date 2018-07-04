//poll creation option action creators
let nextOptionId = 2;
export const addOption = () => ({
  type: "ADD_OPTION",
  id: ++nextOptionId
});

export const removeOption = id => ({
  type: "REMOVE_OPTION",
  id
});

export const resetOptions = () => ({
  type: "RESET_OPTIONS",
  id: (nextOptionId += 10)
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

export const fetchPoll = id => {
  return dispatch => {
    dispatch(getPollRequest(id));
    return fetch(`http://localhost:5000/api/poll/${id}`)
      .then(
        res => {
          // console.log(res);
          return res.json();
        }
        // error => {console.log(error)}
      )
      .then(poll => {
        // console.log(poll);
        dispatch(getPollResponse(poll));
      });
  };
};

export const userVoted = () => ({
  type: "USER_VOTED"
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

export const sendVote = (id, jwt) => {
  return dispatch => {
    dispatch(sendVoteRequest(id));
    return fetch(`http://localhost:5000/api/vote/${id}`, {
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
        }
      });
  };
};

// multiple polls action creators
export const getPollsRequest = name => ({
  type: "GET_POLLS_REQUEST",
  name
});

export const getPollsResponse = polls => ({
  type: "GET_POLLS_RESPONSE",
  polls
});

export const getPolls = name => {
  return dispatch => {
    dispatch(getPollsRequest(name));
    return fetch(`http://localhost:5000/api/polls/${name}`)
      .then(polls => polls.json())
      .then(polls => dispatch(getPollsResponse(polls)));
  };
};

//login action creators
export const signinRequest = () => ({
  type: "SIGNIN_REQUEST"
});

export const signinSuccess = jwt => ({
  type: "SIGNIN_SUCCESS",
  jwt
});

export const signinFail = err => ({
  type: "SIGNIN_FAIL",
  err
});

export const signin = (username, password) => {
  return dispatch => {
    dispatch(signinRequest());
    return fetch("http://localhost:5000/api/login", {
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
        data.error ? dispatch(signinFail(data)) : dispatch(signinSuccess(data));
      });
  };
};

export const usernameInput = e => ({
  type: "USERNAME_INPUT",
  input: e.target.value
});

export const passwordInput = e => ({
  type: "PASSWORD_INPUT",
  input: e.target.value
});
