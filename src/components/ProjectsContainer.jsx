const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
        <p>
        O Aluroni é um projeto desenvolvido durante o curso React da Alura. Neste curso, foram abordados os seguintes tópicos:
        <li>Criar um projeto do zero com Create React App.</li>
        <li>Utilizar o normalize.css para resetar estilos padrões de navegadores.</li>
        <li>Configurar o absolute imports para facilitar a importação de arquivos.</li>
        <li>Boas práticas em CSS, incluindo o uso de variáveis e breakpoints de media-queries.</li>
        <li>Utilização do pacote classnames para facilitar o uso de CSS Modules e estilos condicionais.</li>
        <li>Importar svgs como componentes React usando o SVGR.</li>
        <li>Como o React entende os imports estáticos em arquivos.js,.scss ou.css.</li>
        <li>Importar arquivos estáticos como variáveis via js ou utilizando a pasta public.</li>
       </p>
      <a href="https://github.com/Diegodevops26/Aluroni" className="btn btn-primary">
        Ver Projeto no GitHub
      </a>
    </section>
  );
};
  
  export default ProjectsContainer;
