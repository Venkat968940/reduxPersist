import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const theme = createTheme();


export const MainTheme = makeStyles(()=>({
    root : root,
    subRoot : content
}))

export const HeaderTheme = makeStyles(() => ({
    root: headerRoot,
    menu : headerMenu
  }));

export const LoginTheme = makeStyles(()=>({
  root: root,
  centerAligned : centerAligned
}))
const centerAligned = {
    display: "flex",
    justifyContent : "center",
    alignItems:"center",
}

const root = {
    height:"100dvh",
    width:"100%"
}
const content={
    height:'calc(100% - 48px)',
    width:"100%",
    backgroundColor: theme.palette.grey[200]
}

const headerRoot = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  };
  
  const headerMenu = {
    display: "flex",
    alignItems: "center",
    height: "100%",
    gap:1
  }
