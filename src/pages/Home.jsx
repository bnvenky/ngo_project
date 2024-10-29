import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Heart, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Making a Difference,<br />One Life at a Time
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in our mission to create positive change and build a better future for communities worldwide.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-rose-700 transition flex items-center space-x-2 mx-auto"
            >
              <span>Get Involved</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="text-center p-6 rounded-lg shadow-lg"
            >
              <Users className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">10K+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="text-center p-6 rounded-lg shadow-lg"
            >
              <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="text-center p-6 rounded-lg shadow-lg"
            >
              <Globe className="h-12 w-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Countries Reached</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Clean Water Initiative",
                image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                description: "Providing clean water access to remote communities."
              },
              {
                title: "Education for All",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                description: "Supporting education in underprivileged areas."
              },
              {
                title: "Healthcare Outreach",
                image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                description: "Bringing medical care to remote communities."
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="text-rose-600 font-semibold hover:text-rose-700 transition">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Your support can help us continue our mission of creating positive change in communities worldwide.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
          >
            Donate Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;