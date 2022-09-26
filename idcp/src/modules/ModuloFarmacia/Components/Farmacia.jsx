import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { TextField } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { ConsultaTabla } from "../../../helpers/ConsultaTabla";
import { useState } from "react";
import { useEffect } from "react";

function Farmacia() {
  const [noRecord, setnoRecord] = useState();
  const [pago, setPago] = useState();
  useEffect(() => {
    async function get() {
      const s = await ConsultaTabla();
      console.log(s);
      setnoRecord(s.message[0].noRecord_id);
      setPago(s.message[0].total_a_pagar);
      return s;
    }
    get();
  }, []);
  return (
    <Plantilla title="Farmacia" icon={<ArrowForwardIcon fontSize="large" />}>
      <div class="w-1/2 mt-20 my-5">
        <TextField
          fullWidth
          id="outlined-basic"
          label="No de Record"
          variant="outlined"
          value={noRecord}
          defaultValue={" "}
          InputProps={{
            readOnly: true
          }}
        />
      </div>
      <div class="w-1/2  my-16">
        <TextField
          fullWidth
          id="outlined-basic"
          value={pago}
          label="Total a Pagar"
          defaultValue={" "}
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
