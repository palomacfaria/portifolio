import TechnologiesContainer from "./TechnologiesContainer.jsx"
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";

import "../styles/components/maincontent.sass";
import ProfessionalExperiencesContainer from "./ProfessionalExperiencesContainer.jsx";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <ProfessionalExperiencesContainer/>
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;