import * as Yup from "yup";

const email = Yup.string().email().required();

const password = Yup.string().min(8).required();

export const LoginValidation = Yup.object({
  email: email,
  password: password,
});
