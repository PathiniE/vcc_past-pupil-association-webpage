
import CardComp from "../components/News & Events/Card";
import NewsIntro from "../components/News & Events/NewsIntro";

export default function Page() {
    return (
      <div className="flex flex-col min-h-screen gap-20">
        
    
       <NewsIntro />
       <CardComp />
        
          
        
      </div>
    );
  }