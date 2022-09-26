import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { TextField, Button, Typography } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { setTime } from "../../../EstadosUsuarios/EstadoConsultaPrivada";
import { useEffect } from "react";
import { useState } from "react";
import { ConsultaCerrada } from "../../../helpers/handleConsult";

var element = (element = JSON.parse(localStorage.getItem("datos")));
function IndicacionMedico() {
  useEffect(() => {}, []);

  const [change, setChange] = useState();
  const [elementStorage, setelementStorage] = useState();

  const medico = JSON.parse(localStorage.getItem("usuarioEmpleado"));
  const handleChange = (value) => {
    setChange(value.target.value);
    element.firma_medico = change;
    setelementStorage(element);
    console.log(change);
  };
  const handleEstado = (e) => {
    element.estado_del_paciente = e.target.value;
    setelementStorage(element);
  };
  const handleFecha = (e) => {
    element.fecha_proxima_cita = e.target.value;
    setelementStorage(element);
  };
  const handleText = (e) => {
    element.reseta = e.target.value;
    setelementStorage(element);
  };
  const handlePago = (e) => {
    element.pagoConsulta = e.target.value;
    setelementStorage(element);
  };
  element.nombre_medico = medico.data.message[0].nombre;
  return (
    <Plantilla title="Indicaciones">
      <div class="flex flex-row">
        <div class="w-1/2 my-5 flex-1">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Médico"
            variant="outlined"
            value={medico.data.message[0].nombre}
            InputProps={{
              readOnly: true
            }}
          />
        </div>
        <div class="w-1/2 my-5 mx-8 flex-1">
          <TextField
            label="Estado"
            variant="outlined"
            onChange={handleEstado}
          />
        </div>
        <div class="w-1/2 my-5  flex-1">
          <TextField
            fullWidth
            className="formElements"
            type="date"
            label="Fecha de nacimiento"
            id="Date"
            name="Date"
            variant="outlined"
            defaultValue={"0-0-0"}
            onChange={handleFecha}
            inputProps={{ min: setTime() }}
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
      </div>
      <textarea
        style={{ resize: "none" }}
        rows="10"
        cols="50"
        onChange={handleText}
      ></textarea>
      <div class="my-2 w-1/2 h-5">
        <div class="my-3">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Total a Pagar"
            variant="outlined"
            onChange={handlePago}
          />
        </div>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => ConsultaCerrada(elementStorage)}
        >
          <Typography class="  p-1.5">Cerrar Consulta</Typography>
        </Button>
        <div class="flex mt-5 ">
          <div class="flex-1  ">
            <TextField
              id="standard-basic"
              label=""
              helperText="Firma del médico"
              value={change}
              onChange={handleChange}
            />
          </div>
          <div class=" ml-10">
            <TextField
              id="standard-basic"
              label=""
              value={element.noRecord_id}
              helperText="No. de Record"
              InputProps={{
                readOnly: true
              }}
            />
          </div>
        </div>
      </div>
    </Plantilla>
  );
}
export default IndicacionMedico;
