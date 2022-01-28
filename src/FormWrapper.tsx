import { Formik } from "formik";
import * as Yup from "yup";
import type { SchemaOf } from "yup";
import SignupForm, { Values } from "./SignupForm";

const schema: SchemaOf<Values> = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const FormWrapper = (): JSX.Element => {
  const initialValues: Values = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const handleSubmit = (values: Values) => {
    console.log("submitted " + JSON.stringify(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <SignupForm />
    </Formik>
  );
};

export default FormWrapper;
