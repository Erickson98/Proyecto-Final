import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { TextField } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useEffect } from "react";
import { useState } from "react";
import { ConsultaTabla } from "../../../helpers/ConsultaTabla";

function EstadoDelPaciente() {
  const [estado, setEstado] = useState();
  const [fecha, setfecha] = useState();
  useEffect(() => {
    async function get() {
      const s = await ConsultaTabla();
      console.log(s);
      setEstado(s.message[0].estado_del_paciente);
      setfecha(s.message[0].fecha_proxima_cita);
      return s;
    }
    get();
  }, []);
  return (
    <Plantilla
      title="Estado del paciente"
      icon={<ArrowForwardIcon fontSize="large" />}
    >
      <div class="w-1/2 mt-20 my-5">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Estado del paciente"
          value={estado}
          defaultValue={" "}
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
          value={fecha}
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
