//used for holding options whilst creating a new poll

const initialState = {
  title: "",
  options: [
    {
      id: 0,
      text: ""
    },
    {
      id: 1,
      text: ""
    }
  ],
  loading: false,
  nameError: false,
  optionsError: false,
  shouldRedirect: false,
  pollId: undefined
};

const options = (state = initialState, action) => {
  // console.log(initialState);
  // console.log(state);
  switch (action.type) {
    case "ADD_OPTION":
      return Object.assign({}, state, {
        options: [...state.options, { id: action.id, text: "" }]
      });
    case "REMOVE_OPTION":
      return Object.assign({}, state, {
        options: state.options.filter(option => option.id !== action.id)
      });
    case "RESET_OPTIONS":
      return {
        title: "",
        options: [{ id: 0, text: "" }, { id: 1, text: "" }],
        loading: false,
        nameError: false,
        optionsError: false,
        shouldRedirect: false,
        pollId: undefined
      };
    case "TITLE_INPUT":
      return Object.assign({}, state, { title: action.val });
    case "OPTION_INPUT":
      return Object.assign({}, state, {
        options: state.options.map(option => {
          return option.id === action.id
            ? Object.assign(option, { text: action.val })
            : option;
        })
      });
    case "CREATING_POLL":
      return Object.assign({}, state, {
        loading: true,
        nameError: false,
        optionsError: false
      });
    case "CREATED_POLL":
      return Object.assign({}, state, {
        loading: false,
        nameError: false,
        optionsError: false,
        shouldRedirect: true,
        pollId: action.pollId
      });
    case "CREATE_POLL_ERROR":
      // console.log(action);
      return Object.assign({}, state, {
        nameError: action.nameError,
        optionsError: action.optionsError
      });
    case "RESET_CREATE_POLL_PAGE":
      return {
        title: "",
        options: [{ id: 0, text: "" }, { id: 1, text: "" }],
        loading: false,
        nameError: false,
        optionsError: false,
        shouldRedirect: false,
        pollId: undefined
      };
    default:
      return state;
  }
};

export default options;
