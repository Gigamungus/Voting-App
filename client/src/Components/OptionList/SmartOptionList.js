import { connect } from "react-redux";
import OptionList from "./OptionList";
import { addOption, removeOption } from "./../../redux/actions";

const mapStateToProps = state => {
  // console.log(state);
  return {
    options: state.options
  };
};

const mapDispatchToProps = dispatch => ({
  addOption: () => dispatch(addOption()),
  removeOption: id => dispatch(removeOption(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionList);
