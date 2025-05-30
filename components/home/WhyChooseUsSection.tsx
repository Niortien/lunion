import React from 'react';
import { Check, BarChart3, Shield, Headphones, Users, TrendingUp, Zap, ArrowUp } from 'lucide-react';
import teamIamge from "@/public/assets/images/Team of young african people in the office at the table with a laptop _ Premium Photo.jpg"
import Image from 'next/image';
const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Big Data Analysis",
      icon: BarChart3
    },
    {
      title: "High Quality Security",
      icon: Shield
    },
    {
      title: "24/7 Online Support",
      icon: Headphones
    },
    {
      title: "24/7 Support Team",
      icon: Users
    },
    {
      title: "Business Improvement",
      icon: TrendingUp
    },
    {
      title: "Easy Solutions",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content Section */}
          <div className="space-y-8">
            {/* Section badge */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
              </div>
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">
                WHY CHOOSE US
              </span>
            </div>

            {/* Main heading */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Nous traitons les aspects professionnels{' '}
                <span className="text-purple-600">IT Services</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Concevoir de manière collaborative des chaînes d'approvisionnement conviviales et inter-unités est
                 impératif. Fabriquer avec autorité des ressources compétitives et holistiques.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 group hover:bg-purple-50 p-3 rounded-xl transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors duration-300">
                      <Check className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                      <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {feature.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Image Section */}
          <div className="relative">
            {/* Background decorative shapes */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-60"></div>
            
            {/* Main image container with organic shape */}
            <div className="relative">
              {/* Organic background shape */}
        
              
              <Image src={teamIamge} alt='team' className='rounded-3xl' />
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="fixed bottom-8 right-8">
          <button className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110">
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;