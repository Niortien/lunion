// components/WorkProcess.tsx
import { FaClipboardList, FaLaptopCode, FaCogs, FaChartLine } from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: <FaClipboardList className="text-purple-500 text-3xl" />,
    title: "Sélectionnez un projet",
    desc: "Pour comprendre vos besoins, peurs et attentes, nous rencontrons directement les parties prenantes.",
  },
  {
    number: "02",
    icon: <FaLaptopCode className="text-purple-500 text-3xl" />,
    title: "Analyse du projet",
    desc: "Nous identifions vos freins en examinant chaque détail pour obtenir une vision claire de la situation. Notre objectif est de comprendre en profondeur les défis auxquels vous êtes confrontés.",
  },
  {
    number: "03",
    icon: <FaCogs className="text-purple-500 text-3xl" />,
    title: "Planifier l'exécution",
    desc: "Une solution personnalisée pour répondre efficacement à vos besoins. Notre approche sur mesure garantit une résolution optimale de vos défis.",
  },
  {
    number: "04",
    icon: <FaChartLine className="text-purple-500 text-3xl" />,
    title: "Livrer le résultat",
    desc: "Un accompagnement à chaque étape de votre parcours. Notre équipe dévouée est là pour vous soutenir dans la réalisation de vos objectifs et garantir votre succès.",
  },
];

//TODO:modifier le contenue en fonction du site officiel
const WorkProcess = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-16 relative">
      <div className="text-center mb-12">
        <p className="text-purple-600 font-semibold flex justify-center items-center gap-2 uppercase">
          <span className="text-xl">🧩</span> Processus de travail
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Comment nous   <span className="text-purple-600">travaillons?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative bg-white shadow-md rounded-2xl p-6 pt-16 text-center"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="relative w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-md ring-4 ring-purple-200">
                {step.number}
              </div>
            </div>
            <div className="mb-4">{step.icon}</div>
            <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
            <p className="text-gray-500 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
