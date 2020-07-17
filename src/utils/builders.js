import {
  RegisteredInputTypesEnum,
  RefDataMethodsEnum,
  OrientationEnum,
} from "./enums";
import {
  sampleSelectOptions,
  sampleSliderOptions,
  countries,
} from "./demo-lov";
import { v4 as uuidv4 } from "uuid";

export const InputBuilder = (
  label = uuidv4(),
  type = RegisteredInputTypesEnum.MUI_TEXTINPUT,
  rest = {}
) => {
  return {
    inputLabel: label,
    inputType: type,
    ...rest,
  };
};
export const MuiSliderBuilder = (
  label = uuidv4(),
  dependencies = [],
  disableWhileNotFilled = [],
  section = "main"
) => {
  return {
    inputLabel: label,
    labelText: "Slider Test",
    inputType: RegisteredInputTypesEnum.MUI_SLIDER,
    dependencies: dependencies,
    cols: 3,
    disableWhileNotFilled: disableWhileNotFilled,
    defaultValue: [0, 20],
    resetValue: "",
    defaultValue: sampleSliderOptions,
    readOnly: true,
    inputProps: {},
    margin: "0px 0px 10px 0px",
    showValidation: true,
    max: 20,
    step: 1,
    validation: {
      validate: (value) => value !== "admin" || "Nice try!",
    },
    useRefDataLoader: false,
    refDataMethod: RefDataMethodsEnum.GET,
    refDataURL: "https://virtserver.swaggerhub.com/NB-WO/Claims/1.0.0",
    refDataPayload: {},
    refDataLensPath: ["data", "ref", "select0"],
    entryStyle: {},
    section: section,
  };
};

export const MuiSwitchBuilder = (
  label = uuidv4(),
  dependencies = [],
  disableWhileNotFilled = [],
  section = "main"
) => {
  return {
    inputLabel: label,
    labelText: "Slider Test",
    inputType: RegisteredInputTypesEnum.MUI_SWITCH,
    dependencies: dependencies,
    cols: 3,
    disableWhileNotFilled: disableWhileNotFilled,
    defaultValue: "",
    resetValue: "",
    inputProps: {},
    margin: "0px 0px 10px 0px",
    showValidation: true,
    validation: {
      validate: (value) => value !== "admin" || "Nice try!",
    },
    useRefDataLoader: false,
    refDataMethod: RefDataMethodsEnum.GET,
    refDataURL: "https://virtserver.swaggerhub.com/NB-WO/Claims/1.0.0",
    refDataPayload: {},
    refDataLensPath: ["data", "ref", "select0"],
    entryStyle: {},
    section: section,
  };
};

const autoCompleteReadOnlyStyles = {
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
};
export const MuiAutoCompleteInputBuilder = (
  label = uuidv4(),
  dependencies = [],
  disableWhileNotFilled = []
) => {
  return {
    inputLabel: label,
    labelText: "Auto Complete Test",
    inputType: RegisteredInputTypesEnum.MUI_AUTOCOMPLETE,
    dependencies: dependencies,
    cols: 3,
    disableWhileNotFilled: disableWhileNotFilled,
    defaultValue: "Test",
    resetValue: "",
    inputProps: {
      options: countries,
      muiStyles: {},
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
    refDataLensPath: ["data", "ref", "select0"],
    readOnly: false,
    readOnlyStyles: autoCompleteReadOnlyStyles,
    section: "main",
  };
};
export const MuiSelectInputBuilder = (
  label = uuidv4(),
  dependencies = [],
  disableWhileNotFilled = [],
  section = "main",
  gridCols = 3
) => {
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
    refDataLensPath: ["data", "ref", "select0"],
    section: section,
    gridCols: gridCols,
    readOnly: false,
    readOnlyStyles: {
      root: {
        select: {
          underline: {
            "&&&:before": {
              borderBottom: "none",
            },
            "&&:after": {
              borderBottom: "none",
            },
          },
        },
      },
    },
  };
};

export const MuiRadioGroupBuilder = (
  label = uuidv4(),
  dependencies = [],
  disableWhileNotFilled = [],
  section = "main",
  gridCols = 3
) => {
  return {
    inputLabel: label,
    inputType: RegisteredInputTypesEnum.MUI_RADIOGROUP,
    dependencies: dependencies,
    disableWhileNotFilled: disableWhileNotFilled,
    defaultValue: sampleSelectOptions[0].value,
    resetValue: "",
    inputProps: {
      orientation: OrientationEnum.HORIZONTAL,
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
    refDataLensPath: ["data", "ref", "select0"],
    section: section,
    gridCols: 6,
  };
};
export const MuiTextInputBuilder = (
  label = uuidv4(),
  dependencies = [],
  disableWhileNotFilled = []
) => {
  return {
    inputLabel: label,
    inputType: RegisteredInputTypesEnum.MUI_TEXTINPUT,
    dependencies: dependencies,
    disableWhileNotFilled: disableWhileNotFilled,
    defaultValue: "Default",
    resetValue: "",
    inputProps: {
      label: "Botao 2",
    },
    margin: "0px 0px 10px 0px",
    showValidation: true,
    validation: {
      validate: (value) => value !== "admin" || "Nice try!",
    },
    section: "main",
    readOnly: false,
    readOnlyStyles: {
      underline: {
        "&&&:before": {
          borderBottom: "none",
        },
        "&&:after": {
          borderBottom: "none",
        },
      },
    },
  };
};
export const MuiIimePickerTextInputBuilder = (
  label = uuidv4(),
  dependencies = [],
  disableWhileNotFilled = []
) => {
  return {
    inputLabel: label,
    inputType: RegisteredInputTypesEnum.MUI_TIMEPICKERTEXTINPUT,
    dependencies: dependencies,
    disableWhileNotFilled: disableWhileNotFilled,
    defaultValue: "Default",
    resetValue: "",
    readOnly: false,
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
export const MuiCheckboxBuilder = (
  label = uuidv4(),
  dependencies = [],
  disableWhileNotFilled = []
) => {
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
export const MuiDatePickerBuilder = (
  label = uuidv4(),
  dependencies = [],
  disableWhileNotFilled = []
) => {
  return {
    inputLabel: label,
    inputType: RegisteredInputTypesEnum.MUI_DATEPICKER,
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
