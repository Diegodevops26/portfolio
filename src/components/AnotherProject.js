import React from 'react';
import countriesImage from '../img/115600640.png'; // Imagem do projeto


const AnotherProject = () => {
  return (
    <div className="another-project">
      <h3>Lista de Países com Next.js</h3>
      <img src={countriesImage} alt="Countries Project Screenshot" className="project-image" />
      <p>
        Este projeto foi desenvolvido utilizando Next.js 13 e a API REST Countries. 
        Os principais recursos incluem:
        <ul>
          <li>Exibição de uma lista de países com suas bandeiras e nomes em português.</li>
          <li>Detalhes do país em uma nova rota, incluindo capital, população e línguas faladas.</li>
          <li>Funcionalidade de busca e exibição de países que fazem fronteira.</li>
        </ul>
      </p>
      <a href="https://github.com/Diegodevops26/mp-lista-de-paises-next" className="btn">
        Ver Projeto no GitHub
      </a>
    </div>
  );
};

export default AnotherProject;
