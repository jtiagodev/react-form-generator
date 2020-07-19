import React from "react";
import { FormGlobalContextConsumer } from "./FormGenerator/context";

const Tester = (props) => {
  return (
    <FormGlobalContextConsumer>
      {(context) => {
        console.log(context);
        return (
          <button
            onClick={() => { 
              context.registeredForms.testForm.setValues(
              "text1",
              "hello test"
            );
          }}
          >
            CHANGE text1
          </button>
        );
      }}
    </FormGlobalContextConsumer>
  );
};

export default Tester;
