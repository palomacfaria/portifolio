import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
  { name: "linkedin", link:"https://www.linkedin.com/in/paloma-cristina-faria-b762631ba/",  icon: <FaLinkedinIn /> },
  { name: "github", link: "https://github.com/palomacfaria", icon: <FaGithub /> },
  { name: "instagram", link:"https://www.instagram.com/paloms.faria/", icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} target="_blanck" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;