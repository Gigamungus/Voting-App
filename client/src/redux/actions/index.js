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
