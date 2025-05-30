// components/ITProjects.tsx
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function ITProjects() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            See We Have Solution <br />
            Done <span className="text-purple-600">IT Projects</span>
          </h2>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            VIEW ALL PROJECTS →
          </Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/Développement web.jpg"
              alt="Backup project"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <h1  className='text-xl font-bold text-center' >Turbo delivers</h1>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/Développement web.jpg"
              alt="Cloud project"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <h1  className='text-xl font-bold text-center' >Union booking</h1>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/Développement web.jpg"
              alt="Team discussion"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <h1  className='text-xl font-bold text-center' >Union booking</h1>
          </div>
           <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/Développement web.jpg"
              alt="Team discussion"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <h1  className='text-xl font-bold text-center' >Union booking</h1>
          </div>
        </div>
      </div>
    </section>
  );
}