import Router from "../endpoints/GeneralClass";

export const ConsultaCerrada = async (element) => {
  const module = "ConsultaCerrada";
  console.log(element);
  await Router().post(module, element);
};
