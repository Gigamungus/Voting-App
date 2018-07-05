import { connect } from "react-redux";
import CreatePollForm from "./CreatePollForm";
import {
  addOption,
  removeOption,
  resetOptions,
  titleInput,
  optionInput,
  createPoll,
  resetCreatePollPage
} from "./../../redux/actions";

const mapStateToProps = state => {
  // console.log(state);
  return {
    options: state.options.options,
    title: state.options.title,
    processing: state.options.loading,
    nameError: state.options.nameError,
    optionsError: state.options.optionsError,
    shouldRedirect: state.options.shouldRedirect,
    pollId: state.options.pollId,
    signedIn: state.user.signedIn,
    jwt: state.user.jwt
  };
};

const mapDispatchToProps = dispatch => ({
  addOption: () => dispatch(addOption()),
  removeOption: id => dispatch(removeOption(id)),
  titleInput: val => dispatch(titleInput(val)),
  optionInput: (id, val) => dispatch(optionInput(id, val)),
  resetOptions: () => dispatch(resetOptions()),
  createPoll: (e, jwt) => dispatch(createPoll(e, jwt)),
  reset: () => dispatch(resetCreatePollPage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePollForm);
