"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FileCheck, Smile, Users, Award, ArrowUp } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experts: 0,
    awards: 0
  });

  const sectionRef = useRef(null);

  const stats = [
    {
      icon: FileCheck,
      count: 986,
      label: "Finished Project",
      key: "projects"
    },
    {
      icon: Smile,
      count: 896,
      label: "Happy Clients",
      key: "clients"
    },
    {
      icon: Users,
      count: 396,
      label: "Skilled Experts",
      key: "experts"
    },
    {
      icon: Award,
      count: 496,
      label: "Honorable Awards",
      key: "awards"
    }
  ];

  // Animation counter function
  const animateCounter = (start, end, duration, key) => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);
      setCounts(prev => ({
        ...prev,
        [key]: current
      }));
      if (progress >= 1) clearInterval(timer);
    }, 16);
  };

  // Trigger animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          stats.forEach((stat, index) => {
            setTimeout(() => {
              animateCounter(0, stat.count, 2000, stat.key);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500/20 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-purple-500/20 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-purple-500/10 rounded-full"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-20 right-0 w-96 h-0.5 bg-gradient-to-l from-blue-500/30 to-transparent rotate-12"></div>
          <div className="absolute bottom-20 left-0 w-96 h-0.5 bg-gradient-to-r from-purple-500/30 to-transparent -rotate-12"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group text-center transform hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                }}
              >
                <div className="relative mb-6 flex justify-center">
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
                  </div>
                  <div
                    className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                    style={{
                      clipPath:
                        'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-purple-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-5xl lg:text-6xl font-bold text-white block leading-none">
                    {counts[stat.key].toLocaleString()}+
                  </span>
                </div>

                <p className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>

                <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default StatsSection;
