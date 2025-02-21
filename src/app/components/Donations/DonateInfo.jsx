'use client'

import { useState, useRef } from 'react';
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { Upload } from "lucide-react";

const DonateInfo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/') || file.type === 'application/pdf') {
        setSelectedFile(file);
      } else {
        alert('Please select an image or PDF file');
        event.target.value = '';
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="max-w-7xl mx-auto container px-8 md:px-0 min-h-fit">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <p className="text-sm font-medium mb-2 text-primary/80">Donate here</p>
            <h1 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl text-primary">Donation</h1>
            <p className="text-gray-600">
              Thank you for your generosity! Your support helps shape the future of our
              students, keeping our legacy alive and empowering the next generation. We
              deeply appreciate your commitment to giving back!
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm mb-1">Account Number</p>
              <p className="text-gray-600">XXXX XXXX XXXXXXX</p>
            </div>

            <div>
              <p className="text-sm mb-1">Bank Branch</p>
              <p className="text-gray-600">VCGPSA</p>
            </div>

            <div>
              <p className="text-sm mb-1">Bank Branch</p>
              <p className="text-gray-600">Bank of Ceylon</p>
            </div>
          </div>

          <div>
            <p className="text-gray-600 hidden lg:block">
              Once you've completed the transfer, please fill out the form to notify us of
              your donation. Please be sure to include your name and any other
              information you'd like us to have. We'll use this information to confirm your
              donation and send you a receipt for your records. Thank you again for your
              generous support!
            </p>
            <p className='text-gray-600 lg:hidden'>After your transfer,please fill out the form to confirm your donation and receive a receipt.
            <span className='block'>Thank you for your support!</span>
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2">
          <form className="space-y-6  md:p-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <Input 
                type="text" 
                className="w-full"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input 
                type="email" 
                className="w-full"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea 
                className="w-full"
                rows={4}
                placeholder="Write your message..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Receipt
              </label>
              <div 
                className="border-2  border-gray-300 rounded-lg p-6 text-center cursor-pointer"
                onClick={handleUploadClick}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*,.pdf"
                  onChange={handleFileSelect}
                />
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">
                  {selectedFile ? selectedFile.name : 'Click to upload receipt (Image or PDF)'}
                </p>
                {selectedFile && (
                  <p className="text-xs text-gray-500 mt-1">
                    File selected: {selectedFile.name}
                  </p>
                )}
              </div>
            </div>

            <Button 
              type="submit" 
              className=" bg-primary text-white"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateInfo;