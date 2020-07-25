import { inputBuilder, Enums } from "build-react-form";
import { CustomMUIStyles } from "./CustomStyles";

const RefData = {
  estado: [
    { value: "a", label: "Estado A" },
    { value: "b", label: "Estado B" },
    { value: "c", label: "Estado C" },
  ],
  origem: [
    { value: "a", label: "Origem A" },
    { value: "b", label: "Origem B" },
    { value: "c", label: "Origem C" },
  ],
  canal: [
    { value: "a", label: "Canal A" },
    { value: "b", label: "Canal B" },
    { value: "c", label: "Canal C" },
  ],
  motivo: [
    { value: "a", label: "Motivo A" },
    { value: "b", label: "Motivo B" },
    { value: "c", label: "Motivo C" },
  ],
  departamento: [
    { value: "a", label: "Departamento A" },
    { value: "b", label: "Departamento B" },
    { value: "c", label: "Departamento C" },
  ],
  atribuicao: [
    { value: "meus", label: "Meus" },
    { value: "equipa", label: "Minha Equipa" },
    { value: "todos", label: "Todos" },
  ]
};

const IDs = {
  estado: "estado",
  numReclamacao: "numReclamacao",
  origem: "origem",
  canal: "canal",
  motivo: "motivo",
  subMotivo: "subMotivo",
  cliente: "cliente",
  departamento: "departamento",
  montante: "montante",
  dataCriacao: "dataCriacao",
  atribuicao: "atribuicao",
};

const InputOptions = {
  estado: {
    labelText: "Estado",
    inputProps: {
      options: RefData.estado
    }
  },
  numReclamacao: {
    labelText: "Numéro de Reclamação",
  },
  origem: {
    labelText: "Origem",
    inputProps: {
      options: RefData.origem
    }
  },
  canal: {
    labelText: "Canal",
    dependencies: [IDs.origem],
    resetValue: "(empty)",
    inputProps: {
      options: RefData.canal
    }
  },
  motivo: {
    labelText: "Motivo",
    inputProps: {
      options: RefData.motivo
    }
  },
  subMotivo: {
    labelText: "Sub Motivo",
  },
  cliente: {
    labelText: "Cliente",
  },
  departamento: {
    labelText: "Departamento",
    inputProps: {
      options: RefData.departamento
    }
  },
  montante: {
    labelText: "Montante",
  },
  dataCriacao: {
    labelText: "Data Criação",
  },
  atribuicao: {
    labelText: "Atribuição",
    gridCols: 4,
    inputProps: {
      options: RefData.atribuicao,
      orientation: "row",
      ariaLabel: "atribuicao",
      muiStyles: CustomMUIStyles.MuiRadioGroup
    },
  },
};

export const FormInputs = [
  inputBuilder(
    IDs.estado,
    Enums.RegisteredInputs.MUI_AUTOCOMPLETE,
    InputOptions.estado
  ),
  inputBuilder(
    IDs.numReclamacao,
    Enums.RegisteredInputs.MUI_NUMERICTEXTFIELD,
    InputOptions.numReclamacao
  ),
  inputBuilder(
    IDs.origem,
    Enums.RegisteredInputs.MUI_AUTOCOMPLETE,
    InputOptions.origem
  ),
  inputBuilder(
    IDs.canal,
    Enums.RegisteredInputs.MUI_AUTOCOMPLETE,
    InputOptions.canal
  ),
  inputBuilder(
    IDs.motivo,
    Enums.RegisteredInputs.MUI_AUTOCOMPLETE,
    InputOptions.motivo
  ),
  inputBuilder(
    IDs.subMotivo,
    Enums.RegisteredInputs.MUI_TEXTINPUT,
    InputOptions.subMotivo
  ),
  inputBuilder(
    IDs.cliente,
    Enums.RegisteredInputs.MUI_TEXTINPUT,
    InputOptions.cliente
  ),
  inputBuilder(
    IDs.departamento,
    Enums.RegisteredInputs.MUI_AUTOCOMPLETE,
    InputOptions.departamento
  ),
  inputBuilder(
    IDs.montante,
    Enums.RegisteredInputs.MUI_NUMERICFROMTO,
    InputOptions.montante
  ),
  inputBuilder(
    IDs.dataCriacao,
    Enums.RegisteredInputs.MUI_DATEPICKERTEXTINPUT,
    InputOptions.dataCriacao
  ),
  inputBuilder(
    IDs.atribuicao,
    Enums.RegisteredInputs.MUI_RADIOGROUP,
    InputOptions.atribuicao
  ),
];
