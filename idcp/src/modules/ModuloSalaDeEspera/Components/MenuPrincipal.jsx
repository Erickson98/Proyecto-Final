import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

function MenuPrincipal() {
  return (
    <Plantilla title="Menu Principal">
      <div class="flex flex-row w-full my-28 ">
        <div class="flex-1 mx-10">
          <Button fullWidth variant="contained" color="primary">
            <Typography class="text-lg p-2">Sala de espera</Typography>
          </Button>
        </div>
        <div class="flex-1 mx-10">
          <Button fullWidth variant="contained" color="primary">
            <Typography class="text-lg p-2">Indicaciones</Typography>
          </Button>
        </div>
      </div>
      <div class="flex flex-row w-full ">
        <div class="w-full  mx-10">
          <Button fullWidth variant="contained" color="primary">
            <Typography class="text-lg p-2">Estado del paciente</Typography>
          </Button>
        </div>
        <div class="w-full mx-10">
          <Button fullWidth variant="contained" color="primary">
            <Typography class="text-lg p-2">Farmacia</Typography>
          </Button>
        </div>
      </div>
    </Plantilla>
  );
}

export default MenuPrincipal;
