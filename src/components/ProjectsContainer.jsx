import React from 'react';
import aluroniImage from '../img/aluroni.jfif';
import AnotherProject from './AnotherProject'; // Importando o novo componente

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="project">
        <img src={aluroniImage} alt="Aluroni Project Screenshot" className="project-image" />
        <p>
          O Aluroni é um projeto desenvolvido durante o curso React da Alura. Neste curso, foram abordados os seguintes tópicos:
          Criar um projeto do zero com Create React App.
          Utilizar o normalize.css para resetar estilos padrões de navegadores.
          Configurar o absolute imports para facilitar a importação de arquivos.
          Boas práticas em CSS, incluindo o uso de variáveis e breakpoints de media-queries.
          Utilização do pacote classnames para facilitar o uso de CSS Modules e estilos condicionais.
          Importar svgs como componentes React usando o SVGR.
          Como o React entende os imports estáticos em arquivos.js,.scss ou.css.
          Importar arquivos estáticos como variáveis via js ou utilizando a pasta public.
        </p>
        <a href="https://github.com/Diegodevops26/Aluroni" className="btn">
          Ver Projeto no GitHub
        </a>
      </div>
      <AnotherProject /> {/* Renderizando o novo projeto */}
    </section>
  );
};

export default ProjectsContainer;
