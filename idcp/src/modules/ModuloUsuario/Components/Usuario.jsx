import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { TextField, Button } from "@material-ui/core";

function Farmacia() {
  return (
    <Plantilla title="Login">
      <div class="w-1/2 mt-20 my-5">
        <TextField
          fullWidth
          id="outlined-basic"
          label="No de Record"
          variant="outlined"
        />
      </div>
      <div class="w-1/2  my-16">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Total a Pagar"
          variant="outlined"
        />
      </div>
      <div className="btnSubmitContainer">
        <Button fullWidth variant="contained" size="large" color="primary">
          Iniciar sesion
        </Button>
      </div>
    </Plantilla>
  );
}

export default Farmacia;
