import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import { Link } from "react-router-dom";
import { logOut } from "../store/actions/authActions";
import PersonIcon from "@material-ui/icons/Person";

export default connect(null, { logOut })(function UserMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(props);
  if (props.user) {
    return (
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img className="iconstyle" src={PersonIcon} alt="menu pic" />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/itineraries/favourites">Favourites</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <input type="button" onClick={props.logOut} value="LogOut" />
          </MenuItem>
        </Menu>
      </div>
    );
  } else {
    return (
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <PersonAddRoundedIcon className="iconstyle"></PersonAddRoundedIcon>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/login">Log in</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/signup">Create Account</Link>
          </MenuItem>
        </Menu>
      </div>
    );
  }
});
