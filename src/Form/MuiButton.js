import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const MuiColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);


const MuiButton = (props) => {
  const classes = useStyles();

  return (
      <MuiColorButton onClick={props.onClick} variant="contained" color="primary" className={classes.margin}>
        {props.text}
      </MuiColorButton>
    
  );
};

export default MuiButton;