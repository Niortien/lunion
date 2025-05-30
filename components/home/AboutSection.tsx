import React from 'react';
import { ArrowRight, Phone, Award, Users, ArrowUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image Section */}
          <div className="relative">
            {/* Decorative background shapes */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-100 rounded-full opacity-60"></div>
            
            {/* Main image container with organic shape */}
            <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-[3rem] p-8 overflow-hidden">
              {/* Background pattern lines */}
              <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
                <svg viewBox="0 0 64 64" className="w-full h-full text-purple-600">
                  <path d="M8 8h48M8 16h48M8 24h48M8 32h48M8 40h48M8 48h48M8 56h48" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              
              {/* Simulated business people image */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  {/* Simulated person 1 */}
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                  {/* Simulated person 2 */}
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-700" />
                  </div>
                </div>
                
                {/* Simulated chart/graph */}
                <div className="h-32 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg flex items-end justify-center space-x-2 p-4">
                  <div className="w-4 h-16 bg-purple-400 rounded-t"></div>
                  <div className="w-4 h-20 bg-blue-400 rounded-t"></div>
                  <div className="w-4 h-12 bg-purple-300 rounded-t"></div>
                  <div className="w-4 h-24 bg-blue-500 rounded-t"></div>
                  <div className="w-4 h-8 bg-purple-400 rounded-t"></div>
                  <div className="w-4 h-28 bg-blue-600 rounded-t"></div>
                </div>
                
                {/* Meeting table simulation */}
                <div className="mt-4 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg"></div>
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl">
                <div className="text-3xl font-bold">25</div>
                <div className="text-xs text-center font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
               Nous augmentons le succès des entreprises avec{' '}
                <span className="text-purple-600">IT Solution</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Concevoir de manière collaborative des chaînes d'approvisionnement conviviales et répondre aux impératifs inter-unités. Développer avec autorité des ressources compétitives et une synergie 
                globale. Générer des schémas efficaces et uniques avant l'avenir.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Entreprise certifiée
</h3>
                  <p className="text-gray-600 text-sm">Meilleure prestation de services en compétences</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600 text-sm">100% Expert Team</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button className="inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 group">
                DISCOVER MORE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Call Us On:</p>
                  <p className="font-bold text-gray-900">+100-8899-0307</p>
                </div>
              </div>
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

export default AboutSection;