import React from "react";

// Material-UI Components
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Badge } from "@material-ui/core";

// Icons & Media
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import BrandIcon from "../media/brand.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    paddingTop: 3,
    paddingBottom: 3,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  brandIcon: {
    width: 40,
  },
  title: {
    flexGrow: 1,
    display: "none",
    fontWeight: "bolder",
    letterSpacing: "1px",
    fontFamily: "algerian, cooper black, Arial",
    marginLeft: -12,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.08),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.08),
      transition: "0.4s",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  badge: {
    marginLeft: 20,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="transparent" className={classes.appbar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <img src={BrandIcon} className={classes.brandIcon} alt="Commerce.js" />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Commerce.js
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.badge}>
              <Badge badgeContent={4} color="error">
                <ShoppingCartTwoToneIcon />
              </Badge>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
