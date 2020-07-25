import React from "react";
import BuildReactForm from "build-react-form";

const Tester = (props) => {
  return (
    <BuildReactForm.FormGlobalContextConsumer>
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
    </BuildReactForm.FormGlobalContextConsumer>
  );
};

export default Tester;
