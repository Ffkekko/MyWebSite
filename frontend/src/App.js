import React,  {Suspense, lazy} from 'react'; /* suspense and lazy are for lazy loading */
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Header from './screens/Header';
import Hero from './screens/Hero';
/* import Services from './screens/Services';
import Projects from './screens/Projects';
import About from './screens/About';
import Footer from './screens/Footer';
import ContactSection from './screens/ContactSection';
import ContactForm from './screens/ContactForm';
import Skills from './screens/Skills'; */
import {Helmet} from "react-helmet";

const Services = lazy (() => import ('./screens/Services'));
const Projects = lazy (() => import ('./screens/Projects'));
const About = lazy (() => import ('./screens/About'));
const Footer = lazy (() => import ('./screens/Footer'));
const ContactSection = lazy (() => import ('./screens/ContactSection'));
const ContactForm = lazy (() => import ('./screens/ContactForm'));
const Skills = lazy (() => import ('./screens/Skills'));


function App() {

  AOS.init({
    offset: 200, /* the default is 120 */
    duration: 1500,
    mirror: true,
  }); /*  this script is for the animation on scroll*/
  
  return (
    
    <div>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Freelance Full Stack Web Developer - Francesco Franzese</title>
          <meta
            name="description"
            content="Honest, friendly and professional web developer who understands your non-technical language and transforms 
            it into beautiful and fast websites with the best SEO and responsive design whether it means to build your e-Commerce or 
            small business’ Website."
          />
          <meta name="robots" content="index, follow"></meta>
      </Helmet>
    

      <Header />
      <Hero />
      <Suspense fallback = {<div> Loading </div>}>
        <Services />
      </ Suspense>
      <Suspense fallback = {<div> Loading </div>}>
        <Skills />
      </ Suspense>
      <Suspense fallback = {<div> Loading </div>}>
        <Projects />
      </ Suspense>
      <Suspense fallback = {<div> Loading </div>}>
        <About />
      </ Suspense>
      <Suspense fallback = {<div> Loading </div>}>
        <ContactSection />
      </ Suspense>
      <Suspense fallback = {<div> Loading </div>}>
        <ContactForm />
      </ Suspense>
      
      <Suspense fallback = {<div> Loading </div>}>
        <Footer />
      </ Suspense>

    </div>
  );
}

export default App;



