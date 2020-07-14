import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormGenerator from './FormGenerator/FormGenerator';
import { formGeneratorDefaultValues, useFormOptions } from "./utils/defaults";

function App() {
  return (
    <div className="App">
     <FormGenerator {...formGeneratorDefaultValues} />
    </div>
  );
}

export default App;
