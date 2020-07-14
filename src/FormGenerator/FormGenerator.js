import React from "react";
import { formGeneratorPropTypesSchema } from "../utils/schemas";
import FormGeneratorContextWrapper from "./FormGeneratorContextWrapper";
import FormGeneratorRender from "./FormGeneratorRender";

const FormGenerator = (props) => {
  return (
    <FormGeneratorContextWrapper {...props}>
      <FormGeneratorRender />
    </FormGeneratorContextWrapper>
  );
};

FormGenerator.propTypes = formGeneratorPropTypesSchema;
export default FormGenerator;

FormGenerator.whyDidYouRender = true;
