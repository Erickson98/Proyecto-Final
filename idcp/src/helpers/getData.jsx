import Router from "../endpoints/GeneralClass";

export const getData = async (pago) => {
  const module = "getData";

  const element = await Router().get(module);
  console.log(element);
  return element;
};
