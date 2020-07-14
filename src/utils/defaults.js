
import Button from "../Form/MuiButton";
import MuiTextInput from "../Form/MuiTextInput";
import MuiSelect from "../Form/MuiSelect";
import { v4 as uuidv4 } from 'uuid';
import { LabelPositionEnum, RegisteredInputTypesEnum } from "./enums";
import { testFormOptions } from "../utils/demo";
import {defaultTypesMap} from './registry';


export const formOptionDefaultValues = {
    cols: 1,
    alignX: "flex-start",
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
    labelStyle: { fontSize: "12px" },
    readOnly: false
};

export const formGeneratorDefaultValues = {
        typesMap: defaultTypesMap,
        colSize: 200,
        rowNum: 2,
        colNum: 5,
        margin: "5px",
        formOptions: testFormOptions,
        enableFooter: true,
        enableFooterButtons: true,
        styleFormWrapper: {},
        styleFormBody: {},
        styleFormFooter: {},
        readOnlyMode: false
};

export const useFormOptions = {
    // mode: 'onSubmit',
    // reValidateMode: 'onChange',
    // defaultValues: {},
    // resolver: undefined,
    // context: undefined,
    // criteriaMode: "firstErrorDetected",
    // shouldFocusError: true,
    // shouldUnregister: true,
  };