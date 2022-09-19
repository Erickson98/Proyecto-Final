import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import {
  GoogleLoginButton,
  FacebookLoginButton
} from "react-social-login-buttons";
function Login() {
  return (
    <Plantilla title="Iniciar sesión">
      <div class="mt-28">
        <GoogleLoginButton />
      </div>

      <p class="mt-5 mb-5">O</p>
      <div>
        <FacebookLoginButton />
      </div>
    </Plantilla>
  );
}

export default Login;
