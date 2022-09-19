import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { TextField } from "@material-ui/core";

function Farmacia() {
  return (
    <Plantilla title="Farmacia">
      <div class="w-1/2 mt-20 my-5">
        <TextField
          fullWidth
          id="outlined-basic"
          label="No de Record"
          variant="outlined"
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <div class="w-1/2  my-16">
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
    </Plantilla>
  );
}

export default Farmacia;
