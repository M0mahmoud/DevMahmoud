import AboutMe from "@/components/home/AboutMe";
import ContactUs from "@/components/home/ContactUs";
import FQA from "@/components/home/FQA";
import Hero from "@/components/home/Hero";
import Pojects from "@/components/home/Pojects";
import Services from "@/components/home/Services";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutMe />
      <Skills />
      <Pojects />
      <Services />
      <ContactUs />
      <FQA />
    </main>
  );
}
