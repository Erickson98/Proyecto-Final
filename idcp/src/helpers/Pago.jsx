import Router from "../endpoints/GeneralClass";

export const PagoAutorizado = async (pago) => {
  const module = "PagoAutorizado";
  const element = {
    totalPago: pago,
    autorizacionPago: "autorizado",
    estadoPaciente: "abierto"
  };
  console.log(element);
  await Router().getUpdate(module, element);
};
