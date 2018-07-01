//poll creation option action creators
let nextOptionId = 2;
export const addOption = () => ({
  type: "ADD_OPTION",
  id: nextOptionId++
});

export const removeOption = id => ({
  type: "REMOVE_OPTION",
  id
});

export const resetOptions = () => ({
  type: "RESET_OPTIONS",
  id: nextOptionId++
});

//poll action creators
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
        },
        // error => {console.log(error)}
      )
      .then(poll => {
        // console.log(poll);
        dispatch(getPollResponse(poll));
      });
  };
};
