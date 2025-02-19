
import Footer from "@/app/components/Footer";
import Committee from "@/app/components/Home/Committee";
import Intro from "@/app/components/Home/Intro";
import Journey from "@/app/components/Home/Journey";
import { Navbar } from "@/app/components/Home/Navbar";
import News from "@/app/components/Home/News";
import Organizations from "@/app/components/Home/Organizations";
import President from "@/app/components/Home/President";
import Projects from "@/app/components/Home/Projects";


export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen gap-20">
      
      
      <Intro />
      
      <President />
      <Journey />
      <News />
      <Committee />
      <Projects />
      <Organizations />
      
      
    </div>
  );
}
