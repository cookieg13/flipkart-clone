import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const useStyle = makeStyles({
  component: {
    marginTop: 40
  },
  logout: {
    marginLeft: 20,
    fontSize: 14
  }
})

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyle();



  const handleClose = () => {
    setOpen(false);
  }
  const handleClick = (event) => {
    //setOpen(true);
    setOpen(event.currentTarget);
  }
  const logout = () => {
    setAccount(false);
  }
  return (
    <>
      <Link><Typography onClick={handleClick} style={{ marginTop: 5 }}>{account}</Typography></Link>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem onClick={() => { handleClose(); logout(); }}>
          <PowerSettingsNewIcon fontSize="small" color="primary" />
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
