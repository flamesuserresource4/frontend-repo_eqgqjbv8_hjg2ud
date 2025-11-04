import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black font-inter selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
