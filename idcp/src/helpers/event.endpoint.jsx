import Router from "../endpoints/GeneralClass";
export const eventSubmit = async (module, element, tipoConsulta) => {
  console.log(element);
  //esto deberia estar en login
  const profile = await Router().get("auth/login/success", element);
  element.email = profile.message.email;
  await Router().post(module, element);
  if (!localStorage.getItem("profile")) {
    localStorage.setItem("profile", JSON.stringify(profile));
  }
  //////////////////////////////

  localStorage.setItem("usuario", JSON.stringify(element));
  localStorage.setItem("TipoConsulta", tipoConsulta);
  console.log(localStorage.getItem("usuario"));
};
