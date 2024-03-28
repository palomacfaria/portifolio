import "../styles/components/professionalExperienciesContainer.sass"
import Prefeitura from "../img/prefeitura.jpg";
import It2b from "../img/it2b.jpg"
const ProfessionalExperiencesContainer = () => {
  const experiences = [
    {
      id: "prefeitura",
      name: "Prefitura Municipal de Franca-SP",
      description:
        "Durante dois anos, atuei como estagiária na Prefeitura Municipal de Franca, colaborando diretamente com a Secretaria de Saúde. Durante esse período, adquiri experiência valiosa oferecendo suporte ao cliente, realizando manutenção em computadores e impressoras. Além disso, tive a oportunidade de ter meus primeiros contatos com bancos de dados SQL, ampliando meu conhecimento na área da tecnologia da informação.",
      img: Prefeitura, 
    },
    {
      id: "it2b",
      name: "IT2B",
      description:
        "Atualmente, sou técnica de informática plena na empresa IT2B, onde construí uma carreira sólida ao longo de 2 anos e 6 meses. No meu dia-a-dia, desempenho diversas atividades, incluindo o atendimento ao cliente nas dependências do Tribunal de Justiça de Franca - SP. Além disso, sou responsável pela manutenção de microcomputadores, impressoras e forneço suporte técnico para o sistema do TJ, garantindo que as operações tecnológicas funcionem de forma eficiente e sem interrupções.",
      img: It2b, 
    },
  ];
  return (
    <section className="experiences-container">
      <h2>Experiências</h2>
      <div className="experiences-grid">
        {experiences.map((experience) => (
          <div
            className="experience-card"
            id={experience.id}
            key={experience.id}
          >
            <img src={experience.img} alt={experience.name} />
            <div className="experience-info">
              <h3>{experience.name}</h3>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperiencesContainer;
