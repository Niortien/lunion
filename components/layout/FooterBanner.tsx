import { Phone, Mail, MapPin } from 'lucide-react';
import logo from "../../public/assets/images/logo.png"
import Image from 'next/image';
export default function FooterBanner() {
  return (
    <div className="bg-slate-800 text-white py-4 px-6 relative overflow-hidden">
      {/* Diagonal purple accent */}
      <div className="absolute left-0 top-0 bottom-0 w-80 bg-gradient-to-r from-purple-600 to-purple-500 transform -skew-x-12 -translate-x-20"></div>
      
      {/* Logo section */}
      <div className="relative z-10 flex items-center justify-between">
       <div className='h-5 w-40'>
        <Image
        src={logo}
        alt='logo-banner'
        className='object-cover'
        />
       </div>

        {/* Contact info */}
        <div className="flex items-center space-x-8">
          {/* Phone */}
          <div className="flex items-center space-x-3">
            <div className="bg-white p-3 rounded-lg">
              <Phone className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-purple-300 text-sm font-medium">Appelez-nous rapidement:</p>
              <p className="text-white font-semibold">+190-8800-0393</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <div className="bg-white p-3 rounded-lg">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-purple-300 text-sm font-medium">Envoyez-nous un mail sur:</p>
              <p className="text-white font-semibold">info@lunionlab.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-3">
            <div className="bg-white p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-purple-300 text-sm font-medium">Visitez l&apos emplacement:</p>
              <p className="text-white font-semibold">Abidjan, Côte d&apos ivoire </p>
            </div>
          </div>
        </div>

        {/* Globe icon */}
        <div className="text-purple-300">
          <div className="w-8 h-8 border-2 border-purple-300 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 border border-purple-300 rounded-full relative">
              <div className="absolute inset-0 border-l border-purple-300"></div>
              <div className="absolute inset-0 border-r border-purple-300"></div>
              <div className="absolute top-1/2 left-0 right-0 border-t border-purple-300 transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}