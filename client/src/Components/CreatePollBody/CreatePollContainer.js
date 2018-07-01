import { connect } from "react-redux";
import CreatePollForm from "./CreatePollForm";
import { addOption, removeOption, resetOptions } from "./../../redux/actions";

const mapStateToProps = state => {
  // console.log(state);
  return {
    options: state.options
  };
};

const mapDispatchToProps = dispatch => ({
  addOption: () => dispatch(addOption()),
  removeOption: id => dispatch(removeOption(id)),
  resetOptions: () => dispatch(resetOptions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePollForm);
