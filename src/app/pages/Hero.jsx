import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Journey from "../components/Journey";
import { Navbar } from "../components/Navbar";
import News from "../components/News";
import President from "../components/President";


export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div >
      <Intro />
      <President />
      <Journey />
      <News />
        
      </div>
    </div>
  );
}
