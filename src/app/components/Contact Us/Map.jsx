import { MapPin, Mail, Phone } from "lucide-react"

// Contact information variables
const contactInfo = {
  email: "hello@sitename.com",
  phone: "+1 (555) 000 0000",
  office: "123 Sample St, Sydney NSW 2000 AU",
}

export default function ContactPage() {
  return (
    <div className="mx-auto container px-8 sm:px-0">
      <div className="max-w-7xl mx-auto space-y-8">
       
        <div className="grid md:grid-cols-2 md:gap-16 lg:gap-24">
          
          <div className="space-y-4">
            <p className="text-sm font-medium mb-2 text-primary/80">Inquiry</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">Contact us</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique.
            </p>
          </div>

         
          <div className="space-y-6 mt-6 md:mt-0">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-sm text-primary">Email</div>
                <div className="text-gray-600">{contactInfo.email}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-sm text-primary">Phone</div>
                <div className="text-gray-600">{contactInfo.phone}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="text-sm text-primary">Office</div>
                <div className="text-gray-600">{contactInfo.office}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[400px] md:h-[500px] bg-muted rounded-lg overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <MapPin className="h-12 w-12 text-muted-foreground opacity-50" />
          </div>
        </div>
      </div>
    </div>
  )
}