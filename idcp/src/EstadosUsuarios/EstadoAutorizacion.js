import * as yup from "yup";

const FIRST_REQ = "Ingresar nombre.";

export const personSchema = yup.object().shape({
  Name: yup.string().required(FIRST_REQ)
});
