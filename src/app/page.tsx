import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home(){
  return(
    <>
    <Hero/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Education/>
    <Contact/>
    <Footer/>
    </>
  )
}