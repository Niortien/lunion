"use client"

import { useState } from 'react'
import { Plus, Minus, ArrowUp } from 'lucide-react'
import Link from 'next/link'

export default function FAQSection() {
  const [openItem, setOpenItem] = useState(0) // Premier item ouvert par défaut

  const faqData = [
    {
      question: "Quels services proposez-vous ?",
      answer: "Nous offrons une gamme complète de services de transformation numérique, y compris le développement d'applications et de logiciels, la migration vers le Cloud, l'automatisation des processus, la sécurité et la conformité. Nous proposons également des services de marketing digital, de communication d'entreprise, et de production audiovisuelle.."
    },
    {
      question: "Comment puis-je choisir le package qui convient le mieux à mon entreprise  ?",
      answer: "Nos packages sont conçus pour répondre à différents besoins et budgets. Le package 'Starter' est idéal pour les petites entreprises ou les projets de démarrage, tandis que les packages 'Business' et 'Corporate' sont plus adaptés aux entreprises de taille moyenne à grande avec des besoins plus complexes. N'hésitez pas à nous contacter pour une consultation afin de déterminer quel package répond le mieux à vos besoins spécifiques."
    },
    {
      question: "Quels sont les délais de mise en œuvre pour vos services ? »",
      answer: "Les délais de mise en œuvre varient en fonction de la complexité du projet et du service choisi. En général, nous fournissons des estimations de temps lors de la phase de consultation. Nous nous efforçons toujours de respecter les délais convenus et de vous tenir informé de l'avancement de votre projet.."
    },
    {
      question: "Offrez-vous des services de support après la mise en œuvre ?",
      answer: "Oui, nous proposons des services de support après la mise en œuvre pour garantir que tout fonctionne correctement et pour résoudre tout problème éventuel. Notre objectif est de vous assurer une expérience sans souci et de vous aider à maximiser les avantages de nos solutionsNos services de marketing digital incluent l'optimisation SEO, le marketing sur les réseaux sociaux, la création de contenu, la publicité PPC, les campagnes d'e-mailing et les rapports d'analyse. Nous élaborons des stratégies personnalisées en fonction de votre public cible et de vos objectifs commerciaux afin d'optimiser votre présence en ligne et votre retour sur investissement."
    },
    {
      question: "Comment puis-je entrer en contact avec vous ?Comment assurez-vous la qualité et les délais des projets ?",
      answer: "Vous pouvez nous contacter via notre formulaire de contact sur le site web, par email à [votre email], ou par téléphone au [votre numéro de téléphone]. Nous serons ravis de répondre à toutes vos questions et de discuter de vos besoins en détailNous suivons des méthodologies agiles avec des revues de sprint régulières, maintenons une communication transparente grâce à des outils de gestion de projet, effectuons des tests approfondis à chaque phase et disposons de processus d'assurance qualité dédiés. Notre équipe fournit des rapports d'avancement hebdomadaires et prévoit des marges de manœuvre pour les imprévus."
    }
    ,
     {
      question: "Quels types d'entreprises pouvez-vous aider  ?",
      answer: "Nous travaillons avec des entreprises de toutes tailles et de divers secteurs, y compris le secteur public, industriel, la santé, l'éducation, la banque et l'assurance. Nous adaptons nos solutions en fonction des spécificités de chaque secteur pour répondre au mieux aux défis uniques de nos clients."
    }
  ]

  const toggleItem = (index:number) => {
    setOpenItem(openItem === index ? -1 : index)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-white py-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
           Questions sur le service
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Trouvez des réponses aux questions fréquemment posées sur nos services et sur la manière dont nous pouvons aider votre entreprise à se développer.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(index)}
                className={`w-full px-6 py-6 text-left flex items-center justify-between transition-all duration-300 ${
                  openItem === index 
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white' 
                    : 'bg-white text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg font-semibold pr-4">
                  {item.question}
                </span>
                
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openItem === index 
                    ? 'bg-white bg-opacity-20' 
                    : 'bg-gray-100'
                }`}>
                  {openItem === index ? (
                    <Minus className={`w-5 h-5 text-white`} />
                  ) : (
                    <Plus className={`w-5 h-5 text-gray-600`} />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div className={`transition-all duration-500 ease-in-out ${
                openItem === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6 pt-2">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-purple-100 mb-6">
             Notre équipe est là pour vous aider à répondre à toutes vos questions supplémentaires.
            </p>
            <Link href={'/contact'} className="bg-white text-purple-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contacter l'assistance
            </Link>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-purple-300 transform rotate-45 opacity-40"></div>
      <div className="absolute bottom-1/4 left-16 w-4 h-4 bg-blue-300 rounded-full opacity-50"></div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  )
}
