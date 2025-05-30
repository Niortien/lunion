"use client"
import Image from "next/image"
import { TestimonialCarousel, testimonialsData } from "../ui/TestimonialCarousel"

export default function Testimonials() {
  return (
    <section className="bg-[#0F0C29] text-white py-16 px-6 relative bottom-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Texte à gauche */}
        <div>
          <p className="text-sm text-purple-400 uppercase font-semibold mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Let’s Hear What The <br />
            Customers <span className="text-purple-500">Are Saying</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Appropriately envisioner leveraged information through 2.0
            communities. Synergistically parallel task inexpensive products
            whereas cross-media ideas.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-5 rounded-lg transition duration-300">
            VIEW MORE →
          </button>
        </div>

        {/* Carte témoignage à droite */}
        <TestimonialCarousel testimonials={testimonialsData} />
      </div>

      {/* Liste verticale d’avatars à droite */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        {["avatar1.jpg", "avatar2.jpg", "avatar3.jpg", "avatar4.jpg"].map(
          (img, idx) => (
            <Image
              key={idx}
              src={`/assets/images/${img}`}
              alt={`avatar-${idx}`}
              width={40}
              height={40}
              className="rounded-full border-2 border-white object-cover"
            />
          )
        )}
      </div>
    </section>
  )
}
