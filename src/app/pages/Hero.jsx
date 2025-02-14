import Footer from "../components/Footer";
import Committee from "../components/Home/Committee";
import Intro from "../components/Home/Intro";
import Journey from "../components/Home/Journey";
import { Navbar } from "../components/Home/Navbar";
import News from "../components/Home/News";
import Organizations from "../components/Home/Organizations";
import President from "../components/Home/President";
import Projects from "../components/Home/Projects";


export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div >
      <Intro />
      <President />
      <Journey />
      <News />
      <Committee />
      <Projects />
      <Organizations />
      
      
        
      </div>
    </div>
  );
}
