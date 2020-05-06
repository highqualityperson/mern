import React from "react";
// material UI imports
import TextField from "@material-ui/core/TextField";
import { register } from "../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      msg: null
    };
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // Check for registration error
      if (error.id === "REGISTER_FAIL") {
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
    const { name, email, password } = this.state;

    // Create user object
    const newUser = {
      name,
      email,
      password
    };

    // Attempt to register
    this.props.register(newUser);
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
        <h1>Sign In page</h1>
        {this.renderRedirect()}
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              name="name"
              className="input"
              label="User name"
              margin="normal"
              variant="outlined"
              value={this.props.name}
              onChange={this.handleInputChange}
            />
          </div>

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
          <input type="submit" value="Submit" />
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
  { register }
)(SignUp);
