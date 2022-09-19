import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { TextField } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
function SalaDeEspera() {
  return (
    <Plantilla
      title="Sala de espera"
      icon={<ArrowForwardIcon fontSize="large" />}
    >
      <div class="w-1/2 mt-20 my-5">
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
      <div class="w-1/2  my-5">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Consultorio"
          variant="outlined"
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <div class="w-1/2  my-5">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Turno"
          variant="outlined"
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <div class="w-1/2  my-5">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Turno actual"
          variant="outlined"
          InputProps={{
            readOnly: true
          }}
        />
      </div>
    </Plantilla>
  );
}

export default SalaDeEspera;
