import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function LoginEmpleado() {
  const navigate = useNavigate();

  const handlerOnClick = () => {
    navigate("/MedicoGeneral");
  };
  return (
    <Plantilla title="Iniciar sesión">
      <div class="mt-28">
        <Button onClick={handlerOnClick} />
      </div>

      <p class="mt-5 mb-5">O</p>
      <div>
        <Button onClick={handlerOnClick} />
      </div>
    </Plantilla>
  );
}

export default LoginEmpleado;
