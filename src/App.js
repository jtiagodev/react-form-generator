import React, { useRef, createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormGenerator from "build-react-form/dist/FormGenerator/FormGenerator";
import { formGeneratorDefaultValues, useFormOptions } from "build-react-form/dist/utils/defaults";
import FormProvider from "build-react-form/dist/FormGenerator/FormProvider";
import Tester from "./Tester";

function App() {
  return (
    <div className="App">
      <FormProvider>
        <FormGenerator id="testForm" {...formGeneratorDefaultValues} />
        <Tester />
      </FormProvider>
    </div>
  );
}

export default App;
