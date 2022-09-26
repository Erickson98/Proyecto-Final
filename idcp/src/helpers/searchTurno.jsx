import Router from "../endpoints/GeneralClass";

export const searchTurno = async () => {
  const module = "searchTurno";

  const element = await Router().get(module);
  console.log(element);
  return element;
};
