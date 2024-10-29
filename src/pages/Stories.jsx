import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Stories = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Success Stories Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-white">
            Real stories of impact and transformation
          </p>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Building Hope: Sarah's Journey",
                image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                date: "March 15, 2024",
                author: "Emma Thompson",
                excerpt: "How one woman's determination transformed her community through education..."
              },
              {
                title: "Clean Water Changes Lives",
                image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                date: "March 10, 2024",
                author: "John Martinez",
                excerpt: "A remote village's journey to accessing clean water and improved health..."
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {story.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {story.author}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <button className="text-rose-600 font-semibold hover:text-rose-700 transition flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Stories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare for All",
                image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                date: "March 5, 2024",
                excerpt: "Mobile clinics bringing healthcare to remote communities..."
              },
              {
                title: "Empowering Youth",
                image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                date: "March 1, 2024",
                excerpt: "Skills training program transforms young lives..."
              },
              {
                title: "Sustainable Farming",
                image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                date: "February 28, 2024",
                excerpt: "Community-led agriculture project ensures food security..."
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{story.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <button className="text-rose-600 font-semibold hover:text-rose-700 transition flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 bg-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Have a Story to Share?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            We'd love to hear how our programs have impacted your life or community.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
          >
            Share Your Story
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Stories;