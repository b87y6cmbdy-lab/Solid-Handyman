/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Mail, 
  Clock, 
  MapPin,
  Facebook,
  Instagram,
  Tv,
  Trash2,
  Layers,
  Wind as Fan,
  Wrench,
  Hammer,
  Paintbrush,
  Droplets,
  Zap,
  Box,
  LayoutGrid,
  Settings
} from 'lucide-react';

const CITY = "Indian Creek";
const STATE = "IL";
const PHONE = "(872) 310-9477";

// --- Components ---

const SectionTitle = ({ children, light = false }: { children: React.ReactNode, light?: boolean }) => (
  <h2 className={`text-3xl md:text-4xl font-serif mb-4 ${light ? 'text-text-light' : 'text-text-primary'}`}>
    {children}
  </h2>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-1">
          <span className="text-2xl font-serif italic text-white">Solid</span>
          <span className="text-xl font-sans font-medium text-white/90">Handyman Co.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-text-light/80 hover:text-accent font-medium transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-accent hover:bg-accent-hover text-text-primary px-6 py-2 rounded-md font-semibold shadow-cta transition-all">
            Contact Dmytro
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <a href={`tel:${PHONE}`} className="text-accent">
            <Phone size={24} />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-primary border-t border-white/10 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-medium border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="bg-accent text-text-primary text-center py-3 rounded-md font-bold text-lg"
              >
                Message Us Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen bg-primary flex items-center pt-20 overflow-hidden hero-pattern">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight max-w-4xl"
        >
          Your Trusted Handyman in <span className="text-accent">{CITY}</span> — Done Right, Every Time.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-light/80 mb-10 max-w-2xl"
        >
          From leaky faucets to full room makeovers — we handle it all with zero hassle. Licensed, insured, and actually on time.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
        >
          <a href="#contact" className="bg-accent hover:bg-accent-hover text-text-primary px-8 py-4 rounded-md font-bold text-lg shadow-cta transition-all flex items-center justify-center">
            Message for Project
          </a>
          <a href={`tel:${PHONE}`} className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center">
            Call Now: {PHONE}
          </a>
        </motion.div>


      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-20 fill-bg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58,118.26,172.16,118.06,231.39,112.14,273,107.95,296,87.05,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

const TrustBar = () => (
  <div className="bg-accent py-4 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 border-r border-accent-hover/30 last:border-0 lg:border-r">
        <span className="font-bold text-2xl">200+</span>
        <span className="text-sm font-medium opacity-80 uppercase tracking-wider">Jobs Completed</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 border-r-0 sm:border-r border-accent-hover/30 last:border-0 lg:border-r">
        <span className="font-bold text-2xl">5.0★</span>
        <span className="text-sm font-medium opacity-80 uppercase tracking-wider">Average Rating</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 border-r border-accent-hover/30 last:border-0 lg:border-r">
        <span className="font-bold text-2xl">8 yrs</span>
        <span className="text-sm font-medium opacity-80 uppercase tracking-wider">In Business</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2">
        <span className="font-bold text-2xl">Same-Day</span>
        <span className="text-sm font-medium opacity-80 uppercase tracking-wider">Availability</span>
      </div>
    </div>
  </div>
);

const Services = ({ onImageClick }: { onImageClick: (img: string) => void }) => {
  const services = [
    { 
      name: "Interior & Exterior Painting", 
      desc: "High-quality paint services for every room and outdoor surface.", 
      icon: <Paintbrush className="text-accent" />,
      gallery: ["/input_file_4.png", "/input_file_6.png"]
    },
    { 
      name: "Drywall Install & Repair", 
      desc: "Seamless patches and full board installation for a perfect finish.", 
      icon: <Hammer className="text-accent" />,
      gallery: [] 
    },
    { 
      name: "Flooring Services", 
      desc: "Expert installation and repair of hardwood, laminate, and vinyl solutions.", 
      icon: <Layers className="text-accent" />,
      gallery: []
    },
    { 
      name: "Plumbing & Water Fixtures", 
      desc: "Installation and repair of faucets, showerheads, and leaky pipes.", 
      icon: <Droplets className="text-accent" />,
      gallery: ["/input_file_2.png", "/input_file_11.png", "/input_file_12.png"]
    },
    { 
      name: "Fan Install & Repair", 
      desc: "Ceiling fan and ventilation installation to keep your home comfortable.", 
      icon: <Fan className="text-accent" />,
      gallery: []
    },
    { 
      name: "TV Mounting", 
      desc: "Secure and level mounting for all screen sizes with hidden cabling options.", 
      icon: <Tv className="text-accent" />,
      gallery: ["/input_file_3.png", "/input_file_9.png"]
    },
    { 
      name: "Furniture Assembly", 
      desc: "Quick and correct assembly for all brands and flat-pack furniture.", 
      icon: <Box className="text-accent" />,
      gallery: ["/input_file_1.png", "/input_file_0.png"]
    },
    { 
      name: "Tile Installation", 
      desc: "Professional tile work and replacement for kitchens and bathrooms.", 
      icon: <LayoutGrid className="text-accent" />,
      gallery: []
    },
    { 
      name: "Gutter Cleaning", 
      desc: "Essential debris removal to protect your roofing and foundation.", 
      icon: <Trash2 className="text-accent" />,
      gallery: []
    },
    { 
      name: "General Home Repairs", 
      desc: "Tackling your entire home maintenance and 'to-do' list with precision.", 
      icon: <Settings className="text-accent" />,
      gallery: ["/input_file_7.png", "/input_file_5.png", "/input_file_10.png"]
    },

  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <SectionTitle>Everything Your Home Needs</SectionTitle>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From minor repairs to significant installations, we handle every job with the care your home deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-lg border border-border bg-white shadow-card hover:shadow-lg transition-all group flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-md flex items-center justify-center mb-6 transition-colors group-hover:bg-accent/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif mb-3">{service.name}</h3>
              <p className="text-text-secondary mb-6 leading-relaxed flex-grow">
                {service.desc}
              </p>
              
              {service.gallery && service.gallery.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-3">Recent Work:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.gallery.map((img, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => onImageClick(img)}
                        className="aspect-[3/4] rounded-md overflow-hidden bg-gray-100 border border-border relative group/img cursor-zoom-in"
                      >
                        <img 
                          src={img} 
                          alt={`${service.name} example ${idx + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-white/90 px-3 py-1.5 rounded text-[10px] font-bold text-primary flex items-center">
                            <LayoutGrid size={12} className="mr-1" /> View Example
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section className="py-20 bg-bg overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <SectionTitle>Getting Help Has Never Been Easier</SectionTitle>
      </div>

      <div className="relative pt-4">
        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute top-[45px] left-0 w-full h-0 border-t-2 border-dashed border-border z-0"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {[
            { step: 1, title: "Request a Quote", text: "Fill out our quick form or give us a call. We'll get back to you within 2 hours." },
            { step: 2, title: "We Show Up On Time", text: "Your handyman arrives on schedule, fully equipped, and ready to work." },
            { step: 3, title: "Job Done Right", text: "We tidy up and don't leave until you're completely satisfied. Guaranteed." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white border-2 border-accent rounded-full flex items-center justify-center mb-6 shadow-sm">
                <span className="text-3xl font-serif italic text-accent">{item.step}</span>
              </div>
              <h3 className="text-xl font-serif mb-4">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed max-w-xs">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section id="reviews" className="py-20 bg-primary text-white">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <SectionTitle light>What Our Customers Say</SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: "Mellissa", text: "I had a great experience with Dmytro. He completed all the tasks I had for him with great diligence and focus. He made sure I was happy with the work and was very communicative throughout the process. Highly recommend." },
          { name: "Carey Ackerman", text: "Best handyman in the Chicago area! He can fix anything and does it with a smile. He is the only handyman I trust in my home around my family. My mom is 78 years old and she loves him!" },
          { name: "Phil Reaume", text: "Solid Handyman Co did a great job installing a new garbage disposal. The technician was courteous, efficient and cleaned everything up in a timely manner. I would definitely use Solid Handyman again." },
          { name: "Andrea Marie Jacobson", text: "Dmytro did a fantastic job repairing my furniture, hanging pictures, and replacing a garbage disposal. I intend to hire him again." },
          { name: "Rob", text: "Very Happy with the projects and will be doing more. Very detailed and gives the care as he would his house!" },
          { name: "hetal shah", text: "Very good work, very professional. Will hire every time needed." }
        ].map((review, i) => (
          <div key={i} className="bg-white p-8 rounded-lg text-text-primary shadow-lg">
            <div className="flex text-accent mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
            </div>
            <p className="italic text-text-secondary mb-6 leading-relaxed">"{review.text}"</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">{review.name}</span>
              <span className="text-sm opacity-60">Google Review</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <SectionTitle>Built on Honesty. Backed by Experience.</SectionTitle>
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed mt-8">
            <p>
              Solid Handyman Co. was born out of a simple frustration: homeowners in the {CITY} area couldn't find a tradesperson who combined high-quality craft with basic professionalism. We saw too many flaky contractors leaving jobs halfway or showing up late without a call.
            </p>
            <p>
              Our founder, Dmytro, decided to change that. He built a business where the handshake means something, the quote is the final price, and every project is treated with the same care as if it were his own home.
            </p>
            <p>
              Whether we're installing a new garbage disposal, repairing furniture, or fixing drywall, you get the same promise: always on time, always clean, and always honest pricing.
            </p>

            <ul className="grid grid-cols-2 gap-4 mt-8">
              {[
                "Licensed & Insured",
                "8 Years Local Service",
                "Background Checked",
                "Satisfaction Guaranteed"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-2 text-primary font-medium">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-accent hover:bg-accent-hover text-text-primary px-8 py-3 rounded-md font-bold mt-8 transition-all flex items-center">
              Meet the Team <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end space-y-6">
          <div className="relative w-full max-w-md aspect-square bg-primary-light rounded-2xl shadow-xl overflow-hidden transform rotate-2">
            <img 
              src="/input_file_8.png" 
              alt="Dmytro's Professional Equipment" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
            <div className="absolute bottom-6 left-6 text-white space-y-1">
              <p className="font-serif italic text-2xl drop-shadow-md">Fully Equipped</p>
              <p className="text-sm font-sans text-white/80 drop-shadow-md">Ready for any project</p>
            </div>
          </div>
          <div className="hidden lg:block w-32 h-1 bg-accent rounded-full mr-12 opacity-50"></div>
        </div>
      </div>
    </div>
  </section>
);

const ServiceArea = () => {
  const areas = [
    "Lake County", "McHenry County", "Kane County", "DuPage County", "Cook County", "Boone County"
  ];

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <SectionTitle>Proudly Serving {CITY} and Northern Illinois</SectionTitle>
        <div className="flex flex-wrap justify-center gap-3 mt-10 max-w-4xl mx-auto">
          {areas.map((area, i) => (
            <span key={i} className="bg-white border border-border px-6 py-3 rounded-full text-primary font-bold text-lg md:text-xl shadow-sm">
              {area}
            </span>
          ))}
        </div>
        <p className="text-text-secondary mt-10 text-lg italic">
          Based in {CITY}, IL. We travel throughout all listed counties to help with your home projects.
        </p>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 shadow-2xl rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Info Side */}
        <div className="lg:w-1/2 bg-primary p-10 md:p-16 text-white">
          <h2 className="text-4xl font-serif mb-6 leading-tight">Message Us Your Project</h2>
          <p className="text-text-light/80 text-lg mb-10 leading-relaxed">
            No obligations. Fill out the form or call us directly. We'll get back to you within 2 hours.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm opacity-60 uppercase tracking-widest font-bold mb-1">Phone</p>
                <a href={`tel:${PHONE}`} className="text-xl font-medium hover:text-accent transition-colors">{PHONE}</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm opacity-60 uppercase tracking-widest font-bold mb-1">Hours</p>
                <p className="text-xl font-medium">Mon–Sun 9am–9pm</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10 italic text-white/50 flex items-center justify-center lg:justify-start">
            <p>Ready to help with any home project.</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="lg:w-1/2 p-10 md:p-16 bg-white">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-bold text-text-primary mb-2 uppercase tracking-wide">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-md border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-text-primary mb-2 uppercase tracking-wide">Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-md border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-text-primary mb-2 uppercase tracking-wide">Service Needed</label>
                  <select 
                    required 
                    className="w-full px-4 py-3 rounded-md border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select a service</option>
                    <option value="Drywall">Drywall Repair</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="Painting">Painting</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Furniture">Furniture Assembly</option>
                    <option value="Tiling">Tiling & Grouting</option>
                    <option value="Pressure">Pressure Washing</option>
                    <option value="Other">Other Job</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-text-primary mb-2 uppercase tracking-wide">Tell us about your job</label>
                  <textarea 
                    required 
                    rows={4} 
                    placeholder="Briefly describe what you need help with..."
                    className="w-full px-4 py-3 rounded-md border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  disabled={loading}
                  type="submit" 
                  className={`w-full bg-accent hover:bg-accent-hover py-4 rounded-md font-bold text-lg text-primary shadow-cta transition-all flex items-center justify-center ${loading ? 'opacity-50' : ''}`}
                >
                  {loading ? 'Sending...' : (
                    <>Send My Message <ArrowRight size={20} className="ml-2" /></>
                  )}
                </button>
                <p className="text-center text-xs text-text-secondary mt-4 flex items-center justify-center">
                  <CheckCircle2 size={12} className="mr-1 text-success" /> Quality is our priority.
                </p>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-serif">Message Sent!</h3>
                <p className="text-text-secondary text-lg">
                  Thanks, {formData.name.split(' ')[0]}! We've received your request and will be in touch within 2 hours. 🎉
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-accent font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#111410] text-white/60 py-16">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="flex items-center space-x-1 mb-6">
            <span className="text-2xl font-serif italic text-white">Solid</span>
            <span className="text-xl font-sans font-medium text-white/90">Handyman Co.</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Springfield's premier handyman service. Quality work, honest pricing, and punctuality you can count on every single time.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#services" className="hover:text-accent transition-colors">Featured Services</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">Our Story</a></li>
            <li><a href="#reviews" className="hover:text-accent transition-colors">Customer Reviews</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <Phone size={18} className="text-accent flex-shrink-0" />
              <span>{PHONE}</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-accent flex-shrink-0" />
              <span>{CITY}, {STATE}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2025 Solid Handyman Co. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span>Licensed & Insured</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const MobileStickyCTA = () => (
  <div className="md:hidden fixed bottom-0 left-0 w-full h-[56px] z-[999] bg-white border-t border-border flex shadow-2xl">
    <a href={`tel:${PHONE}`} className="flex-1 bg-primary text-white flex items-center justify-center font-bold">
      <Phone size={20} className="mr-2" /> Call Now
    </a>
    <a href="#contact" className="flex-[1.5] bg-accent text-primary flex items-center justify-center font-bold">
      Send Message
    </a>
  </div>
);

// --- Main App ---

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services onImageClick={setSelectedImage} />
        <HowItWorks />
        <Reviews />
        <About />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 text-white hover:text-accent p-2">
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Project View" 
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
