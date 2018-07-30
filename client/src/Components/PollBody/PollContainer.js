import { connect } from "react-redux";
import Poll from "./Poll";
import {
  fetchPoll,
  sendVote,
  incrementVoteCount,
  setVotingDataWidth,
  savePollLocation
} from "./../../redux/actions";

const mapStateToProps = state => {
  // console.log(state.poll.pollLocation);
  return {
    poll: state.poll,
    pollId: state.poll.poll._id,
    user: state.user,
    votingDataWidth: state.poll.votingDataWidth
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPoll: (id, jwt) => dispatch(fetchPoll(id, jwt)),
  sendVote: (optionId, jwt, sock) => dispatch(sendVote(optionId, jwt, sock)),
  incrementVoteCount: data => dispatch(incrementVoteCount(data)),
  setVotingDataWidth: width => dispatch(setVotingDataWidth(width)),
  savePollLocation: location => dispatch(savePollLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poll);
