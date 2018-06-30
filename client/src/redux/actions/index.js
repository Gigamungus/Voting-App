let nextOptionId = 1;
export const addOption = () => ({
  type: "ADD_OPTION",
  id: nextOptionId++
});

export const removeOption = id => ({
  type: "REMOVE_OPTION",
  id
});

export const resetPollForm = () => ({
  type: "RESET_POLL_FORM"
});
