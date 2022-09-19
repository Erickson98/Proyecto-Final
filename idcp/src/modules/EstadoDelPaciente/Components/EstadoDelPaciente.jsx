import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { TextField, TextareaAutosize, Typography } from "@material-ui/core";

function EstadoDelPaciente() {
  return (
    <Plantilla title="Estado del paciente">
      <div class="w-1/2 mt-20 my-5">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Estado del paciente"
          variant="outlined"
          InputProps={{
            readOnly: true
          }}
        />
      </div>

      <div class="w-1/2 my-16">
        <TextField
          fullWidth
          className="formElements"
          type="date"
          label="Fecha de nacimiento"
          id="Date"
          name="Date"
          variant="outlined"
          defaultValue={"0-0-0"}
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            readOnly: true
          }}
        />
      </div>
    </Plantilla>
  );
}

export default EstadoDelPaciente;
