import BRF from "build-react-form";

export const demoFormInputOptions = [
  BRF.inputBuilder("input1", BRF.FormEnums.RegisteredInputTypesEnum.MUI_NUMERICFROMTO),
  BRF.inputBuilder("datepicker1", BRF.FormEnums.RegisteredInputTypesEnum.MUI_TIMEPICKERTEXTINPUT, { section: "section3", readOnly: true, inputProps: { displayDateDiff: true }})
];


