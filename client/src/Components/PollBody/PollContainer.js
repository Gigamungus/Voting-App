import { connect } from "react-redux";
import Poll from "./Poll";
import { fetchPoll, sendVote } from "./../../redux/actions";

const mapStateToProps = state => ({
  poll: state.poll,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchPoll: (id, jwt) => dispatch(fetchPoll(id, jwt)),
  sendVote: (optionId, jwt, sock) => dispatch(sendVote(optionId, jwt, sock))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poll);
