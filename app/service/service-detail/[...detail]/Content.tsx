import PricingPlans from '@/components/service/PricingPlans';
import Image from 'next/image';
import React from 'react';

type ServiceProps = {
  id: number;
  description: string;
  imageLink: string;
  service: string;
};

const Content = ({ id, service, description, imageLink }: ServiceProps) => {
  return (
    <div className="text-gray-800">
      {/* Banner Image */}
      <div className="relative h-[300px] md:h-[450px] w-full flex items-center justify-center overflow-hidden rounded-b-3xl shadow-lg">
        <Image
          src={imageLink}
          alt={`Image du service ${service}`}
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          priority
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
            {service}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <div className="text-center">
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Service  : {id}
          </span>
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-justify">
          {description}
        </p>

        {/* Optional: CTA */}
        <div className="text-center mt-10">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg">
            Demander ce service
          </button>
        </div>
      </div>
       <PricingPlans />
    </div>
  );
};

export default Content;
