import Logo from "../assests/logoDerma.jpg";

function Plantilla({ title, children }) {
  return (
    <div class="flex h-screen w-screen justify-center items-center">
      <div class=" mx-1/2 h-3/4 w-3/5   bg-white rounded-lg">
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
