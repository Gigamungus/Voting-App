import { connect } from "react-redux";
import Poll from "./Poll";
import { fetchPoll } from "./../../redux/actions";

const mapStateToProps = state => ({
  polls: state.polls
});

const mapDispatchToProps = dispatch => ({
  fetchPoll: id => dispatch(fetchPoll(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poll);
