import React, { useState } from 'react'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

const MuiCurrencyTextField = () => {

  const [value, setValue] = useState();

  return (
    <CurrencyTextField
        label="Amount"
        variant="standard"
        value={value}
        currencySymbol="$"
        outputFormat="string"
        onChange={(event, value)=> setValue(value)}
    />
  );
};

export default MuiCurrencyTextField;