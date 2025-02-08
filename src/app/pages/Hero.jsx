import Footer from "../components/Footer";
import Intro from "../components/Intro";
import { Navbar } from "../components/Navbar";


export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div >
        <Intro />
        
      </div>
    </div>
  );
}
