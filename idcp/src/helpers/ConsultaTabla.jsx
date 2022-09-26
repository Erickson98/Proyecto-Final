import Router from "../endpoints/GeneralClass";
export const ConsultaTabla = async () => {
  const module = "ConsultaTabla";
  const profile = await Router().get(module);
  return profile;
};
