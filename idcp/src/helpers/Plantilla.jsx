import { Button } from "@material-ui/core";
import Logo from "../assests/logoDerma.jpg";
import { useNavigate } from "react-router-dom";

function Plantilla({ title, children, icon }) {
  const navigate = useNavigate();
  const handleRoute = () => {
    const item = icon.type.type.render.displayName;
    switch (item) {
      case "HomeIcon":
        navigate("/Consultas");
        break;
      case "ArrowForwardIcon":
        navigate("/MenuPrincipal");
        break;
      default:
        break;
    }
  };
  return (
    <div class="flex h-screen w-screen justify-center items-center">
      <div class=" mx-1/2 h-3/4 w-3/5   bg-white rounded-lg">
        {icon && (
          <div class="absolute left-2/3 mt-8 ml-5 rounded-lg">
            <Button onClick={() => handleRoute()}>{icon}</Button>
          </div>
        )}
        <div class="flex flex-col justify-center items-center mt-6">
          <img src={Logo} alt="Logo" class="h-auto w-40" />
          <p class="text-4xl mt-3">{title}</p>
          <hr class="bg-stone-400 w-1/2 h-0.5" />

          {children}
        </div>
      </div>
    </div>
  );
}

export default Plantilla;
