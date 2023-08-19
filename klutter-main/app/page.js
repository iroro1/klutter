import Appreciations from "./components/Appreciations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ListSection from "./components/ListSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ListSection />
      <Appreciations />
      <Footer />
    </main>
  );
}
