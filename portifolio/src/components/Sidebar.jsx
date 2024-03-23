import Avatar from "../img/perfil.jpg";
import SocialNetworks from "./SocialNetworks";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Paloma Cristina Faria"/>
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
