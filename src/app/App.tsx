import React from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { 
  Coffee, 
  Sparkles, 
  Wifi, 
  Music, 
  MapPin, 
  Phone, 
  Mail, 
  Star,
  Calendar,
  Mic
} from 'lucide-react';

export default function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openDirections = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=123+Cosmic+Boulevard+Downtown+Metro+City', '_blank');
  };

  const features = [
    {
      icon: Coffee,
      title: 'Specialty Coffee',
      description: 'Expertly crafted beverages using premium beans from around the world'
    },
    {
      icon: Sparkles,
      title: 'Galaxy-Themed Interior',
      description: 'Immerse yourself in our cosmic ambiance with stunning galaxy decor'
    },
    {
      icon: Wifi,
      title: 'Free Wi-Fi & Workspace',
      description: 'Perfect spot for remote work with high-speed internet and cozy seating'
    },
    {
      icon: Music,
      title: 'Events & Live Music',
      description: 'Regular live performances and community events throughout the week'
    }
  ];

  const menuItems = [
    {
      image: 'https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NzI2MzMwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Cosmic Latte',
      description: 'Silky smooth espresso with micro-foam art'
    },
    {
      image: 'https://images.unsplash.com/photo-1659553653381-d98d2a831b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwZm9hbSUyMGNhZmV8ZW58MXx8fHwxNzcyNjQxOTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Nebula Cappuccino',
      description: 'Rich and velvety with a cloud of foam'
    },
    {
      image: 'https://images.unsplash.com/photo-1618667060775-1fe102237f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnklMjBicmVha2Zhc3R8ZW58MXx8fHwxNzcyNjMzNDU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Stellar Pastries',
      description: 'Fresh-baked croissants and pastries daily'
    },
    {
      image: 'https://images.unsplash.com/photo-1593903971086-da1ad90da20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicnVuY2h8ZW58MXx8fHwxNzcyNjAwNTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Galaxy Brunch',
      description: 'Wholesome brunch options to fuel your day'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      quote: 'The atmosphere is out of this world! Best coffee spot in the city.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Marcus Johnson',
      quote: 'Perfect blend of great coffee and cosmic vibes. My new favorite workspace!',
      rating: 5,
      avatar: 'MJ'
    },
    {
      name: 'Emily Rodriguez',
      quote: 'The live music nights are amazing. Galaxy Cafe has become my weekly ritual.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const events = [
    {
      icon: Music,
      title: 'Starry Jazz Night',
      day: 'Every Friday',
      time: '7 PM - 10 PM',
      description: 'Live jazz performances under the stars'
    },
    {
      icon: Coffee,
      title: 'Coffee Cupping',
      day: 'Every Saturday',
      time: '2 PM - 4 PM',
      description: 'Explore different coffee origins and flavors'
    },
    {
      icon: Mic,
      title: 'Open Mic Night',
      day: 'Every Wednesday',
      time: '6 PM - 9 PM',
      description: 'Share your talent with our cosmic community'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1765120298918-e9932c6c0332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBuZWJ1bGElMjBzdGFycyUyMHB1cnBsZSUyMGNvc21pY3xlbnwxfHx8fDE3NzI2NDE5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-purple-950/50 to-slate-950"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Galaxy Cafe
            </span>
            <br />
            <span className="text-white">Where Coffee Meets the Cosmos</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            A cozy café with stellar coffee and cosmic vibes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact}>Explore</Button>
            <Button variant="outline" size="lg">Visit Us</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Why Choose <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Galaxy Cafe</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Experience the perfect blend of exceptional coffee, cosmic ambiance, and community
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} variant="glass">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Teaser Section */}
      <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Signature Menu</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Discover our cosmic collection of beverages and treats
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {menuItems.map((item, index) => (
              <Card key={index} variant="default" className="overflow-hidden p-0">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="secondary" size="lg" onClick={scrollToContact}>Discover</Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            What Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Join our community of coffee lovers and cosmic explorers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="bordered">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Weekly <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Join us for unforgettable experiences throughout the week
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} variant="glass">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4">
                  <event.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-pink-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{event.day}</span>
                </div>
                <p className="text-slate-400 mb-3">{event.time}</p>
                <p className="text-slate-300">{event.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Visit <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Galaxy Cafe</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Come experience the cosmic vibes and stellar coffee for yourself
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card variant="bordered">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-slate-400">123 Cosmic Boulevard<br />Downtown, Metro City 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-slate-400">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-slate-400">hello@galaxycafe.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700">
                <h4 className="font-semibold mb-3">Hours</h4>
                <div className="space-y-2 text-slate-400">
                  <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
                  <p>Saturday - Sunday: 8:00 AM - 11:00 PM</p>
                </div>
              </div>
            </Card>
            
            {/* Map Placeholder */}
            <Card variant="glass" className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Us</h3>
                <p className="text-slate-400 mb-4">Located in the heart of Downtown</p>
                <Button variant="outline" onClick={openDirections}>Get Directions</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
