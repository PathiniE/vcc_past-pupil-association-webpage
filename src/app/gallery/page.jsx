
import Gallery from "../components/Gallery/Gallery";
import GalleryIntro from "../components/Gallery/GalleryIntro";

export default function Page() {
    return (
      <div className="flex flex-col min-h-screen gap-20">
        
    
     <GalleryIntro />
     <Gallery />
          
        
      </div>
    );
  }