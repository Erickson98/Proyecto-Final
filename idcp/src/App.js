import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./Pages/Login";
import Consulta from "./modules/ModuleConsultas/Components/Consulta";
import ConsultaPrivadasPage from "./Pages/ConsultasPrivadas";
import ConsultaPublicaPage from "./Pages/ConsultasPublicas";
import AutorizacionPage from "./Pages/Autorizacion";
import MenuPrincipalPage from "./Pages/MenuPrincipal";
import SalaDeEsperaPage from "./Pages/SalaDeEspera";
import IndicacionesPage from "./Pages/Indicaciones";
import EstadoDelPacientePage from "./Pages/EstadoDelPaciente";
import FarmaciaPage from "./Pages/Farmacia";
import MedicoGeneralPage from "./Pages/MedicoGeneral";
import UsuarioPage from "./Pages/Usuario";
import IndicacionMedicoPage from "./Pages/IndicacionesMedico";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/Login"} />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Consultas" element={<Consulta />} />
        <Route path="/ConsultaPublica" element={<ConsultaPublicaPage />} />
        <Route path="/ConsultaPrivada" element={<ConsultaPrivadasPage />} />
        <Route path="/Autorizacion" element={<AutorizacionPage />} />
        <Route path="/MenuPrincipal" element={<MenuPrincipalPage />} />
        <Route path="/SalaDeEspera" element={<SalaDeEsperaPage />} />
        <Route path="/Indicaciones" element={<IndicacionesPage />} />
        <Route path="/EstadoDelPaciente" element={<EstadoDelPacientePage />} />
        <Route path="/Farmacia" element={<FarmaciaPage />} />
        <Route path="/MedicoGeneral" element={<MedicoGeneralPage />} />
        <Route path="/IndicacionesMedico" element={<IndicacionMedicoPage />} />
        <Route path="/Usuario" element={<UsuarioPage />} />
      </Routes>
    </div>
  );
}
export default App;
