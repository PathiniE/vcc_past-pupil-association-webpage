


'use client';

import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import Academics from "../Registration/Academics";

export default function Account() {
  const [showAcademics, setShowAcademics] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (showAcademics) {
    return <Academics />;
  }

  return (
    <div className="w-full md:max-w-7xl mx-auto container flex flex-col md:flex-row mt-10 px-8 md:px-8 lg:px-0">
      {/* Left Section - visible only on desktop */}
      <div className="hidden md:block md:w-[50%]">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl text-primary">
          Account Setup
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary/80 mt-2">
          Contact & Academics
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary/80 mt-2">
          Payment
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary/80 mt-2">
          Membership
        </p>
        <Button
          onClick={() => setShowAcademics(true)}
          className="rounded-md bg-primary w-28 px-4 py-2 text-sm text-white shadow hover:bg-primary/80 transition-colors font-medium mt-20"
        >
          Next
        </Button>
      </div>

      {/* Mobile Header - visible only on mobile */}
      <div className="md:hidden mb-6">
      <p className="text-sm font-medium mb-2 text-primary/80">Register</p>
      <h1 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl text-primary">Account Setup</h1>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-[50%] md:flex md:justify-center">
        <div className="max-w-md w-full space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-primary font-medium">First Name</label>
              <Input placeholder="Lakshan" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-primary font-medium">Last Name</label>
              <Input placeholder="Fernando" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-primary font-medium">Email</label>
            <Input type="email" placeholder="example@gmail.com" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-primary font-medium">Create Password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-primary font-medium">Confirm Password</label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Next Button - visible only on mobile */}
          
          <Button
            onClick={() => {
              setShowAcademics(true);
             
            }}
            className="rounded-md bg-primary md:hidden w-28 px-4 py-2 text-sm text-white shadow hover:bg-primary/80 transition-colors font-medium mt-20"
          >
             Next
          </Button>

          
        </div>
      </div>
    </div>
  );
}