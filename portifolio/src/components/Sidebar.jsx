import Avatar from "../img/perfil.jpg";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Paloma Cristina Faria"/>
      <p className="title">Desenvolvedor</p>
      <p>Redes sociais</p>
      <p>Informações de contato</p>
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;