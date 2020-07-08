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
        dependencies: 1,
        inputProps: {
            label: "Nome Reclamação"
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