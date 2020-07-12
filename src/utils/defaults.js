
import Button from "../Form/MuiButton";
import MuiTextInput from "../Form/MuiTextInput";
import MuiSelect from "../Form/MuiSelect";
import { v4 as uuidv4 } from 'uuid';
import { LabelPositionEnum } from "./enums";

// TODO: extend to component and inputPropsSchema
export const defaultTypesMap = {
  button: Button,
  textInput: MuiTextInput,
  select: MuiSelect,
};

// TODO: Complete all default values to merge with received configuration object
export const formOptionDefaultValues = {
    cols: 1,
    alignX: "center",
    alignY: "center",
    inputProps: {},
    validation: { required: "Required" },
    inputLabel: uuidv4(),
    dependencies: [],
    showValidation: true,
    labelPosition: LabelPositionEnum.LEFT,
    labelText: "Input Label",
    labelMarginRight: "10px",
    labelStyle: { fontSize: "12px" }
};
