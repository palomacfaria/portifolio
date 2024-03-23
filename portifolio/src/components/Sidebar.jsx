import Avatar from "../img/perfil.jpg";
import SocialNetworks from "./SocialNetworks";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Paloma Cristina Faria"/>
      <p className="title">Desenvolvedora Fullstack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/12xIxo4izw5-AzTwfaEMr6sHymMjiyWtF/view?usp=sharing" target="_blanck" download="currículo-paloma-faria.pdf" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;