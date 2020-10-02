import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Header from './screens/Header';
import Hero from './screens/Hero';
import Services from './screens/Services';
import Projects from './screens/Projects';
import About from './screens/About';
import Footer from './screens/Footer';
import ContactSection from './screens/ContactSection';
import ContactForm from './screens/ContactForm';
import Skills from './screens/Skills';



function App() {

  AOS.init({
    offset: 200, /* the default is 120 */
    duration: 1500,
    mirror: true,
  }); /*  this script is for the animation on scroll*/
  
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <About />
      <ContactSection />
      <ContactForm />
      <Footer />

    </div>
  );
}

export default App;



