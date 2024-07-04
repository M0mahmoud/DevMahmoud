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
      <div style={{ height: "100vh" }}></div>
      <AboutMe />
      <div style={{ height: "100vh" }}></div>
      <Skills />
      <div style={{ height: "100vh" }}></div>
      <Pojects />
      <div style={{ height: "100vh" }}></div>
      <ContactUs />
      <div style={{ height: "100vh" }}></div>
      <FQA />
    </main>
  );
}
