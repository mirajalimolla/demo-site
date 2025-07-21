import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Dumbbell, 
  Users, 
  Apple, 
  Monitor, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                Iron Pulse Gym
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-orange-900/20"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your{' '}
            <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
              Body
            </span>
            <br />
            Transform Your{' '}
            <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              Life
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Unleash your potential at Iron Pulse Gym. State-of-the-art equipment, expert trainers, and a community that pushes you to excel.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="group bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Join Now
            <ChevronRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">Iron Pulse</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Founded in 2018, Iron Pulse Gym was born from a simple belief: fitness should be accessible, motivating, and transformative. We're more than just a gym – we're a community of dedicated individuals pushing each other to reach new heights.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Our state-of-the-art facility combines cutting-edge equipment with expert guidance to create an environment where everyone can thrive, regardless of their fitness level.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Our Mission</h3>
                  <p className="text-gray-300">
                    To empower individuals to achieve their fitness goals through innovative training methods, expert guidance, and unwavering support.
                  </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-400 mb-3">Our Vision</h3>
                  <p className="text-gray-300">
                    To be the leading fitness destination that transforms lives, builds confidence, and creates a healthier community.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-lg transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Modern gym interior"
                className="relative rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive fitness solutions tailored to your goals and lifestyle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Dumbbell className="h-12 w-12" />,
                emoji: '💪',
                title: 'Personal Training',
                description: 'One-on-one sessions with certified trainers tailored to your specific goals and fitness level.'
              },
              {
                icon: <Users className="h-12 w-12" />,
                emoji: '🧘',
                title: 'Group Classes',
                description: 'High-energy group workouts including HIIT, yoga, spinning, and strength training classes.'
              },
              {
                icon: <Apple className="h-12 w-12" />,
                emoji: '🍎',
                title: 'Nutrition Plans',
                description: 'Custom meal plans and nutritional guidance to fuel your workouts and optimize results.'
              },
              {
                icon: <Monitor className="h-12 w-12" />,
                emoji: '💻',
                title: 'Online Coaching',
                description: 'Virtual training sessions and 24/7 support to keep you on track wherever you are.'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.emoji}</div>
                  <div className="text-blue-400 mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">Facility</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
              'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
              'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
              'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
              'https://images.pexels.com/photos/1552248/pexels-photo-1552248.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
              'https://images.pexels.com/photos/1552244/pexels-photo-1552244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
              'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
              'https://images.pexels.com/photos/1552245/pexels-photo-1552245.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
            ].map((src, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={src}
                  alt={`Gym facility ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              What Our <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">Members</span> Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Marketing Executive',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
                rating: 5,
                testimonial: 'Iron Pulse transformed my entire approach to fitness. The trainers are incredibly knowledgeable and the community is so supportive. I\'ve never felt stronger!'
              },
              {
                name: 'Mike Rodriguez',
                role: 'Software Engineer',
                image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
                rating: 5,
                testimonial: 'After years of struggling with consistency, Iron Pulse made fitness enjoyable. The variety of classes keeps me engaged and the results speak for themselves.'
              },
              {
                name: 'Jessica Chen',
                role: 'Teacher',
                image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
                rating: 5,
                testimonial: 'The personal training program helped me recover from an injury and become stronger than ever. The attention to detail and care is unmatched.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Get <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">Started</span> Today
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Ready to Transform Your Life?</h3>
              
              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-lg mb-8">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-8 w-8 text-white mr-3" />
                  <div>
                    <h4 className="text-xl font-bold text-white">Chat with us now!</h4>
                    <p className="text-green-100">Get instant answers to your questions</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/1234567890?text=Hi! I'm interested in joining Iron Pulse Gym"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200 inline-block"
                >
                  Start WhatsApp Chat
                </a>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">info@ironpulsegym.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">123 Fitness Street, Muscle City, MC 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400"
                    placeholder="Tell us about your fitness goals..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                Iron Pulse Gym
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Transform Your Body, Transform Your Life
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Iron Pulse Gym. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;