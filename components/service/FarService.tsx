"use client";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { service } from "@/data/service";
import ServiceCard from "./ServiceCard";

export default function FarService() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 py-16 px-4 relative overflow-hidden">
      <div className="space-y-4 text-center py-28">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Le contenu de nos
          <span className="block text-purple-600">Services</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/Développement web.jpg"
                alt="Developer working on computer"
                className="w-full h-96 lg:h-[500px] object-cover"
                width={800}
                height={500}
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg transform rotate-45 opacity-30"></div>
            <div className="absolute top-8 right-8 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-16 left-8 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Right Side - Services List */}
          <div className="space-y-8">
            <div className="space-y-3">
              {service.map((item) => (
                <ServiceCard
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  imageLink={item.imageLink}
                  service={item.service}
                  hoveredService={hoveredService}
                  setHoveredService={setHoveredService}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-lg"></div>
      <div className="absolute top-1/4 right-20 w-6 h-6 bg-purple-400 rounded transform rotate-45 opacity-40"></div>
      <div className="absolute bottom-1/3 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-50"></div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  );
}
