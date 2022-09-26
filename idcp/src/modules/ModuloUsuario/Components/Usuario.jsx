import Plantilla from "../../../helpers/Plantilla";
import "../../../s.css";
import { TextField, Button, Typography } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import {
  personEntity,
  personSchema
} from "../../../EstadosUsuarios/EstadoUsuarioLogin";
import { eventCheck } from "../../../helpers/checkpointUsuario";

function Usuario() {
  const navigate = useNavigate();
  const module = "auth/login/searchUsuario";
  const handleSubmit = async (module, values) => {
    const result = await eventCheck(module, values);
    console.log(result);
    return result === "enable"
      ? navigate("/MedicoGeneral")
      : alert("Usuario no encontrado");
  };
  return (
    <Plantilla title="Login">
      <Formik
        initialValues={{ ...personEntity }}
        validationSchema={personSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(module, values);
          // resetForm();
        }}
      >
        {() => (
          <Form class="mt-10 w-1/2">
            <div class="w-full mt-20 my-5">
              <Field
                fullWidth
                type="text"
                label="Usuario"
                id="Usuario"
                name="Usuario"
                variant="outlined"
                as={TextField}
              />
            </div>
            <div className="errorMessage">
              <ErrorMessage name="Usuario" />
            </div>
            <div class="my-10">
              <Field
                fullWidth
                className="formElements"
                type="text"
                label="Password"
                id="Password"
                name="Password"
                variant="outlined"
                as={TextField}
              />
            </div>
            <div className="errorMessage">
              <ErrorMessage name="Password" />
            </div>

            <div class="my-5  ">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
              >
                <Typography class="text-lg p-1.5">Iniciar sesion</Typography>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Plantilla>
  );
}

export default Usuario;
