
import Button from "../Form/MuiButton";
import MuiTextInput from "../Form/MuiTextInput";
import MuiSelect from "../Form/MuiSelect";
import { v4 as uuidv4 } from 'uuid';
import { LabelPositionEnum } from "./enums";
import { testFormOptions } from "../utils/demo";

// TODO: extend to component and inputPropsSchema
export const defaultTypesMap = {
  button: Button,
  textInput: MuiTextInput,
  select: MuiSelect,
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