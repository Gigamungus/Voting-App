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
