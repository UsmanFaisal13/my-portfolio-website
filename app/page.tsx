import Header from "./components/Header";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Recent from "./components/Recent";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="flex h-screen flex-col w-full font-DM_Sans scroll-smooth overflow-x-hidden">
      <Header />
      <Hero />
      <Tech />
      <Recent />
      <Footer />







    </div>
  );
}
