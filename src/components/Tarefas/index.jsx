import React from 'react';
import * as P from 'prop-types';
import './Tarefas.css';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={index}>
          {tarefa}
          <span>
            <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />
            <FaWindowClose
              className="delete"
              onClick={(e) => handleDelete(e, index)}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: P.array.isRequired,
  handleEdit: P.func.isRequired,
  handleDelete: P.func.isRequired,
};
export default Tarefas;
