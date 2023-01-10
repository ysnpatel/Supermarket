import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CardActionArea from "@mui/material/CardActionArea";
import { NavLink } from "react-router-dom";

import Bakery from "../../assets/Bakery.png";
import CookingAndBaking from "../../assets/CookingAndBaking.png";
import DairyAndEggs from "../../assets/DairyAndEggs.png";
import Frozen from "../../assets/Frozen.png";
import FruitAndVege from "../../assets/FruitAndVege.png";
import Household from "../../assets/Household.png";
import MeatAndSeafood from "../../assets/MeatAndSeafood.png";
import SnacksAndSweets from "../../assets/SnacksAndSweets.png";
import Pantry from "../../assets/Pantry.png";
import MadeInNZ from "../../assets/MadeInNZ.png";

import { useContext } from "react";
import { CustomContext } from "../../context/Context";

export default function Home() {

  const { currentUserInfo, setCurrentUserInfo, filter, setFilter } = useContext(CustomContext);

  let arr1 = [
    Bakery,
    CookingAndBaking,
    DairyAndEggs,
    Frozen,
    FruitAndVege,
    Household,
    MeatAndSeafood,
    SnacksAndSweets,
    Pantry,
    MadeInNZ,
  ];

  let arr2 = [
    "Bakery",
    "CookingAndBaking",
    "DairyAndEggs",
    "Frozen",
    "Fruit%20&%20Vege",
    "Household",
    "MeatAndSeafood",
    "SnacksAndSweets",
    "Pantry",
    "MadeInNZ"
  ];

// First we map through arr1 to populate the cards with our saved images. 
// Then we use arr2 to fill in the path parameter of the NavLink to ensure user ends up on category page with correct category already selected

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {arr1.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <NavLink to= {`categories/${arr2[index]}`} > 
                <CardActionArea >
                  <CardMedia
                    component="img"
                    src={item}
                    // {item.Image}
                    alt="random"
                  />
                </CardActionArea>
                </NavLink>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
