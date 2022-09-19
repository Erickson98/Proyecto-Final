import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { TextField, TextareaAutosize, Typography } from "@material-ui/core";

function Indicaciones() {
  return (
    <Plantilla title="Indicaciones">
      <div class="w-1/2 my-5">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Médico"
          variant="outlined"
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <textarea
        style={{ resize: "none" }}
        rows="10"
        cols="50"
        disabled
      ></textarea>

      <div class="w-1/2 my-5">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Total a Pagar"
          variant="outlined"
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <div class="flex ">
        <div class="flex-1 mr-96">
          <TextField
            id="standard-basic"
            label=""
            helperText="Firma del médico"
            InputProps={{
              readOnly: true
            }}
          />
        </div>
        <div class="flex-1">
          <TextField
            id="standard-basic"
            label=""
            helperText="No. de Record"
            InputProps={{
              readOnly: true
            }}
          />
        </div>
      </div>
    </Plantilla>
  );
}

export default Indicaciones;
