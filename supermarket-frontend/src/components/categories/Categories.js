import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CustomContext } from "../../context/Context.js";
import { useParams } from "react-router-dom";
import { ButtonGroup } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {
  const [card, setCard] = useState([]);
  const { cart, setCart, filter, setFilter } = useContext(CustomContext);

  const { category } = useParams(); //necessary to use categories as path parameters, explained in Home component

  //GET all products
  useEffect(() => {
    axios
      .get("http://localhost:8080/products/getallproducts")
      .then((res) => {
        setCard(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Filter products by category
  const filterProduct = (cat) => {
    const updatedList = card.filter((x) => x.mainCategory === cat);
    console.log(filterProduct);
    setFilter(updatedList);
  };

  useEffect(() => {
    filterProduct(category);
  }, [card]);

  // Show products and button group
  const ShowProducts = () => {
    return (
      <>
        <div>
          <ButtonGroup  sx={{display:"flex", justifyContent: "center"}} aria-label="outlined button group" size="large">
            <Button
              onClick={() => {
                filterProduct("Bakery");
              }}
            >
              Bakery
            </Button>
            <Button
              onClick={() => {
                filterProduct("Cooking");
              }}
            >
              Cooking
            </Button>
            <Button
              onClick={() => {
                filterProduct("Dairy");
              }}
            >
              Dairy
            </Button>{" "}
            <Button
              onClick={() => {
                filterProduct("Frozen");
              }}
            >
              Frozen
            </Button>
            <Button
              onClick={() => {
                filterProduct("Fruit & Vege");
              }}
            >
              Fruit & Vege
            </Button>
            <Button
              onClick={() => {
                filterProduct("Household");
              }}
            >
              Household
            </Button>
            <Button
              onClick={() => {
                filterProduct("Meat");
              }}
            >
              Meat
            </Button>
            <Button
              onClick={() => {
                filterProduct("Snacks");
              }}
            >
              Snacks
            </Button>
            <Button
              onClick={() => {
                filterProduct("Pantry");
              }}
            >
              Pantry
            </Button>
          </ButtonGroup>
        </div>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {filter.length === 0 ? (
              <h1> Loading... </h1> //note only 3 categories currently populated with images. The rest will display this for now.
            ) : (
              filter.map((item, index) => {
                return (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card
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
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.productName}
                        </Typography>
                        <Typography>{item.price}</Typography>
                      </CardContent>
                      <CardActions
                        sx={{ display: "flex", justifyContent: "space-around" }}
                      >
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => subtractProduct(item.productId)}
                        >
                          -
                        </Button>
                        <h1>{cart[item.productId] || 0}</h1>
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => addProduct(item.productId)}
                        >
                          +
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })
            )}
          </Grid>
        </Container>
      </>
    );
  };

  //add product to cart
  const addProduct = (itemId) => {
    let currentQuantity = cart[itemId]; 
    if (currentQuantity === undefined) {
      currentQuantity = 1;
    } else {
      currentQuantity++;
    }
    const newItem = { [itemId]: currentQuantity };
    setCart((cart) => ({ ...cart, ...newItem }));
  };

  //subtract product from cart
  const subtractProduct = (itemId) => {
    let currentQuantity = cart[itemId];
    if (currentQuantity === undefined) {
      currentQuantity = undefined;
    } else if (currentQuantity <= 0) {
      currentQuantity = 0; 
    } else {
      currentQuantity--;
    }
    const newItem = { [itemId]: currentQuantity };
    setCart((cart) => ({ ...cart, ...newItem }));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Groceries
            </Typography>
          </Container>
        </Box>
        <ShowProducts />
      </main>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Footer Coming Soon!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
