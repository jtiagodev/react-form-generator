import React, { useEffect } from 'react';

const OneyItemsTableInput = (props) => {
    const { data, setData, disabled } = props;

    
    // addItemHandler
    // removeItemHandler
    // copyitemHandler
    // editItemHandler
    // ...
    useEffect(() => {
        // setData("Hello World");
    }, []);

    return (
        <>
        <button onClick={evt => { evt.preventDefault(); setData("Goodbye"); }} >ADD DATA TO INPUT</button>
        <button onClick={evt => { evt.preventDefault(); setData(undefined); }} >RESET DATA</button>
        </>
    )
};

export default OneyItemsTableInput;