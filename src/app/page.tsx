import About from "@/components/About";
import Achievements from "@/components/Achivements";
import ConOps from "@/components/ConOps";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Regulatory from "@/components/Regulatory";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="relative bg-[#090B0E] min-h-screen text-[#F1F5F9] overflow-x-clip selection:bg-[#00E5FF] selection:text-black">
      <Loader />
      <Nav />
      <Hero />
      <About />
      <Work />
      <ConOps />
      <Regulatory />
      <Team />
      <Achievements />
      <Testimonials />
      <Footer />
    </main>
  );
}
