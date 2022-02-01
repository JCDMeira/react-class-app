import React, { Component } from 'react';
import './main.css';

// form
import { FaPlus } from 'react-icons/fa';

//tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { novaTarefa, tarefas } = this.state;

    const novaTarefaTratada = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefaTratada) !== -1) {
      alert('tarefa já existe');
      return;
    }

    this.setState({
      tarefas: [...tarefas, novaTarefa],
    });
  };

  // o construtor que recebe as props
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     novaTarefa: '',
  //   };

  //   this.inputMudou = this.inputMudou.bind(this);
  /*
      _ bind significa vincular, quando se cria uma função ela tem seu próprio
      _ escopo, o que faz o this ser apontado para esse escopo. Então se for usar
      _ funções que mudem o escopo se deve fazer o bind do this, para não perder
      _ a referência do mesmo. Então o this virá a mesma classe do component
    */
  // }

  // inputMudou(e) {
  //   this.setState({
  //     novaTarefa: e.target.value,
  //   });
  // }

  // Componentes de classe precisam do método render
  // Para devolverem os elementos xml, ou seja, renderizar algo

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        {/* <h1>Meu componente de classe com estado</h1> */}
        <h1>Lista de tarefas</h1>

        <form action="#" className="form" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" />
          <button type="submit" value={novaTarefa}>
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              {tarefa}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
