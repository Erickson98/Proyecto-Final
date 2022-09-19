import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import Button from "@material-ui/core/Button";
function Consulta() {
  return (
    <Plantilla title="Consultas">
      <div class="flex flex-row mt-10">
        <Button variant="outlined">Consulta Pública</Button>
        <div>
          <p class="mx-6 mt-1 text-xl">O</p>
        </div>
        <Button variant="outlined">Consulta Privada</Button>
      </div>
    </Plantilla>
  );
}

export default Consulta;
