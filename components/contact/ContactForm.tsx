"use client"
import { useState } from 'react'
import { User, Mail, Phone, MessageSquare, ChevronDown, ArrowUp } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  })
  const [isSubjectOpen, setIsSubjectOpen] = useState(false)

  const subjects = [
    'General Inquiry',
    'Business Partnership',
    'Technical Support',
    'Sales Question',
    'Other'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubjectSelect = (subject: string) => {
    setFormData({
      ...formData,
      subject: subject
    })
    setIsSubjectOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 opacity-80">
        <div className="relative w-full h-full">
          {/* Phone Mockup */}
          <div className="absolute top-0 right-8 w-48 h-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl transform rotate-12">
            <div className="p-4 h-full flex flex-col">
              <div className="w-full h-8 bg-blue-400 rounded-lg mb-4 opacity-80"></div>
              <div className="flex-1 space-y-3">
                <div className="w-3/4 h-4 bg-white rounded opacity-60"></div>
                <div className="w-full h-4 bg-white rounded opacity-40"></div>
                <div className="w-1/2 h-4 bg-white rounded opacity-60"></div>
              </div>
              <div className="w-12 h-12 bg-red-400 rounded-full absolute bottom-8 right-4"></div>
            </div>
          </div>

          {/* Abstract Shapes */}
          <div className="absolute top-32 right-32 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-70"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg transform rotate-45 opacity-60"></div>
          <div className="absolute top-48 right-64 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
           Vous avez des questions ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
           Désintermédier avec enthousiasme le leadership individuel via le commerce électronique. Réintermédier radicalement des améliorations
            de processus convaincantes plutôt que des relations renforcées.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* First Row - Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 pl-14"
                    required
                  />
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 pl-14"
                    required
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Second Row - Subject and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Custom Select for Subject */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-left flex items-center justify-between"
                  >
                    <span className={formData.subject ? 'text-gray-800' : 'text-gray-500'}>
                      {formData.subject || 'Select Subject'}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        isSubjectOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isSubjectOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg z-20">
                      {subjects.map((subject, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleSubjectSelect(subject)}
                          className="w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                        >
                          {subject}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 pl-14"
                  />
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 pl-14 resize-none"
                  required
                ></textarea>
                <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full opacity-20 -translate-x-16 translate-y-16"></div>
      <div className="absolute top-1/4 left-8 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
    </div>
  )
}
