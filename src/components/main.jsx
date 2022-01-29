import React, { Component } from 'react';

export default class Main extends Component {
  // o construtor que recebe as props
  constructor(props) {
    super(props);

    this.state = {
      novaTarefa: '',
    };

    this.inputMudou = this.inputMudou.bind(this);
    /*
      _ bind significa vincular, quando se cria uma função ela tem seu próprio
      _ escopo, o que faz o this ser apontado para esse escopo. Então se for usar
      _ funções que mudem o escopo se deve fazer o bind do this, para não perder
      _ a referência do mesmo. Então o this virá a mesma classe do component
    */
  }

  inputMudou(e) {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  // Componentes de classe precisam do método render
  // Para devolverem os elementos xml, ou seja, renderizar algo

  render() {
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        {/* <h1>Meu componente de classe com estado</h1> */}
        <h1>Lista de tarefas</h1>
        <p>olhe: {novaTarefa}</p>

        <form action="#">
          <input onChange={this.inputMudou} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
