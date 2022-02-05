import React, { useState } from 'react';
import './main.css';

import Form from './Form';
import Tarefas from './Tarefas';

export default function MainFunc() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [isEdit, setIsEdit] = useState(-1);

  const handleChange = (e) => setTarefas(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaTarefaTratada = novaTarefa.trim();

    if (novaTarefa === '') return;

    if (tarefas.indexOf(novaTarefaTratada) !== -1 && isEdit === -1) {
      alert('tarefa já existe');
      return;
    }

    if (isEdit === -1) {
      setTarefas([...tarefas, novaTarefaTratada]);
      setNovaTarefa('');
      setIsEdit(-1);
    } else {
      const novasTarefasEditada = [...tarefas];
      novasTarefasEditada[isEdit] = novaTarefa;

      setTarefas([...novasTarefasEditada]);
      setNovaTarefa('');
      setIsEdit(-1);
    }
  };

  const handleEdit = (e, index) => {
    setIsEdit(index);
    setNovaTarefa(tarefas[index]);
  };

  const handleDelete = (e, index) => {
    const novasTarefas = [...tarefas];

    novasTarefas.splice(index, 1);

    setTarefas([...novasTarefas]);
  };

  return (
    <div className="main">
      {/* <h1>Meu componente de classe com estado</h1> */}
      <h1>Lista de tarefas</h1>

      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        novaTarefa={novaTarefa}
      />

      <Tarefas
        tarefas={tarefas}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
