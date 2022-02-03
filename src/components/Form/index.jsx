import React from 'react';
import './Form.css';
import * as P from 'prop-types';
import { FaPlus } from 'react-icons/fa';

function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit" value={novaTarefa}>
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: P.func.isRequired,
  handleSubmit: P.func.isRequired,
  novaTarefa: P.string.isRequired,
};

export default Form;
