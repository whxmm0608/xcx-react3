import React, { useReducer } from 'react';

function reducer(state: any, action: any) {
  console.log('???', state, action);
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

//dispatch的是action. useReducer第二个参数传递的是state
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      Count: {state.count}
      <button style={{ marginLeft: '20px' }} onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button style={{ marginLeft: '10px' }} onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}
