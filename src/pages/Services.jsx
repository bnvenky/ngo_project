import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Globe, Users, Droplet, Home } from 'lucide-react';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Services Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white">
            Making a difference through targeted programs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Education Programs",
                description: "Providing quality education and learning resources to underprivileged communities.",
                color: "bg-blue-50"
              },
              {
                icon: Heart,
                title: "Healthcare Services",
                description: "Delivering essential medical care and health education to those in need.",
                color: "bg-rose-50"
              },
              {
                icon: Droplet,
                title: "Clean Water Projects",
                description: "Implementing sustainable water solutions for communities lacking access.",
                color: "bg-cyan-50"
              },
              {
                icon: Home,
                title: "Housing Support",
                description: "Building and renovating homes for families in challenging circumstances.",
                color: "bg-amber-50"
              },
              {
                icon: Users,
                title: "Community Development",
                description: "Fostering sustainable growth through local empowerment initiatives.",
                color: "bg-green-50"
              },
              {
                icon: Globe,
                title: "Global Outreach",
                description: "Extending our impact through international partnerships and programs.",
                color: "bg-purple-50"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`${service.color} p-6 rounded-lg`}
              >
                <service.icon className="h-12 w-12 text-rose-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our approach ensures sustainable impact and lasting change in the communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "We carefully evaluate community needs and resources."
              },
              {
                step: "2",
                title: "Planning",
                description: "Develop comprehensive strategies with local partners."
              },
              {
                step: "3",
                title: "Implementation",
                description: "Execute programs with community involvement."
              },
              {
                step: "4",
                title: "Monitoring",
                description: "Continuous evaluation and improvement of impact."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join us in our mission to create positive change. Together, we can make a difference.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
          >
            Get Involved
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Services;