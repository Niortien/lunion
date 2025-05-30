"use client"

import { MapPin, Phone, Mail, ArrowUp } from "lucide-react"

export default function ContactSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const contactCards = [
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "Notre adresse de bureau ",
      content: (
        <>
          Cocody-faya,<br />
          Côte d`&apos;ivoire
        </>
      ),
    },
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Appelez-nous à tout moment",
      content: (
        <>
          <p>(+225) 485-965-789</p>
          <p>+225 485-965-789</p>
        </>
      ),
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Envoyer un e-mail",
      content: (
        <>
          <p>info@example.com</p>
          <p>info@webteck.com</p>
        </>
      ),
    },
  ]

  return (
    <div className="bg-gray-50 py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{card.title}</h3>
              <div className="text-gray-600 leading-relaxed">{card.content}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-100 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-200 rounded-full opacity-30 translate-x-12 translate-y-12"></div>
    </div>
  )
}
