import DonateInfo from "../components/Donations/DonateInfo";
import DonationIntro from "../components/Donations/DonationIntro";

export default function Page() {
    return (
      <div className="flex flex-col min-h-screen gap-20">
        
        
        <DonationIntro />
        <DonateInfo />
        
        
          
        
      </div>
    );
  }