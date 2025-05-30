"use client";
import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, User } from 'lucide-react';

const TeamSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Jordan",
      position: "UI/UX Designer",
      image: "/api/placeholder/300/400",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      positionColor: "text-purple-600",
      socialBg: "bg-gray-100",
      socialHover: "hover:bg-purple-600 hover:text-white"
    },
    {
      id: 2,
      name: "Assah Cedric",
      position: "Founder & CEO",
      image: "/api/placeholder/300/400",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-white",
      positionColor: "text-purple-200",
      socialBg: "bg-white/20",
      socialHover: "hover:bg-white hover:text-purple-600",
      isHighlighted: true
    },
    {
      id: 3,
      name: "Alex Furnandes",
      position: "Project Manager",
      image: "/api/placeholder/300/400",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      positionColor: "text-purple-600",
      socialBg: "bg-gray-100",
      socialHover: "hover:bg-purple-600 hover:text-white"
    },
    {
      id: 4,
      name: "Mary Crispy",
      position: "Chief Expert",
      image: "/api/placeholder/300/400",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      positionColor: "text-purple-600",
      socialBg: "bg-gray-100",
      socialHover: "hover:bg-purple-600 hover:text-white"
    }
  ];

  const socialIcons = [
    { icon: Facebook, name: 'facebook' },
    { icon: Twitter, name: 'twitter' },
    { icon: Instagram, name: 'instagram' },
    { icon: Linkedin, name: 'linkedin' }
  ];

  // Generate a professional avatar based on name
  const generateAvatar = (name:string, isHighlighted = false) => {
   
    const colors = isHighlighted
      ? ['from-white/20', 'to-white/40', 'text-white']
      : ['from-purple-100', 'to-purple-200', 'text-purple-600'];

    return (
      <div className={`w-full h-64 bg-gradient-to-br ${colors[0]} ${colors[1]} flex items-center justify-center rounded-t-2xl`}>
        <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center shadow-lg">
          <User className={`w-12 h-12 ${isHighlighted ? 'text-white' : 'text-gray-600'}`} />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-purple-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
            </div>
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">
              OUR TEAM
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
           Rencontrez notre professionnel{' '}
            <span className="text-purple-600">Membres de l&apos équipe</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`${member.bgColor} relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group overflow-hidden`}
              onMouseEnter={() => setHoveredCard(null)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Profile Image/Avatar */}
              <div className="relative overflow-hidden">
                {generateAvatar(member.name, member.isHighlighted)}

                {/* Social Media Overlay */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${
                  hoveredCard === member.id ? 'translate-y-0' : 'translate-y-full'
                }`}>
                  <div className="flex space-x-3">
                    {socialIcons.map((social, index) => {
                      const SocialIcon = social.icon;
                      return (
                        <button
                          key={social.name}
                          className={`w-10 h-10 ${member.socialBg} rounded-full flex items-center justify-center ${member.socialHover} transition-all duration-300 transform hover:scale-110`}
                          style={{
                            transitionDelay: `${index * 50}ms`
                          }}
                        >
                          <SocialIcon className="w-4 h-4" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6 text-center">
                <h3 className={`text-xl font-bold ${member.textColor} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                  {member.name}
                </h3>
                <p className={`${member.positionColor} font-medium text-sm`}>
                  {member.position}
                </p>

                {/* Decorative line */}
                <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Highlighted decoration */}
              {member.isHighlighted && (
                <>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <p className="text-gray-600">Team Members</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <p className="text-gray-600">Support Available</p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110">
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TeamSection;
