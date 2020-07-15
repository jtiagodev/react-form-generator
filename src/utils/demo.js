import { RegisteredInputTypesEnum, RefDataMethodsEnum } from "./enums";
import { sampleSelectOptions, countries } from './demo-lov';

// TODO: Convert id / inputLabel to testFormOptions attribute, to assure unique IDs
export const testFormOptions = [
  {
    id: 10,
    inputLabel: "autocomplete1",
    labelText: "Auto Complete Test",
    inputType: RegisteredInputTypesEnum.MUI_AUTOCOMPLETE,
    dependencies: [],
    cols: 3,
    disableWhileNotFilled: [],
    defaultValue: "",
    resetValue: "",
    inputProps: {
      options: countries,
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
  },
  // {
  //   id: 0,
  //   inputLabel: "select0",
  //   inputType: RegisteredInputTypesEnum.MUI_SELECT,
  //   dependencies: ["text1"],
  //   disableWhileNotFilled: [],
  //   defaultValue: sampleSelectOptions[0].value,
  //   resetValue: "",
  //   inputProps: {
  //     options: sampleSelectOptions,
  //   },
  //   margin: "0px 0px 10px 0px",
  //   showValidation: true,
  //   validation: {
  //     validate: (value) => value !== "admin" || "Nice try!",
  //   },
  //   useRefDataLoader: false,
  //   refDataMethod: RefDataMethodsEnum.GET,
  //   refDataURL: "https://virtserver.swaggerhub.com/NB-WO/Claims/1.0.0",
  //   refDataPayload: {},
  //   refDataLensPath: ['data','ref','select0']
  // },
  // {
  //   id: 1,
  //   inputLabel: "select1",
  //   inputType: RegisteredInputTypesEnum.MUI_SELECT,
  //   dependencies: [],
  //   disableWhileNotFilled: ["select0"],
  //   defaultValue: "a",
  //   resetValue: "",
  //   inputProps: {
  //     options: sampleSelectOptions,
  //   },
  //   margin: "0px 0px 10px 0px",
  //   showValidation: true,
  //   validation: {
  //     validate: (value) => value !== "admin" || "Nice try!",
  //   },
  // },
  {
    id: 2,
    inputLabel: "text1",
    inputType: RegisteredInputTypesEnum.MUI_TEXTINPUT,
    dependencies: [],
    disableWhileNotFilled: ["select0", "select1", "checkbox1"],
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
  },
  // {
  //   id: 3,
  //   inputLabel: "checkbox1",
  //   inputType: RegisteredInputTypesEnum.MUI_CHECKBOX,
  //   disableWhileNotFilled: [],
  //   dependencies: [],
  //   defaultValue: false,
  //   resetValue: false,
  //   inputProps: {},
  //   margin: "0px 0px 10px 0px",
  //   showValidation: true,
  //   validation: {
  //     validate: (value) => value !== "admin" || "Nice try!",
  //   },
  // },
];

export const testFormGeneratorOptions = {

};

