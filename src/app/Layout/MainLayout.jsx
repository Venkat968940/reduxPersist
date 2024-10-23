import { Grid2, Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { MainTheme } from "../../styles";
import { Header } from "../Header/Header";

export const MainLayout = () => {
  const classes = MainTheme();
  return (
    <Grid2 className={classes.root}>
      <Header />
      <Toolbar variant="dense"/>
      <Grid2 className={classes.subRoot}>
       <Grid2 sx={{ maxWidth:1560, margin:'0 auto', height:"100%", padding:1}}> <Outlet /></Grid2>
      </Grid2>
    </Grid2>
  );
};
