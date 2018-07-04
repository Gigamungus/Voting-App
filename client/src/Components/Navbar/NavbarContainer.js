import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
