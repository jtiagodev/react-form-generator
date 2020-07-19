import React, { useRef, createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { formGeneratorDefaultValues, useFormOptions } from "build-react-form/utils/defaults";
import BuildReactForm from "build-react-form";
import Tester from "./Tester";

function App() {
  return (
    <div className="App">
      <BuildReactForm.FormProvider>
        <BuildReactForm.FormGenerator id="testForm" {...formGeneratorDefaultValues} />
        <Tester />
      </BuildReactForm.FormProvider>
    </div>
  );
}

export default App;
