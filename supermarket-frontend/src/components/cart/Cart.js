import React from 'react';
import { useEffect, useState, useContext } from "react";
import { CustomContext } from '../../context/Context.js';
import axios from "axios";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton } from '@mui/material';
import AdbIcon from "@mui/icons-material/Adb";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";



export default function Cart() {
  const [card, setCard] = useState([]);
  const [listOfItems, setListOfItems ] = useState([])
  const { authenticated, currentUserInfo, cart, setCart, isDrawerOpen, setIsDrawerOpen } = useContext(CustomContext);


  useEffect(() => {
   

      fetchAllCartItems()
  }, [cart]);
  async function fetchAllCartItems(){
    let keys = Object.keys(cart)
    setListOfItems([])
    for(let i = 0; i < keys.length; i++){
      //console.log("Key: " + key + " Value:" + cart[key])
      //const Object.keys(cart))
      console.log("current key:" + keys[i])
      axios
      .get(`http://localhost:8080/products/getOneProduct/${keys[i]}`)
      .then((res) => {
        console.log(res.data)
        setListOfItems(previousArray =>[...previousArray, res.data[0]]);
  
      })
      .catch((err) => {
        console.log(err);
      });

    }
  }
  

//   console.log(cart)

// [{productID: 101},{productID: 102},{productID: 103}]


// {101:3, 102:4}



  return (

    <>
    <Drawer anchor='right' open={isDrawerOpen} onClose= {() => setIsDrawerOpen(false)}>
      <Box p={2} width='400px' textAlign='center' role='presentation'>
        <Typography variant='h6' component='div'>
          Cart {JSON.stringify(cart)}
        </Typography>
        {/* <Typography variant='h6' component='div'>
          Data: {JSON.stringify(listOfItems)}
        </Typography> */}
        <Container sx={{ py: 8 }} maxWidth="md">
        <Grid item xs={12} sm={6} md={4}>          
        {listOfItems.map((item, index) => (
              <Card key={index}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent>{item.productName}{cart[item.productId]}</CardContent>
              </Card>
          ))}
        </Grid>
      </Container>
        
        <NavLink to="checkout">
          <Button variant="contained" onClick={() => setIsDrawerOpen(false)}>Checkout</Button>
        </NavLink>

      </Box>
    </Drawer>
    </>
  )
}
