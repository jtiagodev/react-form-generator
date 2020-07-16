import * as builders from "./builders";


// TODO: Convert id / inputLabel to testFormOptions attribute, to assure unique IDs
export const testFormOptions = [
  builders.MuiAutoCompleteInputBuilder("autocomplete1", []),
  builders.MuiSelectInputBuilder("select0" , ["text1"]),
  // builders.MuiSelectInputBuilder("select1" , ["select0"]),
  builders.MuiTextInputBuilder("text1", [], []),
  builders.MuiCheckboxBuilder("checkbox1", [], []),
  builders.MuiDatePickerBuilder("datepicker1", [], []),
  builders.MuiIimePickerTextInputBuilder("datepickertextinput1", [], []),
  builders.MuiSelectInputBuilder("select5" , [], [], "section2"),
  builders.MuiSelectInputBuilder("select6" , [], [], "section2"),
  builders.MuiRadioGroupBuilder("radiogroup1" , [], [], "section2")


];

export const testFormGeneratorOptions = {

};

