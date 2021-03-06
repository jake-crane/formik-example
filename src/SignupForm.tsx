import { Form, useFormikContext } from "formik";
import { Field } from "formik";
import Addresses from "./Addresses";

interface Address {
  streetAddress1: string;
  streetAddress2?: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface Values {
  firstName: string;
  lastName: string;
  email: string;
  addresses: Address[];
}

const SignupForm = () => {
  const { isValid, isSubmitting, dirty } = useFormikContext<Values>();

  return (
    <Form>
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" placeholder="John" />

      <label htmlFor="lastName">Last Name</label>
      <Field id="lastName" name="lastName" placeholder="Doe" />

      <label htmlFor="email">Email</label>
      <Field id="email" name="email" placeholder="john@acme.com" type="email" />

      <Addresses />

      <button type="submit" disabled={!dirty || !isValid || isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

export default SignupForm;
