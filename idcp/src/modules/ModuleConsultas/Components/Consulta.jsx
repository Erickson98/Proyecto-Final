import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { Button, Typography } from "@material-ui/core";
function Consulta() {
  return (
    <Plantilla title="Consultas">
      <div class="flex flex-row mt-32 h-12">
        <Button variant="outlined"> Consulta Pública</Button>
        <div class="mx-10">
          <p class="mx-6 mt-2 text-xl">O</p>
        </div>
        <Button variant="outlined">Consulta Privada</Button>
      </div>
    </Plantilla>
  );
}

export default Consulta;
