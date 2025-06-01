import React from 'react';
import { Check } from 'lucide-react';

export default function PricingPlans() {
  const plans = [
    {
      name: "Starter",
      price: "$286.4",
      period: "/mo",
      description: "Il existe de nombreuses variantes disponibles, mais la majorité ont souffert.",
      features: [
        "Création d'un site web vitrine",
        "Gestion des réseaux sociaux pour une plateforme (choix du client)",
        "Optimisation de base pour les moteurs de recherche (SEO)",
        "Création d'une vidéo promotionnelle de base (30 secondes)"
      ],
      isPopular: false,
      bgColor: "bg-gray-900",
      textColor: "text-white"
    },
    {
      name: "Business",
      price: "$668",
      period: "/mo",
      description: "Il existe de nombreuses variantes disponibles, mais la majorité ont souffert.",
      features: [
        "Site web personnalisé avec fonctionnalités avancées (e-commerce, formulaires interactifs, etc.)",
        "Gestion de contenu pour deux plateformes de médias sociaux",
        "Stratégie de marketing numérique complète (SEO, SEA, médias sociaux)",
        "Création de contenu audiovisuel régulier (vidéos promotionnelles, témoignages clients, tutoriels)"
      ],
      isPopular: true,
      bgColor: "bg-gray-900",
      textColor: "text-white"
    },
    {
      name: "Corporate",
      price: "$1062.4",
      period: "/mo",
      description: "Il existe de nombreuses variantes disponibles, mais la majorité ont souffert.",
      features: [
        "Développement d'une application mobile, application web sur mesure et Progiciel de gestion intégré",
        "Campagnes publicitaires multi-canaux avec suivi analytique approfondi",
        "Stratégie de communication intégrée (relations publiques, gestion de crise)",
        "Production audiovisuelle professionnelle (spots publicitaires, documentaires, interviews haut de gamme)"
      ],
      isPopular: false,
      bgColor: "bg-gray-900",
      textColor: "text-white"
    }
  ];

  return (
  <div>
    <div className="w-full bg-gradient-to-r text-center from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-xl font-semibold py-4 px-6 rounded-xl  mb-8 shadow-lg">
                  Offrez vous un package
                </div>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-8 w-full">
        
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Plus Populaire
                  </span>
                </div>
              )}
              
              <div className={`${plan.bgColor} ${plan.textColor} rounded-2xl p-8 h-full border border-gray-700 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20`}>
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-300">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 mb-8 shadow-lg">
                  Acheter le package
                </button>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold mb-6">Inclus:</h4>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 mr-3 mt-1">
                          <Check className="w-5 h-5 text-emerald-400" />
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}

