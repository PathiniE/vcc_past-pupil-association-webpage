import { ViewTransitions } from "next-view-transitions";
import Account from "../components/Registration/Account";


export default function Page() {
    return (
      <ViewTransitions>
          <div className="flex flex-col min-h-screen">
            <Account />
          </div>
      </ViewTransitions>
      
    );
  }