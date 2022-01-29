import { Field, FieldArray, useFormikContext } from "formik";
import { Values } from "./SignupForm";

const Addresses = () => {
  const { values } = useFormikContext<Values>();
  return (
    <FieldArray
      name="addresses"
      render={(arrayHelpers) => {
        return (
          <div>
            {values.addresses.map((_address, index) => {
              return (
                <div key={index}>
                  <label htmlFor="streetAddress1">Line 1</label>
                  <Field
                    id="streetAddress1"
                    name={`addresses.${index}.streetAddress1`}
                  />
                  <label htmlFor="streetAddress2">Line 2</label>
                  <Field
                    id="streetAddress2"
                    name={`addresses.${index}.streetAddress2`}
                  />
                  <label htmlFor="city">City</label>
                  <Field id="city" name={`addresses.${index}.city`} />
                  <label htmlFor="state">State</label>
                  <Field id="state" name={`addresses.${index}.state`} />
                  <label htmlFor="postalCode">Postal Code</label>
                  <Field id="state" name={`addresses.${index}.postalCode`} />
                  <button
                    type="button"
                    onClick={() => {
                      if (values.addresses.length > 1) {
                        arrayHelpers.remove(index);
                      }
                    }}
                  >
                    -
                  </button>
                </div>
              );
            })}
            <button
              type="button"
              onClick={() =>
                arrayHelpers.push({
                  streetAddress1: "",
                  streetAddress2: "",
                  city: "",
                  state: "",
                })
              }
            >
              +
            </button>
          </div>
        );
      }}
    />
  );
};
export default Addresses;
