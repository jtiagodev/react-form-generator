const testFormOptions = [
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
        inputProps: {
            label: "Botao 2"
        },
        margin: "0px 0px 10px 0px",
        validation: {
            validate: value => value !== "admin" || "Nice try!"
        }
            
          
    },
    {
        id: 3,
        inputLabel: 'botao3',
        inputType: 'textInput',
        dependencies: ["botao4"],
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

export default testFormOptions;