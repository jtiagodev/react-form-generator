import React, { useEffect } from 'react';

const OneyItemsTableInput = (props) => {
    const { inputData, setInputData, disabled } = props;

    
    // addItemHandler
    // removeItemHandler
    // copyItemHandler
    // editItemHandler
    // ...


    return (
        <>
        <button onClick={evt => { evt.preventDefault(); setInputData("Goodbye"); }} >ADD DATA TO INPUT</button>
        <button onClick={evt => { evt.preventDefault(); setInputData(undefined); }} >RESET DATA</button>
        </>
    )
};

export default OneyItemsTableInput;