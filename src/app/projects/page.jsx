import ProjectIntro from "../components/Projects/ProjectIntro";
import Projectscard from "../components/Projects/Projectscard";


export default function Page() {
    return (
      <div className="flex flex-col min-h-screen gap-20">
        
    
      <ProjectIntro />
      <Projectscard />
          
        
      </div>
    );
  }