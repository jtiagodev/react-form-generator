import { RegisteredInputTypesEnum } from "./enums";

const sampleSelectOptions = [ { label: "a", value: "a" },{ label: "b", value: "b" },{ label: "c", value: "c" }];

// TODO: Convert id / inputLabel to testFormOptions attribute, to assure unique IDs
export const testFormOptions = [
    {
        id: 1,
        inputLabel: 'select1',
        inputType: RegisteredInputTypesEnum.MUI_SELECT,
        dependencies: ["text1"],
        defaultValue: "Default",
        resetValue: "",
        inputProps: {
            options: sampleSelectOptions
        },
        margin: "0px 0px 10px 0px",
        showValidation: true,
        validation: {
            validate: value => value !== "admin" || "Nice try!"
        }
    },
    {
        id: 2,
        inputLabel: 'text1',
        inputType: RegisteredInputTypesEnum.MUI_TEXTINPUT,
        dependencies: [],
        defaultValue: "Default",
        resetValue: "",
        inputProps: {
            label: "Botao 2"
        },
        margin: "0px 0px 10px 0px",
        showValidation: true,
        validation: {
            validate: value => value !== "admin" || "Nice try!"
        } 
    },
    {
        id: 3,
        inputLabel: 'checkbox1',
        inputType: RegisteredInputTypesEnum.MUI_CHECKBOX,
        dependencies: ["text1"],
        defaultValue: false,
        resetValue: false,
        inputProps: {
        },
        margin: "0px 0px 10px 0px",
        showValidation: true,
        validation: {
            validate: value => value !== "admin" || "Nice try!"
        }
    },
];

export const testFormGeneratorOptions = {

}