import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Inquiry() {
  const contactInfo = {
    email: "example@example.com",
    phone: "+1234567890",
    address: "123 Street, City, Country",
  };

  return (
    <div className="flex flex-col md:flex-row max-w-7xl px-8 sm:px-0 container mx-auto">
      <div className="w-full md:w-[40%] mb-8 md:mb-0">
        <p className="text-sm font-medium mb-2 text-primary/80">Inquiry</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 mt-4">
          Get in Touch
        </h1>
        <p className="text-gray-600">
          We'd love to hear from you!
        </p>
        <div className="md:hidden mt-4 text-gray-600">
          <p className="flex items-center">
            <Mail className="mr-4 h-5 w-5" />
            {contactInfo.email}
          </p>
          <p className="flex items-center mt-4 md:mt-0">
            <Phone className="mr-4 h-5 w-5" />
            {contactInfo.phone}
          </p>
          <p className="flex items-center mt-4 md:mt-0">
            <MapPin className="mr-4 h-5 w-5" />
            {contactInfo.address}
          </p>
        </div>
      </div>

      <div className="w-full md:w-[60%] bg-slate-500">
        <form className="bg-white md:p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <Input type="text" className="mt-1 block w-full" placeholder="" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input type="email" className="mt-1 block w-full" placeholder="" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <Textarea className="mt-1 block w-full" placeholder="Write your message..." rows="4" />
          </div>
          <div className="flex items-start">
            <Checkbox className="h-4 w-4 text-primary border-gray-300 rounded" />
            <label className="ml-2 text-sm text-gray-600">I agree to Terms</label>
          </div>
          <Button type="submit" className="text-white">Submit</Button>
        </form>
      </div>
    </div>
  );
}