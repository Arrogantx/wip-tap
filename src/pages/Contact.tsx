import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We'd love to hear from you. Let's discuss how we can help grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <ContactInfo
                icon={Phone}
                title="Phone"
                content="+1 (123) 456-7890"
                link="tel:+11234567890"
              />
              <ContactInfo
                icon={Mail}
                title="Email"
                content="contact@onetapxmedia.com"
                link="mailto:contact@onetapxmedia.com"
              />
              <ContactInfo
                icon={Clock}
                title="Business Hours"
                content="Monday - Friday: 9:00 AM - 6:00 PM"
              />
              <ContactInfo
                icon={MessageSquare}
                title="Live Chat"
                content="Chat with our support team"
                link="#"
                isButton
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            {/* Replace with actual map implementation */}
            <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Map Integration</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactInfo = ({ icon: Icon, title, content, link, isButton }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-primary-600" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {link ? (
        isButton ? (
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            {content}
          </button>
        ) : (
          <a
            href={link}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            {content}
          </a>
        )
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;