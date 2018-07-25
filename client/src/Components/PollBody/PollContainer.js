import { connect } from "react-redux";
import Poll from "./Poll";
import { fetchPoll, sendVote, incrementVoteCount } from "./../../redux/actions";

const mapStateToProps = state => {
  // console.log(state.poll.poll._id);
  return {
    poll: state.poll,
    pollId: state.poll.poll._id,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPoll: (id, jwt) => dispatch(fetchPoll(id, jwt)),
  sendVote: (optionId, jwt, sock) => dispatch(sendVote(optionId, jwt, sock)),
  incrementVoteCount: data => {
    dispatch(incrementVoteCount(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poll);
