import React, { useState } from "react";
import { Flex } from "./../Form/Grid";
import FormGeneratorRenderInputSimple from "./../FormGenerator/FormGeneratorRenderInputSimple";
import { computeInputsForSection } from "./../utils/form";
import { Grid, Paper, Divider, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { formOptionDefaultValues } from "./../utils/defaults";
import * as R from 'ramda';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  })
);

const FormGeneratorSection = (props) => {
  const classes = useStyles();

  const { sectionSettings, formOptions, rowNum, colNum } = props;
  const [sectionInputs, setSectionInputs] = useState(
    computeInputsForSection(sectionSettings.id, formOptions)
  );

  console.log(sectionInputs);

  return (
    <Flex flexDirection="column" style={{ width: "100%", height: "100%" }}>
      <Flex flexDirection="column">
        {sectionSettings.displayLabel && (
          <>
            <Typography variant="subtitle1" gutterBottom>
              {sectionSettings.label}
            </Typography>
            <Divider className={classes.divider} />
          </>
        )}
      </Flex>
      <Grid container spacing={3}>
        {sectionInputs.map((sectionInput, i) => {
              // Merges Default Values with Input Configurations provided
    const mergeSectionInputWithDefaults = R.merge(
      formOptionDefaultValues,
      sectionInput
    );

          return (
            <Grid item xs={sectionInput.gridCols}>
            <>
            {!sectionInput.includePaper && (<FormGeneratorRenderInputSimple
                            inputSettings={mergeSectionInputWithDefaults}
                            {...props}
                          />)}
            {sectionInput.includePaper && (
                          <Paper className={classes.paper}>
                          <FormGeneratorRenderInputSimple
                            inputSettings={mergeSectionInputWithDefaults}
                            {...props}
                          /></Paper>)}
                          </>
          </Grid>
          )
            })}
      </Grid>
    </Flex>
  );
};

export default FormGeneratorSection;
