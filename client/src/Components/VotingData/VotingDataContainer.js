import { connect } from "react-redux";
import VotingData from "./VotingData";

const mapStateToProps = state => {
  // console.log(state.poll.poll.userVoted);
  // console.log(state.poll.votingDataWidth);
  // console.log(state);
  return {
    loading: state.poll.loading,
    loaded: state.poll.loaded,
    poll: state.poll.poll.options,
    width: state.poll.votingDataWidth,
    userVoted: state.poll.poll.userVoted
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VotingData);
