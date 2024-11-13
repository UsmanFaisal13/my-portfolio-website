
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Recent from "./components/Recent";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div className=" flex mx-auto min-h-screen flex-col w-full items-center lg:items-stretch overflow-x-hidden lg:overflow-x-visible">

      <Hero />
      <Tech />
      <Recent />
      <Footer />









    </div>

  );
}
