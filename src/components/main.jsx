import React, { Component } from 'react';
import './main.css';

// form
import { FaPlus } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
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
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        {/* <h1>Meu componente de classe com estado</h1> */}
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          <input onChange={this.handleChange} type="text" />
          <button type="submit" value={novaTarefa}>
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
