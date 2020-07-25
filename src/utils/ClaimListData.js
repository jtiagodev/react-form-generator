import { inputBuilder, Enums } from "build-react-form";
import { CustomMUIStyles } from "./CustomStyles";
import OneyItemsTableInput from "./OneyItemsTableInput";
import React from 'react';

export const sections = [
  { id: "dadosDF", 
    label: "DADOS DO DF",
    displayLabel: true,
    muiDividerStyles: CustomMUIStyles.MuiDivider
  },
  { id: "oney", 
    label: "ONEY",
    displayLabel: true
  },
  { id: "items", 
    label: "ITEMS",
    displayLabel: true
  },
  { id: "anexos", 
    label: "ANEXOS",
    displayLabel: true
  },
];

const RefData = {
  tipo: [
    { value: "a", label: "Tipo A" },
    { value: "b", label: "Tipo B" },
    { value: "c", label: "Tipo C" },
  ],
  docRelacionado: [
    { value: "a", label: "Documento A" },
    { value: "b", label: "Documento B" },
    { value: "c", label: "Documento C" },
  ],
  departamento: [
    { value: "a", label: "Departamento A" },
    { value: "b", label: "Departamento B" },
    { value: "c", label: "Departamento C" },
  ],
  projeto: [
    { value: "a", label: "Projecto A" },
    { value: "b", label: "Projecto B" },
    { value: "c", label: "Projecto C" },
  ],
  ordemInterna: [
    { value: "a", label: "Ordem Interna A" },
    { value: "b", label: "Ordem Interna B" },
    { value: "c", label: "Ordem Interna C" },
  ]
};

const IDs = {
  tipo: "estado",
  nif: "NIF",
  numeroDF: "numeroDF",
  nomeFornecedor: "nomeFornecedor",
  OC: "OC",
  docRelacionado: "docRelacionado",
  descricao: "descricao",
  departamento: "departamento",
  projeto: "projeto",
  ordemInterna: "ordemInterna",
  dataCriacao: "dataCriacao",
  dataVencimento: "dataVencimento",
  items: "items",
  anexos: "anexos"
};

const InputOptions = {
  tipo: {
    labelText: "Tipo",
    section: "dadosDF",
    gridCols: 4,
    inputProps: {
      options: RefData.tipo
    }
  },
  nif:  {
    labelText: "NIF",
    gridCols: 4,
    section: "dadosDF",
  },
  numeroDF:  {
    labelText: "Nº DF",
    gridCols: 4,
    section: "dadosDF"
  },
  nomeFornecedor:  {
    labelText: "Nome do Fornecedor",
    section: "dadosDF",
    gridCols: 8,
  },
  OC:  {
    labelText: "OC",
    gridCols: 4,
    section: "dadosDF"
  },
  docRelacionado:  {
    labelText: "Documento Relacionado",
    gridCols: 4,
    section: "dadosDF",
    inputProps: {
      options: RefData.docRelacionado
    }
  },
  descricao: {
    labelText: "Descrição",
    gridCols: 8,
    section: "dadosDF"
  },
 
  departamento:  {
    labelText: "Departamento",
    gridCols: 4,
    section: "oney",
    inputProps: {
      options: RefData.departamento
    }
  },
  projeto:  {
    labelText: "Projeto",
    gridCols: 4,
    section: "oney",
    inputProps: {
      options: RefData.projeto
    }
  },
  ordemInterna:  {
    labelText: "Ordem Interna",
    gridCols: 4,
    section: "oney",
    inputProps: {
      options: RefData.ordemInterna
    }
  },
  dataCriacao: {
    labelText: "Data de Criação",
    gridCols: 4,
    section: "oney"
  },
  dataVencimento: {
    labelText: "Data de Vencimento",
    gridCols: 4,
    section: "oney",
  },
  items: {
    labelText: "Items",
    section: "items",
    gridCols: 12,
    inputProps: {
      renderComponent: OneyItemsTableInput
    }
  },
  anexos: {
    labelText: "Anexos",
    displayLabel: false,
    gridCols: 12,
    section: "anexos"
  }
};

export const FormInputs = [
  inputBuilder(
    IDs.tipo,
    Enums.RegisteredInputs.MUI_AUTOCOMPLETE,
    InputOptions.tipo
  ),
  inputBuilder(
    IDs.nif,
    Enums.RegisteredInputs.MUI_TEXTINPUT,
    InputOptions.nif
  ),
  inputBuilder(
    IDs.numeroDF,
    Enums.RegisteredInputs.MUI_TEXTINPUT,
    InputOptions.numeroDF
  ),
  inputBuilder(
    IDs.nomeFornecedor,
    Enums.RegisteredInputs.MUI_TEXTINPUT,
    InputOptions.nomeFornecedor
  ),
  inputBuilder(
    IDs.OC,
    Enums.RegisteredInputs.MUI_TEXTINPUT,
    InputOptions.OC
  ),
  inputBuilder(
    IDs.docRelacionado,
    Enums.RegisteredInputs.MUI_AUTOCOMPLETE,
    InputOptions.docRelacionado
  ),
  inputBuilder(
    IDs.descricao,
    Enums.RegisteredInputs.MUI_TEXTINPUT,
    InputOptions.descricao
  ),
  inputBuilder(
    IDs.departamento,
    Enums.RegisteredInputs.MUI_AUTOCOMPLETE,
    InputOptions.departamento
  ),
  inputBuilder(
    IDs.projeto,
    Enums.RegisteredInputs.MUI_AUTOCOMPLETE,
    InputOptions.projeto
  ),
  inputBuilder(
    IDs.ordemInterna,
    Enums.RegisteredInputs.MUI_AUTOCOMPLETE,
    InputOptions.ordemInterna
  ),
  inputBuilder(
    IDs.dataCriacao,
    Enums.RegisteredInputs.MUI_DATEPICKERTEXTINPUT,
    InputOptions.dataCriacao
  ),
  inputBuilder(
    IDs.dataVencimento,
    Enums.RegisteredInputs.MUI_DATEPICKERTEXTINPUT,
    InputOptions.dataVencimento
  ),
  inputBuilder(
    IDs.items,
    Enums.RegisteredInputs.CUSTOM_COMPONENT,
    InputOptions.items
  ),
  inputBuilder(
    IDs.anexos,
    Enums.RegisteredInputs.FILE_UPLOADER,
    InputOptions.anexos
  )
];
