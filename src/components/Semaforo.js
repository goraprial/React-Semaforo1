import React from 'react';
import './semaforoStyle.css';
import { useReducer } from 'react';
import './controllerStyle.css';

const Semaforo = () => {
  const initialState = { colorState: 'Off' };

  function reducer(state, action) {
    switch (action.type) {
      case 'redClick':
        return { colorState: (state.colorState = 'red') };
      case 'yellowClick':
        return { colorState: (state.colorState = 'yellow') };
      case 'greenClick':
        return { colorState: (state.colorState = 'green') };
      default:
        throw new Error();
    }
  }
  const RedCheck = (state) => {
    let red = false;
    if (state.colorState === 'red') {
      return 'red';
    } else {
      return 'gray';
    }
  };
  const YellowCheck = (state) => {
    let yellow = false;
    if (state.colorState === 'yellow') {
      return 'yellow';
    } else {
      return 'gray';
    }
  };
  const GreenCheck = (state) => {
    let green = false;
    if (state.colorState === 'green') {
      return 'green';
    } else {
      return 'gray';
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='father'>
      <div className='buttons'>
        <button onClick={() => dispatch({ type: 'redClick' })}>Stop</button>
        <button onClick={() => dispatch({ type: 'yellowClick' })}>Wait</button>
        <button onClick={() => dispatch({ type: 'greenClick' })}>Start</button>
      </div>
      <div className='borderBox'>
        <div className='content'>
          <div className='circle' id={RedCheck(state)}></div>
          <div className='circle' id={YellowCheck(state)}></div>
          <div className='circle' id={GreenCheck(state)}></div>
        </div>
      </div>
      <div className='stick'></div>
    </div>
  );
};

export default Semaforo;
