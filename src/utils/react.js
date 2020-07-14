import React from 'react';

function useNumState(defState){
    const [state, setState] = React.useState(defState)
  
    function smartSetState(newState){
      if(state.num !== newState.num){
        setState(newState)
      }
    }
  
    return [state, smartSetState]
  }