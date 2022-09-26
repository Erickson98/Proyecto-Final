import * as yup from "yup";
const FIRST_REQ = "Ingresar Usuario.";
const SECOND_REQ = "Ingresar Password.";
export let personEntity = {
  Usuario: "",
  Password: ""
};

export const personSchema = yup.object().shape({
  Usuario: yup.string().required(FIRST_REQ),
  Password: yup.string().required(SECOND_REQ)
});
