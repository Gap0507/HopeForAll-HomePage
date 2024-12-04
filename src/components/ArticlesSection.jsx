import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  FileText, 
  ChevronRight
} from 'lucide-react';

const articlesData = [
    {
        id: 1,
        title: "Precision Medicine in Cancer Treatment",
        source: "National Cancer Institute",
        readTime: "8 min read",
        category: "Treatment Innovation",
        excerpt: "A comprehensive exploration of personalized cancer treatments, highlighting how genetic profiling and targeted therapies are revolutionizing oncology.",
        fullArticleLink: "https://www.cancer.gov/about-cancer/treatment/types/precision-medicine",
        backgroundGradient: "from-blue-100 via-blue-50 to-white",
        iconBg: "bg-blue-500/10 text-blue-600"
      },
      {
        id: 2,
        title: "Emerging Cancer Treatments: Global Perspectives",
        source: "World Health Organization",
        readTime: "8 min read",
        category: "Treatment",
        excerpt: "In-depth exploration of innovative cancer treatments, focusing on accessibility, technological advances, and global health implications.",
        fullArticleLink: "https://www.who.int/news-room/fact-sheets/detail/cancer",
        backgroundGradient: "from-purple-100 via-purple-50 to-white",
        iconBg: "bg-purple-500/10 text-purple-600"
      },
  {
    id: 3,
    title: "Cancer Prevention: A Comprehensive Global Approach",
    source: "World Health Organization",
    readTime: "6 min read",
    category: "Prevention",
    excerpt: "Exploring evidence-based strategies for cancer prevention, including lifestyle modifications, screening programs, and risk reduction techniques.",
    fullArticleLink: "https://www.who.int/teams/noncommunicable-diseases/cancer",
    backgroundGradient: "from-green-100 via-green-50 to-white",
    iconBg: "bg-green-500/10 text-green-600"
  },
];

const ArticlesSection = () => {
  const [activeArticle, setActiveArticle] = useState(0);

  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6 lg:px-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
          Insights & <span className="text-teal-400">Knowledge</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto">
          Empowering through understanding: Curated articles to guide and inform about cancer
        </p>
      </div>

      {/* Articles Layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 relative z-10">
        {articlesData.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.2, 
              duration: 0.5, 
              type: "spring", 
              stiffness: 100 
            }}
            className={`relative group cursor-pointer 
              ${index === activeArticle ? 'lg:scale-105' : ''}
              transition-all duration-300 ease-in-out`}
            onMouseEnter={() => setActiveArticle(index)}
          >
            <div 
              className={`bg-gradient-to-br ${article.backgroundGradient} 
                rounded-2xl shadow-xl p-6 h-full relative overflow-hidden 
                border-2 ${
                  index === activeArticle 
                    ? 'border-teal-500' 
                    : 'border-transparent hover:border-teal-200'
                } transition-all duration-300`}
            >
              {/* Article Icons */}
              <div className="flex justify-between items-center mb-4">
                <div className={`${article.iconBg} p-3 rounded-full`}>
                  <FileText strokeWidth={1.5} size={32} />
                </div>
                <div className="flex items-center text-gray-600 space-x-2">
                  <Clock size={16} />
                  <span className="text-sm">{article.readTime}</span>
                </div>
              </div>

              {/* Article Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition">
                {article.title}
              </h3>
              <p className="text-gray-700 text-base mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Article Footer */}
              <div className="flex justify-between items-center mt-auto">
                <span className="text-sm text-gray-500 flex items-center">
                  <BookOpen size={16} className="mr-2" />
                  {article.source}
                </span>
                <a 
                  href={article.fullArticleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800 
                    flex items-center font-semibold group"
                >
                  Read More
                  <ChevronRight 
                    size={20} 
                    className="transform transition-transform group-hover:translate-x-1" 
                  />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;