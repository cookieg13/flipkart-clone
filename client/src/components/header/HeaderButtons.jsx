import { Box, Button, Typography, Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { ShoppingCart } from "@material-ui/icons";
import { useState } from "react";
import { useSelector } from "react-redux";


//components
import LoginDialog from "../login/Login";
import { useContext } from "react";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";


const useStyle = makeStyles(theme => ({
  container: {
    display: "flex",
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      textDecoration: "none",
      color: "#FFFFFF",
      fontSize: 14,
      alignItems: "center",
      [theme.breakpoints.down('sm')]: {
        color: "#2874f0",
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10
      },
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  login: {
    color: "#2874f0",
    background: "#FFFFFF",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    height: 32,
    boxShadow: "none",
    [theme.breakpoints.down('sm')]: {
      color: "#fff",
      background: "#2874f0",
    },
  },
}));
const HeaderButtons = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const { cartItems } = useSelector(state => state.cart)
  const openLoginDialog = () => {
    setOpen(true);
  };
  return (
    <Box className={classes.wrapper}>
      {

        account ? <Profile account={account} setAccount={setAccount} /> :
          <Link>
            <Button
              variant="contained"
              onClick={() => openLoginDialog()}
              className={classes.login}

            >
              {" "}
              Login
            </Button>
          </Link>
      }
      <Link>
        <Typography style={{ marginTop: 5, fontSize: 15 }}>More</Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
};
export default HeaderButtons;
