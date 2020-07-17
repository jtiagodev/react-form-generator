import * as builders from "./builders";
import { RegisteredInputTypesEnum } from "./enums";


// TODO: Convert id / inputLabel to testFormOptions attribute, to assure unique IDs
export const testFormOptions = [
  builders.InputBuilder("input1", RegisteredInputTypesEnum.MUI_NUMERICFROMTO),
  builders.MuiAutoCompleteInputBuilder("autocomplete1", []),
  builders.MuiSelectInputBuilder("select0" , ["text1"]),
  // builders.MuiSelectInputBuilder("select1" , ["select0"]),
  builders.MuiTextInputBuilder("text1", [], []),
  builders.MuiCheckboxBuilder("checkbox1", [], []),
  builders.MuiDatePickerBuilder("datepicker1", [], []),
  builders.MuiIimePickerTextInputBuilder("datepickertextinput1", [], []),
  builders.MuiSelectInputBuilder("select5" , [], [], "section2"),
  builders.MuiSelectInputBuilder("select6" , [], [], "section2"),
  builders.MuiRadioGroupBuilder("radiogroup1" , [], [], "section2"),
  builders.MuiSliderBuilder("slider1", [], [], "section3"),
  builders.MuiSwitchBuilder("switch1", [], [], "section3"),

];

export const testFormGeneratorOptions = {

};

