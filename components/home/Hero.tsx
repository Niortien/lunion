"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';

import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Créez la solution la plus simple pour vous",
      subtitle: "SECURE & IT SERVICES",
      description: "Exploiter avec énergie des impératifs omniprésents sans collaboration ni partage d'idées de pointe. Expériences inter-unités et front-end monotones et parallèles des tâches..",
      background: "from-purple-600 via-purple-500 to-indigo-600",
      teamImage: '/assets/images/team4.jpg'
    },
    {
      id: 2,
      title: "Solutions technologiques innovantes",
      subtitle: "CLOUD & INFRASTRUCTURE",
      description: "Intégrez en toute transparence des technologies de pointe à des solutions d'infrastructure robustes. Proposez des systèmes évolutifs, sécurisés et efficaces qui s'adaptent aux besoins de votre entreprise.",
      background: "from-blue-600 via-indigo-500 to-purple-600",
      teamImage: '/assets/images/team3.jpg'
    },
    {
      id: 3,
      title: "Excellence en transformation numérique",
      subtitle: "CONSEIL ET STRATÉGIE",
      description: "Transformez votre entreprise grâce à des initiatives numériques stratégiques. Exploitez des données et des méthodologies innovantes pour optimiser votre avantage concurrentiel.",
      background: "from-indigo-600 via-blue-500 to-teal-600",
      teamImage: '/assets/images/team5.jpg'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index:number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className={`w-screen h-[125vh] bg-gradient-to-br ${currentSlideData.background}  relative overflow-hiddenn  transition-all duration-1000 ease-in-out `  }  style={{
  backgroundImage: `url(${currentSlideData.teamImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  
  
}}  >
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        {/* Large circle outline */}
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 left-32 w-6 h-6 border-2 border-white/30 rounded-full animate-bounce"></div>
        
        {/* Right side curved lines */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-30">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path d="M 100 0 Q 400 100 400 400" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
            <path d="M 150 0 Q 400 150 400 400" stroke="white" strokeWidth="1" fill="none" opacity="0.2"/>
            <path d="M 200 0 Q 400 200 400 400" stroke="white" strokeWidth="1" fill="none" opacity="0.1"/>
          </svg>
        </div>
        
        {/* Bottom geometric shapes */}
        <div className="absolute bottom-0 right-0 w-80 h-80 opacity-20">
          <div className="absolute bottom-0 right-20 w-40 h-40 bg-white/10 transform rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-20 right-0 w-32 h-32 bg-white/15 transform rotate-12 animate-pulse"></div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group mb-4"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <button 
          onClick={nextSlide}
          className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group mb-4"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center h-full w-full px-6 lg:px-20">
        {/* Left Content */}
        <div className="flex-1 w-full max-w-2xl text-white pt-20 lg:pt-0">
          {/* Logo/Brand */}
          <div className="flex items-center mb-8 lg:mb-12 animate-fadeIn">
            <div className="w-12 h-12 lg:w-16 lg:h-16 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full"></div>
            </div>
            <span className="ml-4 text-base lg:text-lg font-medium tracking-wide">{currentSlideData.subtitle}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-6 lg:mb-8 animate-slideInLeft">
            {currentSlideData.title.split(' ').slice(0, 3).join(' ')}
            <br />
            <span className="text-white/90">{currentSlideData.title.split(' ').slice(3).join(' ')}</span>
          </h1>

          {/* Description */}
          <p className="text-base lg:text-xl text-white/80 mb-8 lg:mb-12 max-w-xl leading-relaxed animate-slideInLeft" style={{animationDelay: '0.2s'}}>
            {currentSlideData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slideInLeft" style={{animationDelay: '0.4s'}}>
            <button className="group flex items-center justify-center sm:justify-start px-6 py-3 lg:px-8 lg:py-4 text-white/90 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300">
              <Link href={"/service"} className="mr-2">DISCOVER MORE</Link>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center justify-center sm:justify-start px-6 py-3 lg:px-8 lg:py-4 text-white/90 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300">
              <Link href={"/contact"} className="mr-2">CONTACT US</Link>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Content - Team Image */}
       
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8">
        <button className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
          <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Language/Settings indicator */}
      <div className="absolute bottom-8 right-24">
        <div className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-400 to-blue-400"></div>
        </div>
      </div>

      
    </div>
  );
}