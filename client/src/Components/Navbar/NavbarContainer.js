import { connect } from "react-redux";
import Navbar from "./Navbar";
import { logout, findPollsInput, getPolls } from "./../../redux/actions";

const mapStateToProps = state => {
  // console.log(state.navbar.input);
  return {
    user: state.user,
    findPollsText: state.navbar.input
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  findPollsInput: text => dispatch(findPollsInput(text)),
  getPollsRequest: nameLike => dispatch(getPolls(nameLike))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
