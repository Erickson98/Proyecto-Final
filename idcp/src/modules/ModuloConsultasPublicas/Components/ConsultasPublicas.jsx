import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

import personEntity, {
  personSchema,
  setTime
} from "../../../EstadosUsuarios/EstadoConsultaPrivada";

function ConsultaPublicas() {
  const navigate = useNavigate();
  return (
    <Plantilla title="Consultas Públicas" icon={<HomeIcon fontSize="large" />}>
      <Formik
        initialValues={{ ...personEntity }}
        validationSchema={personSchema}
        onSubmit={(values, { resetForm }) => {
          // eventSubmitAdd(values);
          resetForm();
        }}
      >
        {() => (
          <Form class="mt-10 h-0 w-96">
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
              <Field
                fullWidth
                className="formElements"
                type="text"
                label="Seguro"
                id="Seguro"
                name="Seguro"
                variant="outlined"
                as={TextField}
              />
            </div>
            <div className="errorMessage">
              <ErrorMessage name="Address" />
            </div>
            <div>
              <div className="btnSubmitContainer">
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={() => navigate("/Autorizacion")}
                >
                  <Typography class="text-lg p-1.5">Enviar</Typography>
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Plantilla>
  );
}

export default ConsultaPublicas;
