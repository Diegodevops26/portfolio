const ProjectsContainer = () => {
    return (
      <section className="projects-container">
        <h2>Projetos</h2>
        <p>
        O Aluroni é o projeto do curso React: lidando com arquivos estáticos da alura, nesse curso nós aprendemos como:

        Criar um projeto do zero com Create React App.
        Utilizar o normalize.css para resetar estilos padrões de navegadores.
        Configurar o absolute imports para não precisar mais importar arquivos com vários níveis.
        Boas práticas em CSS, como criar variáveis, criar arquivos para estas variáveis e para breakpoints de media-queries.
        Utilizar o pacote classnames para poder utilizar o CSS Modules sem precisar concatenar um monte de estilos CSS e lidar com estilos condicionais.
        Utilizar o SVGR, um pacote que vem no Create React App para importar svgs como componentes React.
        Como o React entende os imports estáticos tanto via arquivos .js quanto em arquivos de estilos como .scss ou .css.
        Aprenda como importar arquivos estáticos como variáveis via js ou utilizando a pasta public para imports dinâmicos de arquivos estáticos.
        </p>
        <a href="https://github.com/Diegodevops26/Aluroni" className="btn">
          Ver Projetos
        </a>
      </section>
    );
  };
  
  export default ProjectsContainer;