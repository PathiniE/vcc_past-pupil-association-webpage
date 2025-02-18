import ContactIntro from "../components/Contact Us/ContactIntro"
import Inquiry from "../components/Contact Us/Inquiry";
import Map from "../components/Contact Us/Map";

export default function Page() {
    return (
      <div className="flex flex-col min-h-screen gap-20">
        
    
       <ContactIntro />
       <Inquiry />
      <Map />
        
          
        
      </div>
    );
  }