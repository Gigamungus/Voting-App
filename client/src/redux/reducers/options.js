const options = (
  state = [
    {
      id: 0
    },
    {
      id: 1
    }
  ],
  action
) => {
  // console.log(state);
  switch (action.type) {
    case "ADD_OPTION":
      return [
        ...state,
        {
          id: action.id
        }
      ];
    case "REMOVE_OPTION":
      return state.filter(option => option.id !== action.id);
    case "RESET_OPTIONS":
      return [{ id: action.id - 1 }, { id: action.id }];
    default:
      return state;
  }
};

export default options;
