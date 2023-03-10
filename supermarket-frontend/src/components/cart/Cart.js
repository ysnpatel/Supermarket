import React from "react";
import { useEffect, useState, useContext } from "react";
import { CustomContext } from "../../context/Context.js";
import axios from "axios";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Cart() {
  const [listOfItems, setListOfItems] = useState([]);
  const {
    authenticated,
    currentUserInfo,
    cart,
    setCart,
    isDrawerOpen,
    setIsDrawerOpen,
  } = useContext(CustomContext);
  const [total, setTotal] = useState(0);

  //GET all items that are within cart, looking up by productId
  useEffect(() => {
    fetchAllCartItems();
  }, [cart]);
  async function fetchAllCartItems() {
    let keys = Object.keys(cart);
    setListOfItems([]);
    for (let i = 0; i < keys.length; i++) {
      console.log("current key:" + keys[i]);
      axios
        .get(`http://localhost:8080/products/getOneProduct/${keys[i]}`)
        .then((res) => {
          setListOfItems((previousArray) => [...previousArray, res.data[0]]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //Find total cost of all items within the cart
  useEffect(() => {
    const values = Object.values(cart);
    if (values.length == listOfItems.length) {
      let total = 0;
      for (let i = 0; i < values.length; i++) {
        console.log(values[i]);
        const price = values[i] * listOfItems[i].price;
        console.log(price);
        total += parseFloat(price);
        console.log(total);
      }
      setTotal(total.toFixed(2));
    }
  }, [cart, listOfItems]);

  return (
    <>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="400px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Your Cart
          </Typography>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid item xs={12} sm={6} md={4}>
              {listOfItems.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.Image}
                    alt="random"
                    height="150px"
                  />
                  <CardContent>
                    {item.productName}
                    <br></br>Quantity: {cart[item.productId]}
                    <br></br>
                    {(item.price * cart[item.productId]).toFixed(2)}
                  </CardContent>
                </Card>
              ))}
            </Grid>
            <Typography>
              <br></br>Total: {total}
            </Typography>
          </Container>

          <NavLink to="checkout">
            <Button variant="contained" onClick={() => setIsDrawerOpen(false)}>
              Checkout
            </Button>
          </NavLink>
        </Box>
      </Drawer>
    </>
  );
}
