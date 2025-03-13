
'use client';

import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Mail, MapPin, Phone, Check, AlertCircle } from "lucide-react";
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

  const [errors, setErrors] = useState({
    email: "",
  });

  const [submitStatus, setSubmitStatus] = useState("idle"); // idle, loading, success, error

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when typing
    if (name === "email" && errors.email) {
      setErrors({ ...errors, email: "" });
    }
    
    // Reset submit status when form is changed after a submission
    if (submitStatus !== "idle" && submitStatus !== "loading") {
      setSubmitStatus("idle");
    }
  };

  const handleBlur = (e) => {
    // Validate email when user finishes typing (blurs)
    if (e.target.name === "email" && formData.email) {
      if (!validateEmail(formData.email)) {
        setErrors({ ...errors, email: "Please enter a valid email address" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email before submission
    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: "Please enter a valid email address" });
      return;
    }
    
    setSubmitStatus("loading");
    
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC
      );

      console.log("Email sent successfully:", response);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset button text after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
      
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    }
  };

  const getButtonContent = () => {
    switch (submitStatus) {
      case "loading":
        return "Sending...";
      case "success":
        return (
          <span className="flex items-center justify-center">
            <Check className="mr-2 h-4 w-4" />
            Sent
          </span>
        );
      case "error":
        return (
          <span className="flex items-center justify-center">
            <AlertCircle className="mr-2 h-4 w-4" />
            Try Again
          </span>
        );
      default:
        return "Submit";
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-7xl px-8 md:px-8 lg:px-0 container mx-auto">
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
              onBlur={handleBlur}
              className={`mt-1 block w-full ${errors.email ? "border-red-500" : ""}`}
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
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
          
          <Button 
            type="submit" 
            className="text-white w-24"
            disabled={submitStatus === "loading" || errors.email}
            variant={submitStatus === "error" ? "destructive" : "default"}
          >
            {getButtonContent()}
          </Button>
        </form>
      </div>
    </div>
  );
}