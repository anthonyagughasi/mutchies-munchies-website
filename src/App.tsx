import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  Facebook, 
  Instagram, 
  Utensils, 
  Heart, 
  Zap, 
  Users 
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-extrabold tracking-tighter text-white flex items-center gap-2">
          <span className="text-gold">MUTCHIES</span> MUNCHIES
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+441683221211" 
            className="bg-gold hover:bg-gold/90 text-charcoal px-5 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105 flex items-center gap-2"
          >
            <Phone size={16} /> Call to Order
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-charcoal/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-gold"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:+441683221211" 
                className="bg-gold text-charcoal p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Call to Order
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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1920&auto=format&fit=crop" 
          alt="Juicy Burger" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold tracking-widest uppercase mb-6 border border-gold/30">
            Now Open in Moffat
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 leading-[0.9] tracking-tighter">
            CRAVINGS YOU <br />
            <span className="text-gradient">CAN'T IGNORE</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto font-medium">
            Fresh, indulgent, and made to satisfy — welcome to Mutchies Munchies. The ultimate comfort food experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#menu" 
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-charcoal px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 group"
            >
              View Menu <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+441683221211" 
              className="w-full sm:w-auto glass hover:bg-white/20 px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Call to Order
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements (Subtle parallax feel) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 hidden lg:block opacity-50"
      >
        <img src="https://picsum.photos/seed/burger-float/200/200" alt="" className="w-32 h-32 rounded-full object-cover border-4 border-gold/20" referrerPolicy="no-referrer" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-10 hidden lg:block opacity-50"
      >
        <img src="https://picsum.photos/seed/fries-float/200/200" alt="" className="w-24 h-24 rounded-full object-cover border-4 border-gold/20" referrerPolicy="no-referrer" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border-2 border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop" 
              alt="Our Kitchen" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl max-w-[240px] hidden sm:block">
            <p className="text-gold font-display text-4xl font-bold mb-1">100%</p>
            <p className="text-sm font-medium text-cream/70">Fresh ingredients used in every single meal we prep.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            A Local Legend in <br />The Making
          </h2>
          <p className="text-lg text-cream/70 mb-6 leading-relaxed">
            Mutchies Munchies isn't just a food shop; it's a Moffat staple for anyone who takes their cravings seriously. We believe comfort food should be an experience — indulgent, high-quality, and absolutely irresistible.
          </p>
          <p className="text-lg text-cream/70 mb-8 leading-relaxed">
            Whether you're after a massive burger that requires two hands, or loaded fries that redefine satisfaction, we've got you covered. Friendly, local, and always fresh.
          </p>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-warm-brown/30 border border-white/5">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
              <Heart fill="currentColor" />
            </div>
            <div>
              <p className="font-bold">Made with Love</p>
              <p className="text-sm text-cream/60">Every bite is crafted to satisfy your soul.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MenuHighlights = () => {
  const items = [
    {
      name: "The Beast Burger",
      category: "Burgers",
      desc: "Double beef patty, melted cheddar, crispy bacon, and our secret Mutchie sauce.",
      price: "£12.50",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Truffle Loaded Fries",
      category: "Loaded Fries",
      desc: "Hand-cut fries topped with truffle oil, parmesan, and garlic aioli.",
      price: "£8.50",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Biscoff Dream Shake",
      category: "Desserts",
      desc: "Creamy vanilla base blended with Biscoff crumbles and topped with salted caramel.",
      price: "£6.50",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Spicy Buffalo Wings",
      category: "Snacks",
      desc: "Crispy wings tossed in our signature hot sauce, served with blue cheese dip.",
      price: "£9.00",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Menu Highlights</h2>
            <p className="text-cream/60 max-w-xl mx-auto">Hand-picked favorites that our customers can't get enough of. Warning: May cause immediate hunger.</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-3xl overflow-hidden"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-gold text-charcoal font-bold px-3 py-1 rounded-full text-sm">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">{item.category}</span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{item.name}</h3>
                <p className="text-sm text-cream/60 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="glass hover:bg-white/20 px-10 py-4 rounded-full font-bold transition-all inline-flex items-center gap-2">
            See Full Menu <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Utensils className="text-gold" />,
      title: "Freshly Made Daily",
      desc: "We don't do frozen. Everything is prepped fresh every morning."
    },
    {
      icon: <Zap className="text-gold" />,
      title: "Generous Portions",
      desc: "You won't leave hungry. We believe in big flavors and bigger servings."
    },
    {
      icon: <Users className="text-gold" />,
      title: "Loved by Locals",
      desc: "A Moffat favorite with over 180+ happy regular customers."
    },
    {
      icon: <Star className="text-gold" />,
      title: "Affordable Luxury",
      desc: "Premium street food vibes at a price that makes sense."
    }
  ];

  return (
    <section className="py-24 bg-warm-brown/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {features.map((f, idx) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      text: "Literally the best burger I've had in years. The Mutchie sauce is addictive!",
      rating: 5
    },
    {
      name: "David Miller",
      text: "Great portions and super friendly staff. The loaded fries are a must-try.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      text: "A hidden gem in Moffat. Perfect for a weekend treat. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What People Say</h2>
          <div className="flex items-center justify-center gap-2 text-gold mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="text-cream/60">Loved by 180+ customers in Moffat and beyond.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl relative"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-charcoal font-bold text-2xl">
                "
              </div>
              <p className="text-cream/80 italic mb-6 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-gold">
                  {r.name[0]}
                </div>
                <p className="font-bold">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="location" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Find Us</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <MapPin />
              </div>
              <div>
                <p className="font-bold text-xl mb-1">Address</p>
                <p className="text-cream/60">65 High St, Moffat DG10 9HG, United Kingdom</p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=65+High+St,+Moffat+DG10+9HG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold font-bold text-sm mt-2 inline-block hover:underline"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Phone />
              </div>
              <div>
                <p className="font-bold text-xl mb-1">Phone</p>
                <p className="text-cream/60">+44 1683 221211</p>
                <a href="tel:+441683221211" className="text-gold font-bold text-sm mt-2 inline-block hover:underline">
                  Call Now
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Clock />
              </div>
              <div>
                <p className="font-bold text-xl mb-1">Opening Hours</p>
                <p className="text-cream/60">Open Daily: 11:00 AM – 3:00 PM</p>
                <p className="text-xs text-gold mt-1 font-bold">Open Now – Closes 3 PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-[400px] lg:h-auto rounded-3xl overflow-hidden border-2 border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
        >
          {/* Placeholder for Google Map Embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2273.748721644781!2d-3.4454706233583!3d55.3323069730172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487d995955555555%3A0x5555555555555555!2s65%20High%20St%2C%20Moffat%20DG10%209HG%2C%20UK!5e0!3m2!1sen!2sus!4v1711440000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-display font-extrabold tracking-tighter text-white block mb-2">
              <span className="text-gold">MUTCHIES</span> MUNCHIES
            </a>
            <p className="text-cream/40 text-sm italic">"Feed Your Cravings"</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream/70 hover:text-gold hover:scale-110 transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream/70 hover:text-gold hover:scale-110 transition-all">
              <Instagram size={20} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-cream/60">
            <a href="#" className="hover:text-gold transition-colors">Home</a>
            <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#location" className="hover:text-gold transition-colors">Location</a>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/5 text-xs text-cream/30">
          <p>© {new Date().getFullYear()} Mutchies Munchies. All rights reserved. Designed for indulgence.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-gold selection:text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      
      {/* Sticky Order Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href="tel:+441683221211" 
          className="w-16 h-16 bg-gold text-charcoal rounded-full flex items-center justify-center shadow-2xl shadow-gold/20 animate-bounce"
        >
          <Phone />
        </a>
      </div>
    </div>
  );
}
