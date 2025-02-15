import AboutIntro from "../components/About/AboutIntro";
import WhoWeAre from "../components/About/WhoWeAre";
import { Navbar } from "../components/Home/Navbar";

export default function Hero() {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div >
        <AboutIntro />
        <WhoWeAre />
        
        
          
        </div>
      </div>
    );
  }