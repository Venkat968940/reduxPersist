import { Avatar, Button, Card, Grid2 } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../components/Hooks/Reducers/User";
import {
  CustomPassword,
  CustomTextField,
} from "../../../components/Utils/CustomInput";
import { LoginValidation } from "../../../components/Validation/ValidationSchema";
import { LoginTheme } from "../../../styles";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = LoginTheme();

  const formik = useFormik({
    initialValues: {
      email: "admin@gmail.com",
      password: "admin@123",
    },
    validationSchema: LoginValidation,
    onSubmit: handleLogin,
  });

  function handleLogin() {
    const userData = {
      email: formik.values.email,
      token: "dummy-token",
      name: "Logan",
    };
    dispatch(login(userData));
    navigate("/dashboard");
  }
  return (
    <Grid2
      className={`${classes.root} ${classes.centerAligned}`}
      sx={{ background: "#E1E8ED" }}
    >
      <Grid2 component={Card} sx={{ padding: 3 }}>
        <Avatar sx={{ margin: "0 auto", marginBottom: 2 }} />
        <CustomTextField
          formik={formik}
          id="email"
          multiple={false}
          placeholder="Enter email"
          title="Email Address"
          required={true}
        />
        <CustomPassword formik={formik} id="password" required={true} />
        <Button
          fullWidth
          variant="contained"
          onClick={formik.handleSubmit}
          sx={{ marginTop: 2 }}
        >
          Login
        </Button>
      </Grid2>
    </Grid2>
  );
};
