import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { PagoAutorizado } from "../../../helpers/Pago";
import { useNavigate } from "react-router-dom";

function Autorizacion() {
  console.log(process.env.CONSULTA_PRIVADA);
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const valor =
    localStorage.getItem("TipoConsulta") === "privada"
      ? process.env.REACT_APP_CONSULTA_PRIVADA
      : process.env.REACT_APP_CONSULTA_PUBLICA;
  console.log(valor);
  const handleClick = () => {
    PagoAutorizado(valor);
    navigate("/MenuPrincipal");
  };
  return (
    <Plantilla title="Autorización" icon={<HomeIcon fontSize="large" />}>
      <div class="flex flex-col mt-20 w-96">
        <div class="my-5">
          <TextField
            fullWidth
            value={`${usuario.Nombre}`}
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            InputProps={{
              readOnly: true
            }}
          />
        </div>
        <div class="my-5">
          <TextField
            fullWidth
            value={valor}
            id="outlined-basic"
            label="Total a pagar"
            variant="outlined"
            InputProps={{
              readOnly: true
            }}
          ></TextField>
        </div>
        <div class="my-5">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              handleClick();
            }}
          >
            <Typography class="text-lg p-2">Pagar</Typography>
          </Button>
        </div>
      </div>
    </Plantilla>
  );
}

export default Autorizacion;
