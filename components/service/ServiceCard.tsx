"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ Correct pour App Router
import React from "react";

type ServiceProps = {
  id: number;
  description: string;
  imageLink: string;
  service: string;
  hoveredService: number | null;
  setHoveredService: (id: number | null) => void;
};

const ServiceCard: React.FC<ServiceProps> = ({
  id,
  service,
  hoveredService,
  setHoveredService,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/service/service-detail/${id}`);
  };

  return (
    <div
      onMouseEnter={() => setHoveredService(id)}
      onMouseLeave={() => setHoveredService(null)}
      onClick={handleClick}
      className={`group flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 ${
        hoveredService === id
          ? "border-purple-500 transform translate-x-2"
          : "border-transparent hover:border-purple-300"
      }`}
    >
      <span
        className={`text-lg font-medium transition-colors duration-300 ${
          hoveredService === id ? "text-purple-600" : "text-gray-700"
        }`}
      >
        {service}
      </span>

      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          hoveredService === id
            ? "bg-purple-500 shadow-lg scale-110"
            : "bg-gray-100 group-hover:bg-purple-100"
        }`}
      >
        <ArrowRight
          className={`w-5 h-5 transition-all duration-300 ${
            hoveredService === id
              ? "text-white transform translate-x-1"
              : "text-gray-400 group-hover:text-purple-500"
          }`}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
