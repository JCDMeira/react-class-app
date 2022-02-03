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

// @ muda nome da página
// @ com classes
// ? componentDidMount() {
// ?   document.title = `nome da página`;
// ? }
// @ com hooks
// ? import useDocumentTitle from '@rehooks/document-title';
// ?  useDocumentTitle(`nome da página`);
