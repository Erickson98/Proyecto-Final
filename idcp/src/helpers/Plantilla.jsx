import Logo from "../assests/logoDerma.jpg" 
import {
  GoogleLoginButton,
  FacebookLoginButton ,
} from "react-social-login-buttons";
function Login() {
  return (
    <div class="flex h-screen w-screen justify-center items-center">
        
    <div class=" mx-1/2 h-3/4 w-3/5   bg-white rounded-lg">
      <div class="flex flex-col justify-center items-center mt-6">
        <img src={Logo} alt="Logo" />
      <p class="text-4xl mt-3">Iniciar sesión</p> 
      
      <hr class="bg-stone-400 w-1/2 h-0.5 mb-20" />
      <div  >
        
      <GoogleLoginButton                 
              />
      </div>

      <p class="mt-5 mb-5">O</p>
      <div  >
        
      <FacebookLoginButton                 
              />
      </div>
      </div>
      
    </div> 
    </div>
    
  );
}

export default Login;
