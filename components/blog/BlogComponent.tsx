"use client"
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Heart, MessageCircle, Share2 } from 'lucide-react';

export default function BlogComponent() {
  const [likedPosts, setLikedPosts] = useState(new Set());

  const toggleLike = (postId:number) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);
  };

  const blogPosts = [
    {
      id: 1,
      title: "Les tendances du design web en 2025",
      excerpt: "Découvrez les dernières innovations en matière de design web qui façonnent l'expérience utilisateur moderne et révolutionnent l'interaction digitale.",
      author: "Marie Dubois",
      date: "15 Mai 2025",
      readTime: "5 min",
      category: "Design",
      image: "/api/placeholder/400/250",
      likes: 42,
      comments: 8,
      featured: true,
      tags: ["UX/UI", "Tendances", "Web Design"]
    },
    {
      id: 2,
      title: "Optimisation SEO : Guide complet 2025",
      excerpt: "Maîtrisez les techniques avancées de référencement naturel pour propulser votre site web dans les premiers résultats de recherche.",
      author: "Thomas Martin",
      date: "12 Mai 2025",
      readTime: "8 min",
      category: "Marketing Digital",
      image: "/api/placeholder/400/250",
      likes: 67,
      comments: 15,
      featured: false,
      tags: ["SEO", "Marketing", "Analytics"]
    },
    {
      id: 3,
      title: "Intelligence Artificielle et créativité",
      excerpt: "Comment l'IA révolutionne le processus créatif et transforme la façon dont nous concevons les solutions digitales innovantes.",
      author: "Sophie Chen",
      date: "10 Mai 2025",
      readTime: "6 min",
      category: "Innovation",
      image: "/api/placeholder/400/250",
      likes: 89,
      comments: 23,
      featured: false,
      tags: ["IA", "Créativité", "Innovation"]
    },
    {
      id: 4,
      title: "E-commerce : Stratégies de conversion",
      excerpt: "Techniques éprouvées pour augmenter votre taux de conversion et maximiser vos ventes en ligne grâce à l'optimisation UX.",
      author: "Alexandre Roy",
      date: "8 Mai 2025",
      readTime: "7 min",
      category: "E-commerce",
      image: "/api/placeholder/400/250",
      likes: 34,
      comments: 12,
      featured: false,
      tags: ["E-commerce", "Conversion", "UX"]
    },
    {
      id: 5,
      title: "Sécurité web : Bonnes pratiques",
      excerpt: "Protégez efficacement vos applications web contre les menaces modernes avec ces techniques de sécurisation avancées.",
      author: "Lucas Bernard",
      date: "5 Mai 2025",
      readTime: "9 min",
      category: "Sécurité",
      image: "/api/placeholder/400/250",
      likes: 56,
      comments: 19,
      featured: false,
      tags: ["Sécurité", "Développement", "Best Practices"]
    },
    {
      id: 6,
      title: "Mobile First : L'avenir du web",
      excerpt: "Pourquoi adopter une approche mobile-first est devenu indispensable pour créer des expériences web performantes et engageantes.",
      author: "Emma Laurent",
      date: "3 Mai 2025",
      readTime: "4 min",
      category: "Mobile",
      image: "/api/placeholder/400/250",
      likes: 78,
      comments: 11,
      featured: false,
      tags: ["Mobile", "Responsive", "Performance"]
    }
  ];

  const categories = ["Tous", "Design", "Marketing Digital", "Innovation", "E-commerce", "Sécurité", "Mobile"];
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredPosts = selectedCategory === "Tous" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(to bottom right, #A537FF, #8B2CC8, #7A1CAC)'}}>
      {/* Header */}
      <div className="pt-16 pb-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Notre Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos derniers articles sur le design, le développement web, 
            le marketing digital et les innovations technologiques qui façonnent l&apos;avenir.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="relative group">
                {post.featured && (
                  <div className="absolute -top-4 left-4 z-10">
                    <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Article Vedette
                    </span>
                  </div>
                )}
                
                <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl transform transition-all duration-300 hover:scale-105 h-full" style={{'--hover-shadow': 'rgba(165, 55, 255, 0.2)'}} onMouseEnter={(e) => e.target.style.boxShadow = '0 25px 50px -12px rgba(165, 55, 255, 0.2)'} onMouseLeave={(e) => e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}>
                  {/* Image */}
                  <div className="relative h-48 flex items-center justify-center" style={{background: 'linear-gradient(to right, rgba(165, 55, 255, 0.2), rgba(139, 44, 200, 0.2))'}}>
                    <div className="text-6xl text-gray-600">📖</div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col h-full">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-white mb-3 transition-colors" style={{'--hover-color': '#A537FF'}} onMouseEnter={(e) => e.target.style.color = '#A537FF'} onMouseLeave={(e) => e.target.style.color = 'white'}>
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="text-white px-2 py-1 rounded text-xs" style={{backgroundColor: 'rgba(165, 55, 255, 0.5)'}}>
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => toggleLike(post.id)}
                          className={`flex items-center gap-1 text-sm transition-colors ${
                            likedPosts.has(post.id) 
                              ? 'text-red-400 hover:text-red-300' 
                              : 'text-gray-400 hover:text-red-400'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                          <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                        </button>
                        
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                        
                        <button className="flex items-center gap-1 text-sm text-gray-400 transition-colors" style={{'--hover-color': '#A537FF'}} onMouseEnter={(e) => e.target.style.color = '#A537FF'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button className="flex items-center gap-2 font-semibold text-sm transition-colors" style={{color: '#A537FF'}} onMouseEnter={(e) => e.target.style.color = '#8B2CC8'} onMouseLeave={(e) => e.target.style.color = '#A537FF'}>
                        Lire plus
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center pb-16">
        <button className="text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg" style={{background: 'linear-gradient(to right, #A537FF, #8B2CC8)'}} onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to right, #8B2CC8, #7A1CAC)'} onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to right, #A537FF, #8B2CC8)'}>
          Charger plus d&apos;articles
        </button>
      </div>
    </div>
  );
}