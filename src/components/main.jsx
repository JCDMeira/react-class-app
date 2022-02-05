//  usa classes como componentes com estado e funções como sem.
//  representando versões anteriores ao react 16.8

import React, { Component } from 'react';
import './main.css';

import Form from './Form';
import Tarefas from './Tarefas';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    isEdit: -1,
  };
  // @ muda nome da página
  // @ com classes
  // ? componentDidMount() {
  // ?   document.title = `nome da página`;
  // ? }
  // @ com hooks
  // ? import useDocumentTitle from '@rehooks/document-title';
  // ?  useDocumentTitle(`nome da página`);

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { novaTarefa, tarefas, isEdit } = this.state;

    const novaTarefaTratada = novaTarefa.trim();

    if (novaTarefa === '') return;

    if (tarefas.indexOf(novaTarefaTratada) !== -1 && isEdit === -1) {
      alert('tarefa já existe');
      return;
    }

    if (isEdit === -1) {
      this.setState({
        novaTarefa: '',
        tarefas: [...tarefas, novaTarefaTratada],
        isEdit: -1,
      });
    } else {
      const novasTarefasEditada = [...tarefas];
      novasTarefasEditada[isEdit] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefasEditada],
        novaTarefa: '',
        isEdit: -1,
      });
    }
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      isEdit: index,
      novaTarefa: tarefas[index],
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];

    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
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

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
