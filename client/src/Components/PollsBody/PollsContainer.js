import { connect } from "react-redux";
import Poll from "./Polls";
import { getPolls } from "./../../redux/actions";

const mapStateToProps = state => ({
  polls: state.polls
});

const mapDispatchToProps = dispatch => ({
  getPolls: name => dispatch(getPolls(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poll);
