
'use client';

import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Inquiry() {
  const contactInfo = {
    email: "example@example.com",
    phone: "+1234567890",
    address: "123 Street, City, Country",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Replace with your EmailJS Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Replace with your EmailJS Public Key
      );

      console.log("Email sent successfully:", response);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); 
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-7xl px-8 sm:px-0 container mx-auto">
      <div className="w-full md:w-[40%] mb-8 md:mb-0">
        <p className="text-sm font-medium mb-2 text-primary/80">Inquiry</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 mt-4">
          Get in Touch
        </h1>
        <p className="text-gray-600">We'd love to hear from you!</p>
        <div className="md:hidden mt-4 text-gray-600">
          <p className="flex items-center">
            <Mail className="mr-4 h-5 w-5" />
            {contactInfo.email}
          </p>
          <p className="flex items-center mt-4">
            <Phone className="mr-4 h-5 w-5" />
            {contactInfo.phone}
          </p>
          <p className="flex items-center mt-4">
            <MapPin className="mr-4 h-5 w-5" />
            {contactInfo.address}
          </p>
        </div>
      </div>

      <div className="w-full md:w-[60%] bg-slate-500">
        <form onSubmit={handleSubmit} className="bg-white md:p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <Input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange} 
              className="mt-1 block w-full" 
              placeholder="Your Name" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange} 
              className="mt-1 block w-full" 
              placeholder="Your Email" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <Textarea 
              name="message"
              value={formData.message}
              onChange={handleChange} 
              className="mt-1 block w-full" 
              placeholder="Write your message..." 
              rows="4" 
            />
          </div>
          
          <Button type="submit" className="text-white">Submit</Button>
        </form>
      </div>
    </div>
  );
}
