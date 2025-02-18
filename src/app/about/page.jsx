import AboutIntro from "../components/About/AboutIntro";
import WhoWeAre from "../components/About/WhoWeAre";
import { Navbar } from "../components/Home/Navbar";
import President from "../components/About/President";
import Vision from "../components/About/Vision";
import Committee from "../components/About/Committee";

export default function Hero() {
    return (
      <div className="flex flex-col min-h-screen gap-20">
        
        
        <AboutIntro />
        <WhoWeAre />
        <President />
        <Vision />
        <Committee />
        
        
          
        
      </div>
    );
  }