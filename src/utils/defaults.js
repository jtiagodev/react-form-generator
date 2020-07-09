
import Button from "../Form/Button";
import TextInput from "../Form/TextInput";
import MuiSelect from "../Form/Select";

const sampleSelectOptions = [ { label: "a", value: "a" },{ label: "b", value: "b" },{ label: "c", value: "c" }];

// TODO: extend to component and inputPropsSchema
export const defaultTypesMap = {
  button: Button,
  textInput: TextInput,
  select: MuiSelect
};

// TODO: Convert id / inputLabel to testFormOptions attribute, to assure unique IDs
export const testFormOptions = [
    {
        id: 1,
        inputLabel: 'select1',
        inputType: 'select',
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
        inputType: 'textInput',
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
    // {
    //     id: 3,
    //     inputLabel: 'botao3',
    //     inputType: 'textInput',
    //     dependencies: ["botao4"],
    //     defaultValue: "Default1",
    //     inputProps: {
    //         label: "Botao 3"
    //     },
    //     margin: "0px 0px 10px 0px",
    //     validation: {
    //         validate: value => value !== "admin" || "Nice try!"
    //     }
            
          
    // },
    // {
    //     id: 3,
    //     inputLabel: 'botao4',
    //     inputType: 'textInput',
    //     dependencies: [],
    //     inputProps: {
    //         label: "Botao 4"
    //     },
    //     margin: "0px 0px 10px 0px",
    //     validation: {
    //         validate: value => value !== "admin" || "Nice try!"
    //     }
            
          
    // },
    // {
    //     id: 2,
    //     inputLabel: 'botao3',
    //     inputType: 'textInput',
    //     dependencies: 1,
    //     inputProps: {
    //         label: "Nome Cliente"
    //     },
    //     margin: "0px 0px 10px 0px"
    // }
];
