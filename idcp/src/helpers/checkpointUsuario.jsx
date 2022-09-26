import Router from "../endpoints/GeneralClass";
export const eventCheck = async (module, element) => {
  const profile = await Router().post(module, element);
  console.log(profile.data.message.length);
  const check = profile.data.message.length >= 1 ? "enable" : "diseable";
  console.log(check);
  localStorage.setItem("usuarioEmpleado", JSON.stringify(profile));
  return check;
};
