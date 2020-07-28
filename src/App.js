import React, { useRef, createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormGenerator, { FormProvider } from "build-react-form";
import TestContext from "./utils/TestContext";
import { FormInputs as ClaimsListDataFormInputs, sections as ClaimsListDataSections } from "./utils/ClaimListData";
import { FormInputs as ClaimListFilterFormInputs } from "./utils/ClaimsListFilter";

function App() {
  return (
    <div className="App">
      <FormProvider>
        <FormGenerator formId="claimsListFilter" inputOptions={ClaimListFilterFormInputs} />
        <FormGenerator formId="claimsListData" sections={ClaimsListDataSections} inputOptions={ClaimsListDataFormInputs} />
        <TestContext />
      </FormProvider>
    </div>
  );
};

export default App;
