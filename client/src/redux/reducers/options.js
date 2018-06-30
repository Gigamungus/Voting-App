const options = (
  state = [
    {
      id: 0
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
    default:
      return state;
  }
};

export default options;
