import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';


const MuiButton = (props) => {
  
const theme = useTheme();
const buttonDefaultStyles = {
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
};

  const { inputFormOptions, name, onClick, text, muiStyles = buttonDefaultStyles } = props;

  return (
      <MuiButton id={name} onClick={onClick} variant="contained" color="primary">
        {text}
      </MuiButton>
    
  );
};

export default MuiButton;