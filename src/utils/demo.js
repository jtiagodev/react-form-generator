import { RegisteredInputTypesEnum, RefDataMethodsEnum } from "./enums";
import { sampleSelectOptions, countries } from './demo-lov';
import { v4 as uuidv4 } from 'uuid';

export const AutoCompleteInputBuilder = (label = uuidv4(), dependencies = [], disableWhileNotFilled = []) => {
  return {
  inputLabel: label,
  labelText: "Auto Complete Test",
  inputType: RegisteredInputTypesEnum.MUI_AUTOCOMPLETE,
  dependencies: dependencies,
  cols: 3,
  disableWhileNotFilled: disableWhileNotFilled,
  defaultValue: "",
  resetValue: "",
  inputProps: {
    options: countries,
    muiStyles: {}
  },
  margin: "0px 0px 10px 0px",
  showValidation: true,
  validation: {
    validate: (value) => value !== "admin" || "Nice try!",
  },
  useRefDataLoader: false,
  refDataMethod: RefDataMethodsEnum.GET,
  refDataURL: "https://virtserver.swaggerhub.com/NB-WO/Claims/1.0.0",
  refDataPayload: {},
  refDataLensPath: ['data','ref','select0'],
  entryStyle: {}
  };
};

export const SelectInputBuilder = (label = uuidv4(), dependencies = [], disableWhileNotFilled = []) => {
  return {
    inputLabel: label,
    inputType: RegisteredInputTypesEnum.MUI_SELECT,
    dependencies: dependencies,
    disableWhileNotFilled: disableWhileNotFilled,
    defaultValue: sampleSelectOptions[0].value,
    resetValue: "",
    inputProps: {
      options: sampleSelectOptions,
    },
    margin: "0px 0px 10px 0px",
    showValidation: true,
    validation: {
      validate: (value) => value !== "admin" || "Nice try!",
    },
    useRefDataLoader: false,
    refDataMethod: RefDataMethodsEnum.GET,
    refDataURL: "https://virtserver.swaggerhub.com/NB-WO/Claims/1.0.0",
    refDataPayload: {},
    refDataLensPath: ['data','ref','select0']
  };
};

export const TextInputBuilder = (label = uuidv4(), dependencies = [], disableWhileNotFilled = []) => {
  return {
    inputLabel: label,
    inputType: RegisteredInputTypesEnum.MUI_TEXTINPUT,
    dependencies: dependencies,
    disableWhileNotFilled: disableWhileNotFilled,
    defaultValue: "Default",
    resetValue: "",
    readOnly: true,
    inputProps: {
      label: "Botao 2",
    },
    margin: "0px 0px 10px 0px",
    showValidation: true,
    validation: {
      validate: (value) => value !== "admin" || "Nice try!",
    },
  };
};

export const CheckboxBuilder = (label = uuidv4(), dependencies = [], disableWhileNotFilled = []) => {
  return {
    inputLabel: label,
    inputType: RegisteredInputTypesEnum.MUI_CHECKBOX,
    disableWhileNotFilled: disableWhileNotFilled,
    dependencies: dependencies,
    defaultValue: false,
    resetValue: false,
    inputProps: {},
    margin: "0px 0px 10px 0px",
    showValidation: true,
    validation: {
      validate: (value) => value !== "admin" || "Nice try!",
    },
  };
};

// TODO: Convert id / inputLabel to testFormOptions attribute, to assure unique IDs
export const testFormOptions = [
  AutoCompleteInputBuilder("autocomplete1", []),
  SelectInputBuilder("select0" , ["text1"]),
  SelectInputBuilder("select1" , ["select0"]),
  TextInputBuilder("text1", [], ["select0", "select1", "checkbox1"]),
  CheckboxBuilder("checkbox1", [], [])
];

export const testFormGeneratorOptions = {

};

