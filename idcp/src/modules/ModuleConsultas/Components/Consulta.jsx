import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
function Consulta() {
  const navigate = useNavigate();

  return (
    <Plantilla title="Consultas">
      <div class="flex flex-row mt-32 h-12">
        <Button onClick={() => navigate("/ConsultaPublica")} variant="outlined">
          {" "}
          Consulta Pública
        </Button>
        <div class="mx-10">
          <p class="mx-6 mt-2 text-xl">O</p>
        </div>
        <Button onClick={() => navigate("/ConsultaPrivada")} variant="outlined">
          Consulta Privada
        </Button>
      </div>
    </Plantilla>
  );
}

export default Consulta;
