import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiSass,
    DiPostgresql,
  } from "react-icons/di";
  import {SiTypescript, SiGithub} from "react-icons/si"
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", description:"5 anos de experiência", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", description:"5 anos de experiência", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", description:"3 anos de experiência", icon: <DiJsBadge /> },
    { id: "typescript", name: "Typescript", description:"3 meses de experiência",  icon: <SiTypescript/> },
    { id: "react", name: "React",description:"1 ano de experiência", icon: <DiReact /> },
    { id: "sass", name: "Sass", description:"3 meses de experiência", icon: <DiSass /> },
    { id: "postgres", name: "Postgres", description:"6 meses de experiência", icon: <DiPostgresql /> },
    { id: "github", name: "Github", description:"2 anos de experiência", icon: <SiGithub /> },
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