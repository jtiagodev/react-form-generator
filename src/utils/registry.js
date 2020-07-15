import FormInputs from "../Form/index";
import * as schemas from "../utils/schemas";
import { LabelPositionEnum, RegisteredInputTypesEnum } from "./enums";

export const defaultTypesMap = {
    MuiAutoComplete: {
      id: RegisteredInputTypesEnum.MUI_AUTOCOMPLETE,
      render: FormInputs.MuiAutoComplete,
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