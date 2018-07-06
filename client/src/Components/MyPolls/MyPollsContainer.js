import { connect } from "react-redux";
import MyPolls from "./MyPolls";
import { getMyPolls, resetMyPolls } from "./../../redux/actions";

const mapStateToProps = state => ({
  signedIn: state.user.signedIn,
  jwt: state.user.jwt,
  loading: state.myPolls.loading,
  loaded: state.myPolls.loaded,
  polls: state.myPolls.polls
});

const mapDispatchToProps = dispatch => ({
  getPolls: jwt => dispatch(getMyPolls(jwt)),
  reset: () => dispatch(resetMyPolls())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPolls);
