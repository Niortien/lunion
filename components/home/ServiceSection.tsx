import React from 'react';
import { Code, Palette, Megaphone, ArrowRight } from 'lucide-react';

const ServiceServices = () => {
  const services = [
    {
      id: "01",
      title: "Web Development",
      description: "Intinsicly redefine competitive e-business before adaptative potentialiti. Professionally build progressive users with.",
      icon: Code,
      bgColor: "bg-gray-100",
      textColor: "text-gray-800",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      id: "02",
      title: "UI/UX Design",
      description: "Intinsicly redefine competitive e-business before adaptative potentialiti. Professionally build progressive users with.",
      icon: Palette,
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-white",
      iconBg: "bg-white/20",
      iconColor: "text-white",
      isHighlighted: true
    },
    {
      id: "03",
      title: "Digital Marketing",
      description: "Intinsicly redefine competitive e-business before adaptative potentialiti. Professionally build progressive users with.",
      icon: Megaphone,
      bgColor: "bg-gray-100",
      textColor: "text-gray-800",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
     {
      id: "04",
      title: "Digital Marketing",
      description: "Intinsicly redefine competitive e-business before adaptative potentialiti. Professionally build progressive users with.",
      icon: Megaphone,
      bgColor: "bg-gray-100",
      textColor: "text-gray-800",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`relative ${service.bgColor} rounded-3xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group overflow-hidden`}
              >
                {/* Background decoration */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/5 rounded-full"></div>

                {/* Service number */}
                <div className={`absolute top-6 right-6 text-6xl font-bold ${service.isHighlighted ? 'text-white/20' : 'text-gray-200'}`}>
                  {service.id}
                </div>

                {/* Icon container */}
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold ${service.textColor} mb-4`}>
                    {service.title}
                  </h3>

                  <p className={`${service.textColor} ${service.isHighlighted ? 'text-white/90' : 'text-gray-600'} mb-8 leading-relaxed`}>
                    {service.description}
                  </p>

                  {/* Read more button */}
                  <button className={`inline-flex items-center gap-2 px-6 py-3 ${
                    service.isHighlighted
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                  } rounded-xl font-semibold transition-all duration-300 group-hover:gap-4`}>
                    READ MORE
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceServices;
