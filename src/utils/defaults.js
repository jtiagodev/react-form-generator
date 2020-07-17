
import { v4 as uuidv4 } from 'uuid';
import { testFormOptions } from "../utils/demo";
import { LabelPositionEnum } from "./enums";
import { defaultTypesMap } from './registry';
import * as R from 'ramda';


export const mergeFormOptionsWithDefaults = (formOptions) => {
    const formOptionsWithDefaults = formOptions.map((option, i) => {
        // Merges Default Values with Input Configurations provided
        return R.merge(
            formOptionDefaultValues,
            option
          );
    });
    return formOptionsWithDefaults;
}

export const defaultSections = [ 
    {
        id: "main",
    label: "Main Section",
    displayLabel: true
    },
    {
        id: "section2",
    label: "Second Section",
    displayLabel: true
    },
    {
        id: "section3",
    label: "Third Section",
    displayLabel: true
    }
];
export const formOptionDefaultValues = {
    cols: 1,
    alignX: "flex-start",
    alignY: "center",
    inputProps: {},
    validation: { required: "Required" },
    inputLabel: uuidv4(),
    dependencies: [],
    disableWhileNotFilled: [], 
    showValidation: true,
    showLabel: true,
    labelDisplay: true,
    labelPosition: LabelPositionEnum.TOP,
    labelText: "Input Label",
    labelMarginRight: "10px",
    labelStyle: { fontSize: "12px" },
    readOnly: false,
    section: "main",
    gridCols: 3,
    includePaper: false
    
};
export const formGeneratorDefaultValues = {
        typesMap: defaultTypesMap,
        colSize: 200,
        rowNum: 2,
        colNum: 5,
        margin: "5px",
        formOptions: mergeFormOptionsWithDefaults(testFormOptions),
        enableFooter: true,
        enableFooterButtons: true,
        styleFormWrapper: {},
        styleFormBody: {},
        styleFormFooter: {},
        readOnlyMode: false,
        sections: defaultSections,
        useSections: true,
        additionalInputRegistry: {}
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
