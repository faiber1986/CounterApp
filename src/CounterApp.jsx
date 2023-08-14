import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ( { value } ) => {

  const [ counter, setCounter ] = useState( value );

  const handleAdd = () => {
    setCounter( counter + 1 );
  }
  
  const porDos = () => {
      setCounter( counter * 2 );
  }

  const reset = () => {
    setCounter( value );
}

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ porDos }>*2</button>
      <button onClick={ reset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 0
}
