import { connect } from "react-redux";
import Poll from "./Poll";
import { fetchPoll, sendVote } from "./../../redux/actions";

const mapStateToProps = state => ({
  poll: state.poll
});

const mapDispatchToProps = dispatch => ({
  fetchPoll: id => dispatch(fetchPoll(id)),
  sendVote: optionId => dispatch(sendVote(optionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poll);
