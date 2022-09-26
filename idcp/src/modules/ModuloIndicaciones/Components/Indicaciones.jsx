import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { TextField } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useEffect } from "react";
import { ConsultaTabla } from "../../../helpers/ConsultaTabla";
import { useState } from "react";

function Indicaciones() {
  const [nombre, setNombre] = useState();
  const [receta, setReceta] = useState();
  const [pago, setpago] = useState();
  const [noRecord, setnoRecord] = useState();
  const [firmaMedico, setfirmaMedico] = useState();
  useEffect(() => {
    async function get() {
      const s = await ConsultaTabla();
      console.log(s);
      setNombre(s.message[0].nombre_medico);
      setReceta(s.message[0].reseta);
      setpago(s.message[0].total_a_pagar);
      setnoRecord(s.message[0].noRecord_id);
      setfirmaMedico(s.message[0].firma_medico);
      console.log(nombre);
      return s;
    }
    get();
  }, []);
  return (
    <Plantilla
      title="Indicaciones"
      icon={<ArrowForwardIcon fontSize="large" />}
    >
      <div class="w-1/2 my-5">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Médico"
          variant="outlined"
          defaultValue={" "}
          value={nombre}
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <textarea
        style={{ resize: "none" }}
        rows="10"
        cols="50"
        value={receta}
        disabled
      ></textarea>

      <div class="w-1/2 my-5">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Total a Pagar"
          defaultValue={" "}
          value={pago}
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
            value={firmaMedico}
            helperText="Firma del médico"
            InputProps={{
              readOnly: true
            }}
          />
        </div>
        <div class="flex-1">
          <TextField
            id="standard-basic"
            value={noRecord}
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
