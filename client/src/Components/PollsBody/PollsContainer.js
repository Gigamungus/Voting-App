import { connect } from "react-redux";
import Poll from "./Polls";

const mapStateToProps = state => ({
  polls: state.polls
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poll);
