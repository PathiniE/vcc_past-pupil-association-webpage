'use client';

import { useState,useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import Academics from "./Academics";
import { ImageIcon } from "lucide-react";
import Membership from "./Membership";


export default function Payment() {
  const [showAcademics, setShowAcademics] = useState(false);
  const [showMembership, setShowMembership] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith('image/') || file.type === 'application/pdf') {
        setSelectedFile(file);
      } else {
        alert('Please upload only image or PDF files');
      }
    }
  };

  if (showAcademics) {
    return <Academics />;
  }

  if (showMembership) {
    return <Membership />;
  }


  return (
    <div className="max-w-7xl mx-auto h-screen container flex px-8 md:px-0 mt-10">
      {/* Left side content */}
      <div className="hidden md:block md:w-[50%]">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-primary/80">
          Account Setup
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary/80 mt-2">
          Contact & Academics
        </p>
        <p className="text-2xl font-bold md:text-3xl lg:text-4xl text-primary mt-2">
          Payment
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary/80 mt-2">
          Membership
        </p>

        <div className="flex gap-4 mt-20">
          <Button
            onClick={() => setShowAcademics(true)}
            variant="outline"
            className="w-28 border-primary text-primary hover:text-primary"
          >
            Back
          </Button>
          <Button
            onClick={() => setShowMembership(true)}
            className="rounded-md bg-primary w-28 px-4 py-2 text-sm text-white shadow hover:bg-primary/80 transition-colors font-medium"
          >
            Next
          </Button>
        </div>
      </div>

      {/* Right side - Payment form */}
      <div className="w-full md:w-[50%] flex justify-center">
        <div className="max-w-md w-full space-y-8">
          {/* Mobile Header */}
          <div className="md:hidden">
            <h2 className="text-sm font-medium mb-2 text-primary/80">Register</h2>
            <h1 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl text-primary">Payment</h1>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-primary">Membership Fee Paid By</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 border-gray-300 text-primary accent-primary focus:ring-primary"
                />
                <label htmlFor="cash" className="text-sm font-medium text-gray-600">Cash</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="cheque"
                  name="paymentMethod"
                  value="cheque"
                  checked={paymentMethod === "cheque"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 border-gray-300 text-primary accent-primary focus:ring-primary"
                />
                <label htmlFor="cheque" className="text-sm font-medium text-gray-600">Cheque</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="bank_deposit"
                  name="paymentMethod"
                  value="bank_deposit"
                  checked={paymentMethod === "bank_deposit"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 border-gray-300 text-primary accent-primary focus:ring-primary"
                />
                <label htmlFor="bank_deposit" className="text-sm font-medium text-gray-600">Bank deposit</label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-primary">Receipt</h3>
            <div 
              className="border-2  rounded-lg p-6 cursor-pointer"
              onClick={() => document.getElementById('file-upload').click()}
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <ImageIcon className="h-12 w-12 text-gray-400" />
                <p className="text-sm text-gray-500">Select Image</p>
                {selectedFile && (
                  <p className="text-sm text-primary">{selectedFile.name}</p>
                )}
              </div>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/*,.pdf"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-between md:hidden mt-6">
            <Button
              onClick={() => setShowAcademics(true)}
              variant="outline"
              className="w-28 px-4 py-2 border-primary text-primary hover:text-primary"
            >
              Back
            </Button>
            <Button
              onClick={() => setShowMembership(true)}
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