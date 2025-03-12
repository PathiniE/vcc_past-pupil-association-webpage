'use client';

import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import Account from "./Account";
import Payment from "./Payment";

export default function Academics() {
  const [showAccount, setShowAccount] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  if (showAccount) {
    return <Account />;
  }

  if (showPayment) {
    return <Payment />;
  }

  return (
    <div className="max-w-7xl mx-auto container flex flex-col md:flex-row px-8 md:px-8 lg:px-0 mt-10 ">
      {/* Left Content - Hidden on mobile */}
      <div className="hidden md:block md:w-[50%]">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-primary/80">
          Account Setup
        </h1>
        <p className="text-2xl font-bold md:text-3xl lg:text-4xl text-primary mt-2">
          Contact & Academics
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary/80 mt-2">
          Payment
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary/80 mt-2">
          Membership
        </p>

        <div className="flex gap-4 mt-20">
          <Button
            onClick={() => setShowAccount(true)}
            variant="outline"
            className="w-28 border-primary text-primary hover:text-primary"
          >
            Back
          </Button>
          <Button
            onClick={() => setShowPayment(true)}
            className="rounded-md bg-primary w-28 px-4 py-2 text-sm text-white shadow hover:bg-primary/80 transition-colors font-medium"
          >
            Next
          </Button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden mb-6">
      <p className="text-sm font-medium mb-2 text-primary/80">Register</p>
        <h1 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl text-primary">Contact & Academics</h1>
      </div>

      {/* Right Form */}
      <div className="w-full md:w-[50%] md:flex md:justify-center">
        <div className="max-w-md w-full space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-primary font-medium">Phone</label>
            <Input placeholder="+94 XX XXX XXXX" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-primary font-medium">Address</label>
            <Input placeholder="Ex : 123 Galle Road, Colombo 03, Sri Lanka" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-primary font-medium">NIC</label>
            <Input placeholder="XXXXXXXXXXX" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-primary font-medium">City</label>
              <Input placeholder="EX : Colombo 03" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-primary font-medium">Province</label>
              <Input placeholder="EX : Colombo" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-primary font-medium">Occupation</label>
            <Input placeholder="EX : Teacher" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-primary font-medium">Index Number</label>
            <Input placeholder="EX : 19064" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-primary font-medium">Study Period</label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-primary font-medium">From</label>
                <Input placeholder="EX : 2019" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-primary font-medium">To</label>
                <Input placeholder="EX : 2017" />
              </div>
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-between md:hidden mt-6">
            <Button
              onClick={() => setShowAccount(true)}
              variant="outline"
              className="w-28 px-4 py-2 border-primary text-primary hover:text-primary"
            >
              Back
            </Button>
            <Button
              onClick={() => setShowPayment(true)}
              className="rounded-md bg-primary w-28 px-4 py-2 text-sm text-white shadow hover:bg-primary/80 transition-colors font-medium"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}