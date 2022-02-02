import React from 'react';
import './App.css';

// # my components
import Main from './components/main';

/*
  * Notas
  ! “inferno de wrappers” de componentes rodeados de camadas de providers, consumers,
  ! high-order components, render props, e outras abstrações

  _ Com usos mais complexos de react com classes, havia a formação de um inferno de wrappers
  _ Os componentes ficavam cheios de "enbrulhos", por haver a necessidade de adicionar
  _ várias camadas de providers, consumers, HOC e diveras outras coisas. Fazendo os componentes
  _ Ficarem muito poluidos e cheios de informações. Levando a erros ou mesmo a dificuldade de manter,
  _ dar manutenção ou compreender o código

  ! Com Hooks, você pode extrair lógica com estado de um componente de uma forma que possa ser testada
  ! independentemente e reutilizada. Hooks permitem reutilizar lógica com estado sem mudar sua hierarquia
  ! de componentes. Isso torna fácil de compartilhar Hooks com vários outros componentes ou com a comunidade.
*/

export default function App() {
  return <Main />;
}
