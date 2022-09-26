import Plantilla from "../../../helpers/Plantilla";
import MaterialTable from "material-table";
import { EsquemaAtributos } from "../../../EstadosUsuarios/MedicoGeneralTablaEsquema";
import { useState } from "react";

import "../../../s.css";
import { useEffect } from "react";
import { getData } from "../../../helpers/getData";
import { useNavigate } from "react-router-dom";

function MedicoGeneral() {
  const navigate = useNavigate();
  const { Columna } = EsquemaAtributos;
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getElement() {
      const element = await getData();
      console.log([element.data[0]]);
      setData([element.data[0]]);
    }
    getElement();
  }, []);
  const handleConsult = async (datos) => {
    localStorage.setItem("datos", JSON.stringify(datos));
    navigate("/IndicacionesMedico");
  };
  return (
    <Plantilla title="Médico general">
      <div class="mt-16 w-1/2">
        <MaterialTable
          columns={Columna}
          data={data}
          title={""}
          actions={[
            {
              icon: "edit",
              tooltip: "Atender Paciente",
              onClick: (event, rowData) => handleConsult(rowData)
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
