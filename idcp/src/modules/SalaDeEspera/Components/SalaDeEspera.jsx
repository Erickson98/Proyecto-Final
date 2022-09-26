import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { TextField } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useState } from "react";
import { ConsultaTabla } from "../../../helpers/ConsultaTabla";
import { useEffect } from "react";
import { searchTurno } from "../../../helpers/searchTurno";
function SalaDeEspera() {
  const [turno, setTurno] = useState();
  const [turnoGlobal, setTurnoGlobal] = useState();
  useEffect(() => {
    async function get() {
      const s = await ConsultaTabla();
      let y = await searchTurno();
      console.log(y);
      if (y.message[0].turno === 0) {
        console.log("ssasas");
        y.message[0].turno = 1;
      }
      console.log(s);
      setTurno(s.message[0].turno);
      setTurnoGlobal(y.message[0].turno);
      return s;
    }
    get();
  }, []);
  return (
    <Plantilla
      title="Sala de espera"
      icon={<ArrowForwardIcon fontSize="large" />}
    >
      <div class="w-1/2  my-20">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Turno"
          defaultValue={" "}
          value={turno}
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
          defaultValue={" "}
          value={turnoGlobal}
          InputProps={{
            readOnly: true
          }}
        />
      </div>
    </Plantilla>
  );
}

export default SalaDeEspera;
