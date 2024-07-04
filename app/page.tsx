import AboutMe from "@/components/home/AboutMe";
import ContactUs from "@/components/home/ContactUs";
import FQA from "@/components/home/FQA";
import Hero from "@/components/home/Hero";
import Pojects from "@/components/home/Pojects";
import Skills from "@/components/home/Skills";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Hero />
      <AboutMe />
      <Skills />
      <Pojects />
      <ContactUs />
      <FQA />
    </main>
  );
}
