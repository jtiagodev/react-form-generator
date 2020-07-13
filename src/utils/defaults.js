
import Button from "../Form/MuiButton";
import MuiTextInput from "../Form/MuiTextInput";
import MuiSelect from "../Form/MuiSelect";
import { v4 as uuidv4 } from 'uuid';
import { LabelPositionEnum, RegisteredInputTypesEnum } from "./enums";
import { testFormOptions } from "../utils/demo";
import FormInputs from "../Form/index";
import * as schemas from "../utils/schemas";

// TODO: extend to component and inputPropsSchema
export const defaultTypesMap = {
  MuiAutoComplete: {
    id: RegisteredInputTypesEnum.MUI_AUTOCOMPLETE,
    render: FormInputs.MuiButton,
    inputPropsSchema: schemas.MuiAutoCompletePropsSchema
  },
  MuiButton: {
      id: RegisteredInputTypesEnum.MUI_BUTTON,
      render: FormInputs.MuiButton,
      inputPropsSchema: schemas.MuiButtonPropsSchema
  },
  MuiCheckbox: {
    id: RegisteredInputTypesEnum.MUI_CHECKBOX,
    render: FormInputs.MuiCheckbox,
    inputPropsSchema: schemas.MuiCheckboxPropsSchema
  },
  MuiDatePicker: {
    id: RegisteredInputTypesEnum.MUI_DATEPICKER,
    render: FormInputs.MuiDatePicker,
    inputPropsSchema: schemas.MuiDatePickerPropsSchema
  },
  MuiRadioGroup: {
    id: RegisteredInputTypesEnum.MUI_RADIOGROUP,
    render: FormInputs.MuiRadioGroup,
    inputPropsSchema: schemas.MuiRadioGroupPropsSchema
  },
  MuiSelect: {
    id: RegisteredInputTypesEnum.MUI_SELECT,
    render: FormInputs.MuiSelect,
    inputPropsSchema: schemas.MuiSelectPropsSchema,
  },
  MuiSlider: {
    id: RegisteredInputTypesEnum.MUI_SLIDER,
    render: FormInputs.MuiSlider,
    inputPropsSchema: schemas.MuiSliderPropsSchema,
  },
  MuiSwitch: {
    id: RegisteredInputTypesEnum.MUI_SWITCH,
    render: FormInputs.MuiSwitch,
    inputPropsSchema: schemas.MuiSwitchPropsSchema,
  },
  MuiTextInput: {
    id: RegisteredInputTypesEnum.MUI_TEXTINPUT,
    render: FormInputs.MuiTextInput,
    inputPropsSchema: schemas.MuiTextInputPropsSchema,
  },
  MuiTextField: {
    id: RegisteredInputTypesEnum.MUI_TEXTFIELD,
    render: FormInputs.MuiTextField,
    inputPropsSchema: schemas.MuiTextInputPropsSchema,
  },
  ReactDatePicker: {
    id: RegisteredInputTypesEnum.REACT_DATEPICKER,
    render: FormInputs.ReactDatePicker,
    inputPropsSchema: schemas.ReactDatePickerPropsSchema,
  },
  ReactNumberFormat: {
    id: RegisteredInputTypesEnum.REACT_NUMBERFORMAT,
    render: FormInputs.ReactNumberFormat,
    inputPropsSchema: schemas.ReactNumberFormatPropsSchema,
  }
};

export const formOptionDefaultValues = {
    cols: 1,
    alignX: "center",
    alignY: "center",
    inputProps: {},
    validation: { required: "Required" },
    inputLabel: uuidv4(),
    dependencies: [],
    showValidation: true,
    showLabel: true,
    labelPosition: LabelPositionEnum.LEFT,
    labelText: "Input Label",
    labelMarginRight: "10px",
    labelStyle: { fontSize: "12px" }
};

export const formGeneratorDefaultValues = {
    
        typesMap: defaultTypesMap,
        colSize: 200,
        rowNum: 2,
        colNum: 2,
        margin: "5px",
        formOptions: testFormOptions,
        enableFooter: true,
        enableFooterButtons: true
      
};