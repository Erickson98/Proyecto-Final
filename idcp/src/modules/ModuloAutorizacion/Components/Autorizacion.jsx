import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";

function Autorizacion() {
  return (
    <Plantilla title="Autorización">
      <div class="flex flex-col mt-20 w-96">
        <div class="my-5">
          <TextField
            fullWidth
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
            id="outlined-basic"
            label="Total a pagar"
            variant="outlined"
            InputProps={{
              readOnly: true
            }}
          />
        </div>
        <div class="my-5">
          <Button fullWidth variant="contained" color="primary">
            <Typography class="text-lg p-2">Total a pagar</Typography>
          </Button>
        </div>
      </div>
    </Plantilla>
  );
}

export default Autorizacion;
