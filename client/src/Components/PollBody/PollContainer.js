import { connect } from "react-redux";
import Poll from "./Poll";
import { fetchPoll, sendVote } from "./../../redux/actions";

const mapStateToProps = state => ({
  poll: state.poll,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchPoll: (id, jwt) => dispatch(fetchPoll(id, jwt)),
  sendVote: (optionId, jwt) => dispatch(sendVote(optionId, jwt))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poll);
