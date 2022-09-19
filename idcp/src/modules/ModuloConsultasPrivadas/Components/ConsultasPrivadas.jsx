import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import personEntity, {
  personSchema,
  setTime
} from "../../../EstadosUsuarios/EstadoConsultaPrivada";

function ConsultaPrivadas() {
  return (
    <Plantilla title="Consultas Privadas">
      <Formik
        initialValues={{ ...personEntity }}
        validationSchema={personSchema}
        onSubmit={(values, { resetForm }) => {
          // eventSubmitAdd(values);
          resetForm();
        }}
      >
        {() => (
          <Form class=" w-96">
            <Field
              fullWidth
              type="text"
              label="Nombre"
              id="Name"
              name="Name"
              variant="outlined"
              as={TextField}
            />

            <div className="errorMessage">
              <ErrorMessage name="Name" />
            </div>
            <div class="my-4">
              <Field
                fullWidth
                className="formElements"
                type="text"
                label="Apellido"
                id="LastName"
                name="LastName"
                variant="outlined"
                as={TextField}
              />
            </div>
            <div className="errorMessage">
              <ErrorMessage name="LastName" />
            </div>
            <div class="my-4">
              <Field
                fullWidth
                className="formElements"
                type="text"
                label="Dirección particular"
                id="Address"
                name="Address"
                variant="outlined"
                as={TextField}
              />
            </div>
            <div className="errorMessage">
              <ErrorMessage name="Address" />
            </div>
            <div class="my-4">
              <div className="btnSubmitContainer">
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Enviar
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Plantilla>
  );
}

export default ConsultaPrivadas;
