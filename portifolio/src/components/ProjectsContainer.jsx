import "../styles/components/projectscontainer.sass";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>Aqui você encontrará alguns dos projetos que desenvolvi.</p>
      <div className="btn-container">
        <a
          href="https://hamburgueria-self-psi.vercel.app/"
          target="_blanck"
          className="btn-projects"
        >
          Projeto Hamburgueria
        </a>
        <a
          href="https://m3-s1-entrega-portfolio-template-palomacfaria.vercel.app/"
          target="_blanck"
          className="btn-projects"
        >
          Projeto Portifólio
        </a>
        <a
          href="https://react-entrega-kenzie-hub-palomacfaria.vercel.app/"
          target="_blanck"
          className="btn-projects"
        >
          Projeto Cadastro e Login
        </a>
        <a
          href="https://kenzie-academy-brasil-developers.github.io/m2-site-instituciona-generico-palomacfaria/"
          target="_blanck"
          className="btn-projects"
        >
          Projeto Site de Cursos
        </a>
        <a
          href="https://kenzie-academy-brasil-developers.github.io/m2-open-music-template-palomacfaria/"
          target="_blanck"
          className="btn-projects"
        >
          Projeto Open Music
        </a>
        <a
          href="https://kenzie-academy-brasil-developers.github.io/m2-lista-de-tarefas-palomacfaria/"
          target="_blanck"
          className="btn-projects"
        >
          Projeto Lista de Tarefas
        </a>
        <a
          href="https://kenzie-academy-brasil-developers.github.io/m1-kenzie-flix-palomacfaria/"
          target="_blanck"
          className="btn-projects"
        >
          Projeto KenzieFlix
        </a>
      </div>
    </section>
  );
};

export default ProjectsContainer;
