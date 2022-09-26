import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import {
  GoogleLoginButton,
  FacebookLoginButton
} from "react-social-login-buttons";
import succesLoginGoogle from "./auth/google";
import succesLoginFacebook from "./auth/facebook";
function Login() {
  return (
    <Plantilla title="Iniciar sesión">
      <div class="mt-28">
        <GoogleLoginButton onClick={succesLoginGoogle} />
      </div>

      <p class="mt-5 mb-5">O</p>
      <div>
        <FacebookLoginButton onClick={succesLoginFacebook} />
      </div>
    </Plantilla>
  );
}

export default Login;
