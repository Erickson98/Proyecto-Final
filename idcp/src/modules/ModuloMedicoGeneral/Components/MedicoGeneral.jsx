import Plantilla from "../../../helpers/Plantilla";
import MaterialTable from "material-table";
import { EsquemaAtributos } from "../../../EstadosUsuarios/MedicoGeneralTablaEsquema";
import { useState } from "react";

import "../../../s.css";

function MedicoGeneral() {
  const { Columna } = EsquemaAtributos;
  const [data, setData] = useState();
  let s = [{ Nombre: "d", Estado: "d" }];
  return (
    <Plantilla title="Médico general">
      <div class="mt-16 w-1/2">
        <MaterialTable
          columns={Columna}
          data={s}
          title={""}
          actions={[
            {
              icon: "edit",
              tooltip: "Editar elemento",
              onClick: (event, rowData) => console.log("d")
            }
          ]}
          options={{ actionsColumnIndex: 3 }}
          localization={{
            header: {
              actions: "Accion"
            }
          }}
        />
      </div>
    </Plantilla>
  );
}

export default MedicoGeneral;
