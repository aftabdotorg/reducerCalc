import { useReducer } from 'react';

/* eslint-disable no-unused-vars */
const initialState = {
  num1: 0,
  num2: 0,
  result: 'no result yet!',
};
const reducer = (state, action) => {
  if (action.type === 'SET_NUM_ONE')
    return {
      ...state,
      num1: action.number,
    };

  if (action.type === 'SET_NUM_TWO')
    return {
      ...state,
      num2: action.number,
    };

  if (action.type === 'ADD')
    return {
      ...state,
      result: state.num1 + state.num2,
    };

  if (action.type === 'SUBTRACT')
    return {
      ...state,
      result: state.num1 - state.num2,
    };

  if (action.type === 'CLEAR') return initialState;
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {nums.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: 'SET_NUM_ONE', number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {nums.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: 'SET_NUM_TWO', number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Action</h2>
        <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
        <button onClick={() => dispatch({ type: 'SUBTRACT' })}>-</button>
        <button onClick={() => dispatch({ type: 'CLEAR' })}>c</button>
        <div>
          <h2>Result: {state.result}</h2>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
