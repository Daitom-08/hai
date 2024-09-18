import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import WhoWeAre from "./sections/AboutUs";
import Parallax from "./sections/Parallax";
import Solution from "./sections/Solution";
import GetTogether from "./sections/GetTogether";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <section className="borde  relative flex flex-col  border-green-500">
      <Nav/>
      <Hero />
      <WhoWeAre />
      <Parallax />
      <Solution />
      <GetTogether />
      <Projects />
      <Footer/>
    </section>
  );
}
