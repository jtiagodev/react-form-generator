import React, { useRef, createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import BRF from "build-react-form";
import Tester from "./Tester";
import { demoFormInputOptions } from "./utils/demo";

function App() {
  return (
    <div className="App">
      <BRF.FormProvider>
        <BRF.FormGenerator id="testForm" inputOptions={demoFormInputOptions} {...BRF.formGeneratorDefaultValues} />
        <Tester />
      </BRF.FormProvider>
    </div>
  );
}

export default App;
