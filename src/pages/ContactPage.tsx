import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 8750027070", "+91 9876543210"],
      description: "Call us for appointments and inquiries"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@timelessaesthetics.in", "appointments@timelessaesthetics.in"],
      description: "Send us an email anytime"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["123 Beauty Street, Amritsar", "456 Aesthetic Avenue, Gurgaon", "789 Glamour Road, Jammu"],
      description: "Visit our clinics"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      description: "We're here to serve you"
    }
  ];

  const clinics = [
    {
      name: "Amritsar Clinic",
      address: "123 Beauty Street, Amritsar, Punjab 143001",
      phone: "+91 8750027070",
      email: "amritsar@timelessaesthetics.in",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM",
      services: ["Permanent Makeup", "Facial Aesthetics", "Cosmetology", "Dentistry"]
    },
    {
      name: "Gurgaon Clinic",
      address: "456 Aesthetic Avenue, Gurgaon, Haryana 122001",
      phone: "+91 9876543210",
      email: "gurgaon@timelessaesthetics.in",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM",
      services: ["Permanent Makeup", "Facial Aesthetics", "Cosmetology", "Dentistry"]
    },
    {
      name: "Jammu Clinic",
      address: "789 Glamour Road, Jammu, Jammu & Kashmir 180001",
      phone: "+91 8765432109",
      email: "jammu@timelessaesthetics.in",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM",
      services: ["Permanent Makeup", "Facial Aesthetics", "Cosmetology", "Dentistry"]
    }
  ];

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id === "service" ? "service" : id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch(import.meta.env.VITE_API_BASE_URL ? `${import.meta.env.VITE_API_BASE_URL}/api/leads` : `http://localhost:5000/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit");
      toast({ title: "Message sent", description: "We will contact you shortly." });
      setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
    } catch (err: any) {
      toast({ title: "Submission failed", description: err.message || "Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

{/* Hero Section */}
<div
  className="relative text-white py-20 bg-center bg-cover bg-no-repeat"
  style={{ backgroundImage: "url('/images/contact.jpg')" }}
>
  <div className="absolute inset-0 bg-black/50"></div> {/* overlay for readability */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Contact Us
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-8">
        Get in touch with us for consultations, appointments, or any questions about our services
      </p>
    </div>
  </div>
</div>


      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-luxury-dark mb-4">
            Get In Touch
          </h2>
          <p className="text-luxury-muted text-lg">
            We're here to help you achieve your aesthetic goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center text-luxury-gold mb-4">
                  {info.icon}
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
                <CardDescription>{info.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-luxury-muted text-sm">
                      {detail}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <select 
                    id="service" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="permanent-makeup">Permanent Makeup</option>
                    <option value="cosmetology">Cosmetology</option>
                    <option value="facial-aesthetics">Facial Aesthetics</option>
                    <option value="dentistry">Dentistry</option>
                    <option value="academy">Academy Courses</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements or questions"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                  <Send className="h-4 w-4 mr-2" />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card>
  <CardHeader>
    <CardTitle>Find Us</CardTitle>
    <CardDescription>
      Visit our clinics for in-person consultations
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="aspect-video rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28061.596691393206!2d77.097149!3d28.458471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d232106de6803%3A0x334abceb23079c69!2sTimeless%20Aesthetics!5e0!3m2!1sen!2sin!4v1757321735370!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </CardContent>
</Card>
        </div>
      </div>

      {/* Our Clinics */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-luxury-dark mb-4">
              Our Clinics
            </h2>
            <p className="text-luxury-muted text-lg">
              Visit us at any of our three convenient locations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {clinics.map((clinic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{clinic.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-luxury-muted text-sm">{clinic.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                    <p className="text-luxury-muted text-sm">{clinic.phone}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                    <p className="text-luxury-muted text-sm">{clinic.email}</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                    <p className="text-luxury-muted text-sm">{clinic.hours}</p>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-sm mb-2">Services Available:</h4>
                    <div className="flex flex-wrap gap-2">
                      {clinic.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="px-2 py-1 bg-luxury-gold/10 text-luxury-gold text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4">
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-luxury-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-luxury-muted text-lg">
            Common questions about our services and procedures
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How do I book an appointment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-luxury-muted">
                You can book an appointment by calling us at +91 8750027070, emailing us at info@timelessaesthetics.in, 
                or filling out the contact form above. We'll get back to you within 24 hours.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What services do you offer?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-luxury-muted">
                We offer a comprehensive range of aesthetic services including permanent makeup, cosmetology, 
                facial aesthetics, and dentistry. We also provide professional training courses at our academy.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do you offer consultations?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-luxury-muted">
                Yes, we offer free consultations for all our services. During the consultation, we'll assess your 
                needs, discuss treatment options, and provide personalized recommendations.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What are your clinic hours?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-luxury-muted">
                Our clinics are open Monday to Saturday from 9:00 AM to 7:00 PM, and Sunday from 10:00 AM to 5:00 PM. 
                We're closed on major holidays.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default ContactPage;
