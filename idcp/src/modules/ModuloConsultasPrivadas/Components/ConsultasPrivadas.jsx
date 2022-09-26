import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import personEntity, {
  personSchema
} from "../../../EstadosUsuarios/EstadoConsultaPrivada";
import HomeIcon from "@material-ui/icons/Home";
import { eventSubmit } from "../../../helpers/event.endpoint";

function ConsultaPrivadas() {
  const navigate = useNavigate();
  const module = "ConsultaPrivada";
  return (
    <Plantilla title="Consultas Privadas" icon={<HomeIcon fontSize="large" />}>
      <Formik
        initialValues={{ ...personEntity }}
        validationSchema={personSchema}
        onSubmit={(values, { resetForm }) => {
          eventSubmit(module, values, "privada");
          resetForm();
        }}
      >
        {() => (
          <Form class="mt-10 w-96">
            <Field
              fullWidth
              type="text"
              label="Nombre"
              id="Nombre"
              name="Nombre"
              variant="outlined"
              as={TextField}
            />

            <div className="errorMessage">
              <ErrorMessage name="Nombre" />
            </div>
            <div class="my-4">
              <Field
                fullWidth
                className="formElements"
                type="text"
                label="Apellido"
                id="Apellido"
                name="Apellido"
                variant="outlined"
                as={TextField}
              />
            </div>
            <div className="errorMessage">
              <ErrorMessage name="Apellido" />
            </div>
            <div class="my-4">
              <Field
                fullWidth
                className="formElements"
                type="text"
                label="Dirección particular"
                id="Direccion"
                name="Direccion"
                variant="outlined"
                as={TextField}
              />
            </div>
            <div className="errorMessage">
              <ErrorMessage name="Direccion" />
            </div>
            <div class="my-5  ">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
                onClick={() => {
                  setTimeout(() => {
                    navigate("/Autorizacion");
                  }, 100);
                }}
              >
                <Typography class="text-lg p-1.5">Enviar</Typography>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Plantilla>
  );
}

export default ConsultaPrivadas;
