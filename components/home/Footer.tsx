// components/Footer.tsx
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

import logo from "../../public/assets/images/logo.png"


const Footer = () => {
  return (
    <footer className="bg-[#0B0E1E] text-white px-6 md:px-20 py-16 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4 relative inline-block after:absolute after:left-0 after:bottom-0 after:w-1/2 after:h-0.5 after:bg-purple-500 after:rounded-full after:content-['']">
           <Image src={logo} alt={"logo-footer"} className="w-36 h-14 object-cover rounded" />
          </h3>
          <p className="text-gray-400 text-sm mt-4">
          Bienvenue chez Lunion Lab, votre partenaire de confiance pour la transformation numérique basée à Abidjan. Spécialisée dans l`&apos; innovation numérique, notre start-up est dédiée à offrir des solutions sur mesure aux entreprises,
           les aidant à prospérer dans un monde de plus en plus numérisé.
          </p>
          <div className="flex gap-4 mt-6">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaLinkedinIn />} />
            <SocialIcon icon={<FaWhatsapp />} />
            <SocialIcon icon={<FaYoutube />} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <SectionTitle title="QUICK LINKS" />
          <ul className="text-gray-300 mt-4 space-y-2">
            {["A propos", "Services", "Nos project", "Help & FAQs", "Contact "].map((link, index) => (
              <li key={index} className="flex items-center gap-2 hover:text-purple-500 transition">
                <FaChevronRight className="text-sm" />
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* IT Services */}
        <div>
          <SectionTitle title="IT SERVICES" />
          <ul className="text-gray-300 mt-4 space-y-2">
            {["Web Development", "Business Development", "Product Management", "UI/UX Design", "Cloud services"].map((service, index) => (
              <li key={index} className="flex items-center gap-2 hover:text-purple-500 transition">
                <FaChevronRight className="text-sm" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <SectionTitle title="RECENT POSTS" />
          <div className="mt-6 space-y-4">
            <PostPreview
              image="/images/blog1.jpg"
              title="Unsatiable Entreaties May Collecting Power."
              date="21 June, 2024"
            />
            <PostPreview
              image="/images/blog2.jpg"
              title="Regional Manager Limited Time Management."
              date="22 June, 2024"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="p-2 border border-gray-500 rounded-full hover:bg-purple-600 transition cursor-pointer">
    {icon}
  </div>
);

const SectionTitle = ({ title }: { title: string }) => (
  <h3 className="text-xl font-bold mb-4 relative inline-block after:absolute after:left-0 after:bottom-0 after:w-1/2 after:h-0.5 after:bg-purple-500 after:rounded-full after:content-['']">
    {title}
  </h3>
);

const PostPreview = ({  title, date }: { image: string; title: string; date: string }) => (
  <div className="flex gap-4">
    <Image src={logo} alt={title} className="w-36 h-10 object-cover rounded" />
    <div>
      <p className="text-white font-semibold text-sm leading-snug">{title}</p>
      <div className="text-gray-400 text-xs flex items-center gap-2 mt-1">
        <FaRegCalendarAlt />
        {date}
      </div>
    </div>
  </div>
);

export default Footer;
