import React, { useRef, createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormGenerator from "./FormGenerator/FormGenerator";
import { formGeneratorDefaultValues, useFormOptions } from "./utils/defaults";
import FormProvider from "./FormGenerator/FormProvider";
import { FormGlobalContextConsumer } from "./FormGenerator/context";
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
