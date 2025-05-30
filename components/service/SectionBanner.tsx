// components/SectionBanner.tsx
import Image from 'next/image';
import bannerBg from '@/public/assets/images/Développement web.jpg'; // remplace par ton image

export default function SectionBanner({ title }: { title: string }) {
  return (
    <div className="relative h-[300px] md:h-[400px] flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background image */}
      <Image
        src={bannerBg}
        alt={`${title} Banner`}
        layout="fill"
        objectFit="cover"
        className="z-0 brightness-50"
        priority
      />

      {/* Overlay Content */}
      <div className="z-10">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <div className="mt-4 text-lg flex justify-center items-center gap-2">
          <span className="text-gray-300">Service</span>
         
          <span className="text-white font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
}
