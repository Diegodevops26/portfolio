import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
  } from "react-icons/di";
  
  import '../styles/components/technologiescontainer.sass';
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Linguagem de marcação de hipertexto para criar páginas web" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Linguagem de estilo para criar layouts e designs para páginas web" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Linguagem de programação para criar interações e efeitos dinâmicos em páginas web" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Ambiente de execução JavaScript para criar aplicações server-side" },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "Sistema de gerenciamento de banco de dados relacional" },
    { id: "react", name: "React", icon: <DiReact />, description: "Biblioteca JavaScript para criar interfaces de usuário" },
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;
