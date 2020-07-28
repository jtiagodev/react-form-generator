import React, { useContext }  from "react";
import { FormGlobalContext } from "build-react-form";

  /**
      setValues: (name, value) => setValue(name, value),
      getValues: (names) => getValues(names),
      getErrors: () => errors,
      submitForm: (fn) => handleSubmit(fn),
      resetForm: (names) => reset(names),
      setError: (name, error) => setError(name, error),
      clearErrors: () => clearErrors(),
      triggerValidation: () => trigger(),
      formStateInfo: () => formState
     */

const Tester = (props) => {
  const globalCtx = useContext(FormGlobalContext);

  return (
  
          <button
            onClick={() => { 
              globalCtx.registeredForms['claimsListData'].setValues(
              "NIF",
              "123123123"
            );
          }}
          >
            CHANGE text1
          </button>
     
  );
};

export default Tester;
