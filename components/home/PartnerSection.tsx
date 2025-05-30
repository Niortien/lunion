"use client"
import { useState, useEffect } from 'react'

export default function PartnerSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const logos = [
    {
      name: "TURBO",
      tagline: "Entreprise de livraison",
      icon: (
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
        </div>
      )
    },
    {
      name: "CHIKEN NATION",
      tagline: "tagline here",
      icon: (
        <div className="relative">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          </div>
          <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
          <div className="absolute -bottom-1 left-2 w-1 h-1 bg-purple-300 rounded-full"></div>
        </div>
      )
    },
    {
      name: "Novis Coworking",
      tagline: "company tagline",
      icon: (
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="ml-1 flex flex-col space-y-0.5">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
          </div>
        </div>
      )
    },
    {
      name: "Amenity Group",
      tagline: "tech slogan",
      icon: (
        <div className="grid grid-cols-2 gap-0.5">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
        </div>
      )
    }
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Fonction pour générer des bulles flottantes aléatoirement
  const FloatingBubbles = () => {
    const bubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.3 + 0.1,
      duration: Math.random() * 20 + 10
    }))

    return (
      <>
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full bg-gradient-to-br from-blue-200 to-purple-200 animate-pulse"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              opacity: bubble.opacity,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </>
    )
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Bulles flottantes en arrière-plan */}
      <FloatingBubbles />
      
      {/* Effet de parallax avec la souris */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
        }}
      />

      {/* Conteneur principal des logos */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl w-full">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-white/90 border border-white/20"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Effet de brillance au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
              
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icône */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="scale-150">
                    {logo.icon}
                  </div>
                </div>
                
                {/* Nom de la marque */}
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {logo.name}
                </h3>
                
                {/* Tagline */}
                <p className="text-gray-500 text-sm lg:text-base group-hover:text-gray-600 transition-colors duration-300">
                  {logo.tagline}
                </p>
              </div>

              {/* Indicateurs décoratifs */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Éléments décoratifs fixes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-blue-400 rounded transform rotate-45 opacity-40 animate-bounce" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-purple-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '3s' }} />
      
      {/* Effet de chat bubble en haut à droite */}
      <div className="fixed top-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group cursor-pointer z-50">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}