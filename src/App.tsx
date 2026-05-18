import React, { useState } from 'react';
import { 
  Menu, X, Phone, MapPin, Clock, Calendar, 
  Stethoscope, Sparkles, Activity, PlusSquare, 
  Search, ArrowRight, CheckCircle2, ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/256708927914" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1ebe57] hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={32} />
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}dental-solutionz-icon.png`} alt="Dental Solutionz Logo" className="h-15 w-15 object-contain" />
            <span className="text-2xl font-bold text-navy-500 tracking-tight">Dental Solutionz</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-navy-500 font-medium transition-colors">Services</a>
            <a href="#education" className="text-gray-600 hover:text-navy-500 font-medium transition-colors">Dental Education</a>
            <a href="#gallery" className="text-gray-600 hover:text-navy-500 font-medium transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-600 hover:text-navy-500 font-medium transition-colors">Contact</a>
            <button className="bg-navy-500 text-white px-6 py-2.5 rounded hover:bg-navy-600 transition-colors font-medium">
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy-500 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#services" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-navy-500">Services</a>
            <a href="#education" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-navy-500">Dental Education</a>
            <a href="#gallery" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-navy-500">Gallery</a>
            <a href="#contact" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-navy-500">Contact</a>
            <button className="w-full mt-4 bg-navy-500 text-white px-6 py-3 rounded text-center font-medium">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center mt-20 md:mt-0">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}dental-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-navy-700/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Your Journey to a Confident, Healthy Smile Starts Here
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            From routine checkups and preventive education to advanced cosmetic smile transformations. We provide exceptional care in a comfortable, modern environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white text-navy-700 px-8 py-4 rounded font-semibold hover:bg-gray-50 transition-colors text-lg">
              Book a Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white/10 transition-colors text-lg">
              Explore Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const servicesList = [
    { title: "Teeth Cleaning & Prevention", desc: "Routine cleanings and exams to keep your gums and teeth healthy year-round.", icon: <Activity strokeWidth={1.5} size={32} /> },
    { title: "Cosmetic Dentistry", desc: "Veneers, teeth whitening, and complete smile makeovers for a brilliant look.", icon: <Sparkles strokeWidth={1.5} size={32} /> },
    { title: "Dental Fillings & Cementing", desc: "Durable, tooth-colored restorations that blend seamlessly with your natural smile.", icon: <CheckCircle2 strokeWidth={1.5} size={32} /> },
    { title: "Dental Crowns & Bridges", desc: "Restore damaged or missing teeth with custom-crafted, long-lasting caps.", icon: <PlusSquare strokeWidth={1.5} size={32} /> },
    { title: "Dental Implants", desc: "Permanent, functional replacements for missing teeth that look fully natural.", icon: <PlusSquare strokeWidth={1.5} size={32} /> },
    { title: "Root Canal Treatment", desc: "Comfortable endodontic care to relieve pain and save your natural tooth.", icon: <Stethoscope strokeWidth={1.5} size={32} /> },
    { title: "Oral Surgery", desc: "Safe, expert tooth extractions including wisdom teeth removal.", icon: <CheckCircle2 strokeWidth={1.5} size={32} /> },
    { title: "Periodontal Treatment", desc: "Advanced care and scaling to treat gum disease and improve oral foundation.", icon: <Activity strokeWidth={1.5} size={32} /> },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4 tracking-tight">Our Specialized Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl">Comprehensive dental care tailored to your unique needs, delivered with precision and empathy.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start group"
            >
              <div className="text-navy-500 mb-6 bg-navy-50/50 p-4 rounded group-hover:bg-navy-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationHub = () => {
  const articles = [
    { title: "How Often Should You Really Get a Cleaning?", category: "Prevention", img: `${import.meta.env.BASE_URL}teeth-cleaning.jpg` },
    { title: "The Science Behind a Safe Teeth Whitening", category: "Cosmetic", img: `${import.meta.env.BASE_URL}teeth-whitening.jpg` },
    { title: "What to Expect During a Root Canal", category: "Treatment", img: `${import.meta.env.BASE_URL}root-canal.jpg` },
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4 tracking-tight">Dental Knowledge Hub</h2>
            <p className="text-lg text-gray-600">Explore our library of articles designed to help you make informed decisions about your oral health.</p>
          </div>
          <div className="relative max-w-sm w-full">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-12 pr-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="rounded overflow-hidden mb-4 bg-gray-100 aspect-[4/3]">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-navy-500 font-semibold text-sm uppercase tracking-wider mb-2">{article.category}</p>
              <h3 className="text-xl font-bold text-navy-700 mb-3 group-hover:text-navy-500 transition-colors">{article.title}</h3>
              <div className="flex items-center text-gray-500 font-medium">
                Read Article <ChevronRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center md:text-left"
        >
          <button className="bg-navy-50 text-navy-700 px-6 py-3 rounded font-medium hover:bg-navy-100 transition-colors inline-flex items-center">
            Browse All Articles <ArrowRight size={18} className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Before & After Gallery</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Real results from our custom cosmetic focuses, including veneers, whitening, and full restorations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-navy-600 rounded p-4 flex flex-col justify-center"
          >
             <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="aspect-square bg-gray-300 overflow-hidden rounded relative">
                  <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded font-medium z-10">Before</span>
                  <img src={`${import.meta.env.BASE_URL}before-porcelain-veneers.png`} alt="Before" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
                <div className="aspect-square bg-white overflow-hidden rounded relative">
                  <span className="absolute top-2 left-2 bg-navy-500 text-white text-xs px-2 py-1 rounded font-medium z-10">After</span>
                  <img src={`${import.meta.env.BASE_URL}after-porcelain-veneers.png`} alt="After" className="w-full h-full object-cover" />
                </div>
             </div>
             <h3 className="text-xl font-bold text-white text-center">Porcelain Veneers</h3>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-navy-600 rounded p-4 flex flex-col justify-center"
          >
             <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="aspect-square bg-gray-300 overflow-hidden rounded relative">
                  <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded font-medium z-10">Before</span>
                  <img src={`${import.meta.env.BASE_URL}before-white-teeth.png`} alt="Before" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
                <div className="aspect-square bg-white overflow-hidden rounded relative">
                  <span className="absolute top-2 left-2 bg-navy-500 text-white text-xs px-2 py-1 rounded font-medium z-10">After</span>
                  <img src={`${import.meta.env.BASE_URL}after-white-teeth.png`} alt="After" className="w-full h-full object-cover" />
                </div>
             </div>
             <h3 className="text-xl font-bold text-white text-center">Professional Whitening</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactBooking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: '',
    date: ''
  });

  const handleWhatsAppSubmit = () => {
    const phoneNumber = "256708927914";
    const message = `Hello, I would like to request an appointment.\n\n*Name:* ${formData.firstName} ${formData.lastName}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service || 'Not specified'}\n*Date:* ${formData.date || 'Not specified'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-6 tracking-tight">Visit Our Clinic</h2>
            <p className="text-lg text-gray-600 mb-10">We are dedicated to providing you with a comfortable experience and exceptional results. Reach out to us or book directly.</p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-navy-50 p-3 rounded text-navy-500 mr-5">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy-700 text-lg mb-1">Location</h4>
                  <p className="text-gray-600">Makindye<br/>Kampala, UG</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-navy-50 p-3 rounded text-navy-500 mr-5">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy-700 text-lg mb-1">Operating Hours</h4>
                  <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 p-3 rounded text-red-600 mr-5">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy-700 text-lg mb-1">Emergency Triage Line</h4>
                  <p className="text-gray-600 font-medium">1-800-DENTALS (Available 24/7)</p>
                  <p className="text-gray-500 text-sm mt-1">For urgent pain, bleeding, or trauma.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-navy-700 mb-6">Request an Appointment</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500" placeholder="+256 700 000000" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
                <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 text-gray-700">
                  <option value="">Select a service</option>
                  <option value="General Cleaning & Exam">General Cleaning & Exam</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  <option value="Tooth Pain / Emergency">Tooth Pain / Emergency</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <div className="relative">
                  <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 text-gray-700" />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <button type="button" onClick={handleWhatsAppSubmit} className="w-full bg-[#25D366] text-white font-bold py-4 rounded hover:bg-[#1ebe57] transition-colors text-lg mt-4 flex items-center justify-center gap-2">
                <WhatsAppIcon size={20} /> Send via WhatsApp
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">You will be redirected to WhatsApp to confirm your request.</p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-700 text-gray-300 py-12 border-t border-navy-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold text-white mb-4 md:mb-0">Dental Solutionz</div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Dental Solutionz Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
      <Services />
      <EducationHub />
      <Gallery />
      <ContactBooking />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}