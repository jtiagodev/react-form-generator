
import Button from "../Form/Button";
import TextInput from "../Form/TextInput";

export const defaultTypesMap = {
  button: Button,
  textInput: TextInput,
};

export const testFormOptions = [
    // {
    //     id: 1,
    //     inputLabel: 'botao1',
    //     inputType: 'button',
    //     inputProps: {
    //         text: 'Send 2 SMS'
    //     },
    //     alignX: 'flex-start'
    // },
    {
        id: 2,
        inputLabel: 'botao2',
        inputType: 'textInput',
        dependencies: ["botao3"],
        defaultValue: "Default1",
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
        inputLabel: 'botao3',
        inputType: 'textInput',
        dependencies: ["botao4"],
        defaultValue: "Default1",
        inputProps: {
            label: "Botao 3"
        },
        margin: "0px 0px 10px 0px",
        validation: {
            validate: value => value !== "admin" || "Nice try!"
        }
            
          
    },
    {
        id: 3,
        inputLabel: 'botao4',
        inputType: 'textInput',
        dependencies: [],
        inputProps: {
            label: "Botao 4"
        },
        margin: "0px 0px 10px 0px",
        validation: {
            validate: value => value !== "admin" || "Nice try!"
        }
            
          
    },
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
