import { makeStyles } from "@material-ui/core";
import "./style.css";

// Icons Banners
import Banner1 from "../../media/banner/banner_01.png";
import Banner2 from "../../media/banner/banner_02.png";
import Collection1 from "../../media/collection/collection_01.png";
import Collection2 from "../../media/collection/collection_02.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: 600,
    marginBottom: 40,
    background: "#f1f1f1",
  },
  mt3: {
    marginTop: 10,
  },
  bannerBox: {
    padding: "10px",
    cursor: "grab",
    "&:active": {
      cursor: "grabbing",
    },
    overflow: "hidden",
  },
  bannerImgBox: {
    display: "block",
    margin: "auto",
  },
  bannerImg: {
    maxHeight: 350,
    display: "block",
    margin: "auto",
    [theme.breakpoints.up("xl")]: {
      margin: "10px",
    },
    [theme.breakpoints.up("md")]: {
      maxHeight: 550,
    },
  },
  bannerContent: {
    paddingLeft: 100,
    paddingBottom: 20,
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      paddingLeft: 0,
    },
  },
  bannerBoldContent: {
    fontWeight: "bold",
    marginTop: 10,
    textTransform: "uppercase",
    fontFamily: "Archivo, sans-serif",
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px",
    },
  },
  bannerBtn: {
    width: 170,
    borderRadius: 0,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 15,
    background: "black",
    color: "white",
    border: "2px solid black",
    letterSpacing: "1px",
    fontWeight: "600",
    transition: "0.5s",
    "&:hover": {
      background: "transparent",
      color: "black",
    },
  },
  collection: {
    paddingLeft: 70,
    paddingRight: 70,
    marginBottom: 30,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  collectionItem: {
    background: "#f1f1f1",
    padding: "20px 35px",
    textAlign: "center",
    borderRadius: 7,
    [theme.breakpoints.down("md")]: {
      padding: "20px 15px",
    },
  },
  collectionImgBox: {
    height: 170,
    [theme.breakpoints.down("md")]: {
      height: 140,
    },
  },
  collectionImg: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  collectionSlogan: {
    color: "rgba(0,0,0,0.7)",
    fontFamily: "Archivo, sans-serif",
    [theme.breakpoints.down("md")]: {
      fontSize: "smaller",
    }
  },
  collectionBoldContent: {
    marginTop: 5,
    fontWeight: "bold",
    fontFamily: "Archivo, sans-serif",
    letterSpacing: "0.4px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
  },
  collectionBtn: {
    width: 150,
    borderRadius: 20,
    paddingTop: 3,
    paddingBottom: 3,
    marginTop: 5,
    background: "#2B1F4D",
    color: "white",
    fontFamily: "Archivo, sans-serif",
    border: "2.5px solid #2B1F4D",
    letterSpacing: "1px",
    fontWeight: "500",
    transition: "0.5s",
    "&:hover": {
      background: "transparent",
      color: "#2B1F4D",
    },
    [theme.breakpoints.down("md")]: {
      width: 125,
      fontSize: "small",
    },
  },
}));

export default useStyles;
export { Banner1, Banner2, Collection1, Collection2 };
