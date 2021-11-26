import React from 'react';
import { useReducer } from 'react';
import './controllerStyle.css';

const Controller = () => {
  // const initialState = { colorState: 'Off' };

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case 'redClick':
  //       return { colorState: (state.colorState = 'Red') };
  //     case 'yellowClick':
  //       return { colorState: (state.colorState = 'Yellow') };
  //     case 'greenClick':
  //       return { colorState: (state.colorState = 'Green') };
  //     default:
  //       throw new Error();
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='buttons'>
      {/* Color: {state.colorState}
      <button onClick={() => dispatch({ type: 'redClick' })}>Stop</button>
      <button onClick={() => dispatch({ type: 'yellowClick' })}>Wait</button>
      <button onClick={() => dispatch({ type: 'greenClick' })}>Start</button> */}
    </div>
  );
};

export default Controller;
