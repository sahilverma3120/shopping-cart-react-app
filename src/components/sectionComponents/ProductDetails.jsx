import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../css/style.css";

// Custom Components
import useStyles from "../css/ProductDetailsStyle";
import SectionHeader from "./SectionHeader";
import Breadcrumb from "./Breadcrumb";

// Material-UI Components
import { Link, Grid, Button, Typography } from "@material-ui/core";
import { Divider, ButtonGroup, InputLabel } from "@material-ui/core";
import { MenuItem, FormControl, Select } from "@material-ui/core";

// Icons & Media
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DummyImage from "../../media/banner/banner_01.png";

const ProductDetails = () => {
  const classes = useStyles();
  const [prodQty, setProdQty] = useState(1);
  const [prodInStock, setProdInStock] = useState(7);

  useEffect(() => {
    setProdInStock(7);
  }, []);

  const handleQty = (operation) => {
    if (operation === "+") {
      if (prodQty < prodInStock) setProdQty(prodQty + 1);
    } else {
      if (prodQty > 1) setProdQty(prodQty - 1);
    }
  };

  return (
    <>
      <BrowserRouter>
        {/* Breadcrumbs */}
        <Breadcrumb />

        {/* Product Details Box */}
        <Grid container className={classes.productDetailsBox}>
          <Grid item md={6} sm={10} className={classes.productDetailsItem}>
            <Grid
              container
              style={{ display: "flex", justifyContent: "center" }}
            >
              {/* Product Image Gallery */}
              <Grid item sm={2} xs={12} className={classes.productGalleryBox}>
                <Grid
                  container
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {[1, 1, 1, 1, 1].map((galleryImg) => {
                    return (
                      <>
                        <Grid className={classes.prodGalleryImgBox}>
                          <img
                            src={DummyImage}
                            className={classes.prodGalleryImg}
                            alt="Img"
                          />
                        </Grid>
                      </>
                    );
                  })}
                </Grid>
              </Grid>

              {/* Product Main Image */}
              <Grid item sm={10} xs={12} className={classes.productMainImgBox}>
                <img
                  src={DummyImage}
                  className={classes.productMainImg}
                  alt="ProductMainImg"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Product Details */}
          <Grid item md={6} className={classes.productDetailsContentItem}>
            <Typography variant="h5" className={classes.productTitle}>
              Apple iPhone XR
            </Typography>

            <Typography variant="h6" className={classes.productPrice}>
              $250.99
            </Typography>

            <Typography variant="body2" className={classes.ratingBox}>
              {[1, 1, 1].map((ratingStar) => {
                return <StarIcon className={classes.ratingStar} />;
              })}
              {[1, 1].map((ratingStar) => {
                return <StarBorderIcon className={classes.ratingStar} />;
              })}
              <span style={{ marginLeft: 10 }}>
                (
                <Link color="inherit" href="#" className={classes.numReviews}>
                  {3} reviews
                </Link>
                )
              </span>
            </Typography>

            <Divider className={classes.divider} />

            <Typography
              variantMapping="p"
              className={classes.productDescription}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a
              doloribus iste natus et facere? dolor sit amet consectetur
              adipisicing elit. Sunt a doloribus iste natus et facere?
            </Typography>

            <Grid container style={{ margin: "3px 0 10px -5px" }}>
              <Grid item sm={6} xs={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="productColorLabel">Color</InputLabel>
                  <Select labelId="productColorLabel" id="productColorId">
                    <MenuItem value={"Blue"}>Blue</MenuItem>
                    <MenuItem value={"Red"}>Red</MenuItem>
                    <MenuItem value={"Black"}>Black</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={6} xs={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="productSizeLabel">Size</InputLabel>
                  <Select labelId="productSizeLabel" id="productSizeId">
                    <MenuItem value={6.65}>6.65</MenuItem>
                    <MenuItem value={7.5}>7.50</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Typography className={classes.productQuantityField}>
              <span>Quantity: </span>
              <ButtonGroup
                size="medium"
                aria-label="small button group"
                style={{ transform: "translateY(5px)" }}
              >
                <Button
                  className={classes.quantityButtons}
                  onClick={() => handleQty("-")}
                >
                  <RemoveIcon />
                </Button>
                <input
                  className={classes.quantityInputField}
                  type="number"
                  name="prodQtyId"
                  id="prodQtyId"
                  value={prodQty}
                />
                <Button
                  className={classes.quantityButtons}
                  onClick={() => handleQty("+")}
                >
                  <AddIcon />
                </Button>
              </ButtonGroup>
            </Typography>

            <Typography
              variantMapping="p"
              className={classes.productExtraDetails}
            >
              Subtotal: <span>$250.99</span>
            </Typography>

            <Typography
              variantMapping="p"
              className={classes.productExtraDetails}
            >
              Brand: <span>Apple</span>
            </Typography>

            <Typography
              variantMapping="p"
              className={classes.productExtraDetails}
            >
              Product Type: <span>Phone</span>
            </Typography>

            <Typography
              variantMapping="p"
              className={classes.productExtraDetails}
            >
              Availability:{" "}
              <span style={{ color: "green" }}>In Stock (7 Items)</span>
            </Typography>
          </Grid>

          {/* AddToCart & BuyNow Button */}
          <Grid container className={classes.buyCartButtonsBox}>
            <Grid item md={6} xs={12}>
              <Grid
                container
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Grid item sm={6} xs={11} className={classes.addCartButtonBox}>
                  <Button contained="filled" className={classes.buyCartButton}>
                    <AddShoppingCartIcon className={classes.buttonIcon} />{" "}
                    <span>Add To Cart</span>
                  </Button>
                </Grid>
                <Grid item sm={6} xs={11} className={classes.buyButtonBox}>
                  <Button contained="filled" className={classes.buyCartButton}>
                    <CreditCardIcon className={classes.buttonIcon} />{" "}
                    <span>Buy Now</span>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Product Description, Reviews & Shipping Details */}
        <Grid container>
          <SectionHeader title="productDetailsSections" />

          <Grid container className={classes.productDetailsSections}>
            <Switch>
              {/* Description Section */}
              <Route path="/product/1" exact>
                <Grid container direction="column">
                  <Typography
                    variantMapping="p"
                    className={classes.descHeading}
                  >
                    Nam tempus turpis at metus scelerisque placerat nulla
                    deumantos solicitud felis. Pellentesque diam dolor,
                    elementum etos lobortis des mollis ut risus. Sedcus faucibus
                    an sullamcorper mattis drostique des commodo pharetras
                    loremos.Donec pretium egestas sapien et mollis.
                  </Typography>
                  <Grid container direction="column">
                    <Typography variant="h5">Sample Unordered List</Typography>
                    <ul type="square" className={classes.sampleList}>
                      <li>Comodous in tempor ullamcorper miaculis</li>
                      <li>
                        Pellentesque vitae neque mollis urna mattis laoreet.
                      </li>
                      <li>Divamus sit amet purus justo.</li>
                      <li>
                        Proin molestie egestas orci ac suscipit risus posuere
                        loremous
                      </li>
                    </ul>
                  </Grid>
                  <Grid container direction="column">
                    <Typography variant="h5">Sample Ordered List</Typography>
                    <ol className={classes.sampleList}>
                      <li>Comodous in tempor ullamcorper miaculis</li>
                      <li>
                        Pellentesque vitae neque mollis urna mattis laoreet.
                      </li>
                      <li>Divamus sit amet purus justo.</li>
                      <li>
                        Proin molestie egestas orci ac suscipit risus posuere
                        loremous
                      </li>
                    </ol>
                  </Grid>
                  <Grid container direction="column">
                    <Typography variant="h5" style={{ marginBottom: 10 }}>
                      Sample Paragraph Text
                    </Typography>
                    <Typography
                      variantMapping="p"
                      style={{ lineHeight: 1.7, textIndent: 20 }}
                    >
                      Praesent vestibulum congue tellus at fringilla. Curabitur
                      vitae semper sem, eu convallis est. Cras felis nunc
                      commodo eu convallis vitae interdum non nisl. Maecenas ac
                      est sit amet augue pharetra convallis nec danos dui. Cras
                      suscipit quam et turpis eleifend vitae malesuada magna
                      congue. Damus id ullamcorper neque. Sed vitae mi a mi
                      pretium aliquet ac sed elit. Pellentesque nulla eros
                      accumsan quis justo at tincidunt lobortis denimes
                      loremous. Suspendisse vestibulum lectus in lectus
                      volutpat, ut dapibus purus pulvinar. Vestibulum sit amet
                      auctor ipsum.
                    </Typography>
                  </Grid>
                </Grid>
              </Route>

              {/* Reviews Section */}
              <Route path="/product/1/reviews" exact>
                <Grid container direction="column">
                  <Typography variant="h3" className={classes.reviewHeading}>
                    Customer Reviews
                  </Typography>
                  <Typography variant="body2" className={classes.ratingBox}>
                    {[1, 1, 1].map((ratingStar) => {
                      return <StarIcon className={classes.sectionRatingStar} />;
                    })}
                    {[1, 1].map((ratingStar) => {
                      return (
                        <StarBorderIcon className={classes.sectionRatingStar} />
                      );
                    })}
                  </Typography>
                  <Divider className={classes.ratingDivider} />
                </Grid>
              </Route>

              {/* Shipping Details */}
              <Route path="/product/1/policies" exact>
                <Grid
                  container
                  direction="column"
                  className={classes.shippingDetailsSection}
                >
                  <Grid container>
                    <Typography variant="h6">Returns Policy</Typography>
                    <Typography variantMapping="p" style={{ marginTop: 10 }}>
                      You may return most new, unopened items within 30 days of
                      delivery for a full refund. We'll also pay the return
                      shipping costs if the return is a result of our error (you
                      received an incorrect or defective item, etc.).
                    </Typography>
                    <Typography variantMapping="p" style={{ marginTop: 25 }}>
                      You should expect to receive your refund within four weeks
                      of giving your package to the return shipper, however, in
                      many cases you will receive a refund more quickly. This
                      time period includes the transit time for us to receive
                      your return from the shipper (5 to 10 business days), the
                      time it takes us to process your return once we receive it
                      (3 to 5 business days), and the time it takes your bank to
                      process our refund request (5 to 10 business days).
                    </Typography>
                    <Typography variantMapping="p" style={{ marginTop: 25 }}>
                      If you need to return an item, simply login to your
                      account, view the order using the 'Complete Orders' link
                      under the My Account menu and click the Return Item(s)
                      button. We'll notify you via e-mail of your refund once
                      we've received and processed the returned item.
                    </Typography>
                  </Grid>
                  <Grid container style={{ marginTop: 30 }}>
                    <Typography variant="h6">Shipping Policy</Typography>
                    <Typography variantMapping="p" style={{ marginTop: 10 }}>
                      We can ship to virtually any address in the world. Note
                      that there are restrictions on some products, and some
                      products cannot be shipped to international destinations.
                    </Typography>
                    <Typography variantMapping="p" style={{ marginTop: 25 }}>
                      When you place an order, we will estimate shipping and
                      delivery dates for you based on the availability of your
                      items and the shipping options you choose. Depending on
                      the shipping provider you choose, shipping date estimates
                      may appear on the shipping quotes page.
                    </Typography>
                    <Typography variantMapping="p" style={{ marginTop: 25 }}>
                      Please also note that the shipping rates for many items we
                      sell are weight-based. The weight of any such item can be
                      found on its detail page. To reflect the policies of the
                      shipping companies we use, all weights will be rounded up
                      to the next full pound.
                    </Typography>
                  </Grid>
                </Grid>
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </BrowserRouter>
    </>
  );
};

export default ProductDetails;
