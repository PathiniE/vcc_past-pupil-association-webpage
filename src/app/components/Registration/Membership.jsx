'use client';

import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import Payment from "./Payment";

export default function Membership() {
  const [showPayment, setShowPayment] = useState(false);
  

  if (showPayment) {
    return <Payment />;
  }

  

  return (
    <div className="max-w-7xl mx-auto container flex flex-col md:flex-row px-8 md:px-0 mt-10 ">
     
     <div className="hidden md:block md:w-[50%]">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-primary/80">
          Account Setup
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary/80 mt-2">
          Contact & Academics
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary/80 mt-2">
          Payment
        </p>
        <p className="text-2xl font-bold md:text-3xl lg:text-4xl text-primary mt-2">
          Membership
        </p>

        <div className="flex gap-4 mt-20">
          <Button
            onClick={() => setShowPayment(true)}
            variant="outline"
            className="w-28 border-primary text-primary hover:text-primary"
          >
            Back
          </Button>
          <Button
            className="rounded-md bg-primary w-28 px-4 py-2 text-sm text-white shadow hover:bg-primary/80 transition-colors font-medium"
          >
            Done
          </Button>
        </div>
      
     </div>
     <div className="md:hidden">
            <h2 className="text-sm font-medium mb-2 text-primary/80">Register</h2>
            <h1 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl text-primary">Membership</h1>
    </div>
     <div className="md:w-[50%] md:justify-center w-full md:flex mt-4 md:mt-0">
    <div className="space-y-6 max-w-md w-full">
    <div>
      <label htmlFor="preferredName" className="block text-sm font-medium text-primary">
        Preferred name for ID:
      </label>
      <Input
        id="preferredName"
        placeholder="EX : Lakshan"
        className="mt-1 "
      />
    </div>

    <div>
      <label htmlFor="refereeName" className="block text-sm font-medium text-primary">
        Referee name
      </label>
      <Input
        id="refereeName"
        placeholder="EX : Shashika Dulanjali"
        className="mt-1 w-full"
      />
    </div>

    <div>
      <label htmlFor="refereeNumber" className="block text-sm font-medium text-primary">
        Referee Membership No:
      </label>
      <Input
        id="refereeNumber"
        placeholder="EX : L1589"
        className="mt-1 w-full"
      />
    </div>

    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="terms"
        className="h-4 w-4 rounded border-gray-300 accent-primary"
      />
      <label htmlFor="terms" className="text-sm text-primary">
        Agree to Terms
      </label>
    </div>
  </div>
</div>
<div className="flex justify-between md:hidden mt-6">
            <Button
              onClick={() => setShowPayment(true)}
              variant="outline"
              className="w-28 px-4 py-2 border-primary text-primary hover:text-primary"
            >
              Back
            </Button>
            <Button
              className="rounded-md bg-primary w-28 px-4 py-2 text-sm text-white shadow hover:bg-primary/80 transition-colors font-medium"
            >
              Done
            </Button>
          </div>

</div>
  );
}