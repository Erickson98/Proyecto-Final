import * as yup from "yup";

const FIRST_REQ = "Ingresar nombre.";
const SECOND_REQ = "Ingresar Apellido.";
// const THIRD_REQ = "Ingresar la fecha.";
// const FOURTH_REQ = "Ingresar Cédula.";
const FIFTH_REQ = "Ingresar la dirección.";
export const setTime = () => {
  const day =
    new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate();
  const month =
    new Date().getMonth() < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  return year + "-" + month + "-" + day;
};

let personEntity = {
  Nombre: "",
  Apellido: "",
  Fecha: setTime(),
  Direccion: ""
};

export const personSchema = yup.object().shape({
  Nombre: yup.string().required(FIRST_REQ),
  Apellido: yup.string().required(SECOND_REQ),
  Direccion: yup.string().required(FIFTH_REQ)
});
export default personEntity;
