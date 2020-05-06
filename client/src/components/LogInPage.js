import React from "react";
import { connect } from "react-redux";
import { logIn } from "../store/actions/authActions";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: null
    };
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for registration error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.errors });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  //  Inputs functions
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  // function to submit the user info
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    const { email, password } = this.state;

    // Create user object
    const user = {
      email,
      password
    };

    // attempt to logIn
    this.props.logIn(user);
  };

  // Redirect to home page
  renderRedirect = () => {
    if (this.props.auth.user) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div>
        <h1>Log In Page</h1>
        {this.renderRedirect()}
        <form>
          <div>
            <TextField
              name="email"
              className="input"
              label="Email adress"
              margin="normal"
              variant="outlined"
              value={this.props.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <TextField
              name="password"
              className="input"
              label="Password"
              margin="normal"
              variant="outlined"
              value={this.props.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input type="submit" value="LogIn" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(
  mapStateToProps,
  { logIn }
)(LogIn);
