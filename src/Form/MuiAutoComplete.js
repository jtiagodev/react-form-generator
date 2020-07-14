// import React from "react";
// import _ from "lodash/fp";
// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import { Controller } from "react-hook-form";

// const MuiAutoComplete = ({ control, inputProps, inputLabel, onChangeHandler }) => {
//   return (
   
//     <Controller
//       as={
//         <Autocomplete
//           // {...props}
//           // name={inputLabel}
//           id={inputLabel}
//           style={{ width: 300 }}
//           options={inputProps.options}
//           getOptionLabel={option => option.label}
//           renderOption={option => (
//             <span>
//               {countryToFlag(option.code)}
//               {option.label}
//             </span>
//           )}
//           getOptionSelected={(option, value) => _.isEqual(option, value)}
//           renderInput={params => (
//             <TextField
//               {...params}
//               label="Choose a country"
//               variant="outlined"
//             />
//           )}
//           onChange={(evt) => onChangeHandler(evt)}
//           // onInputChange
//         />
//       }
//       name={inputLabel}
//       control={control}
//     />
//   );
// };

// const countryToFlag = (isoCode) => {
//   return typeof String.fromCodePoint !== "undefined"
//     ? isoCode
//         .toUpperCase()
//         .replace(/./g, char =>
//           String.fromCodePoint(char.charCodeAt(0) + 127397)
//         )
//     : isoCode;
// }

// export default MuiAutoComplete;

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Button } from "@material-ui/core";

const MuiAutoComplete = ({ inputProps, control, register }) => {
  const options = inputProps.options;

  const getOpObj = option => {
    if (options && options[option] && options[option].code) {
      return options[option];
    } else {
      const result = options.find(op => op.code === options[option].code);
      return result;
    }
  };

  return (
    <Controller
    name="country"
    as={
      <Autocomplete
        options={options}
        getOptionLabel={option => getOpObj(option).label}
        getOptionSelected={(option, value) => {
          return option.code === getOpObj(value).code;
        }}
        renderInput={params => <TextField {...params} label="Country" />}
      />
    }
    onChange={([, obj]) => getOpObj(obj).code}
    control={control}
    defaultValue={options[0]}
  />
  );
};

export default MuiAutoComplete;