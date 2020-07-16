import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const buttonDefaultStyles = {
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
};

const MuiButton = (props) => {
  const { inputFormOptions, name, onClick, text, muiStyles = buttonDefaultStyles } = props;
  const MuiButtonStyled = withStyles(muiStyles)(Button);

  return (
      <MuiButtonStyled id={name} onClick={onClick} variant="contained" color="primary">
        {text}
      </MuiButtonStyled>
    
  );
};

export default MuiButton;