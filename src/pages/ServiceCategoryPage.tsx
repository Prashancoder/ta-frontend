import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, BookOpen, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServiceData {
  title: string;
  description: string;
  duration: string;
  category: string;
  price: string;
  features: string[];
  benefits: string[];
  process: string[];
  image?: string;
  services: {
    name: string;
    link: string;
    description: string;
    price: string;
  }[];
}

const ServiceCategoryPage = () => {
  const location = useLocation();
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract service path from URL
    const pathSegments = location.pathname.split('/').filter(Boolean);
    // For routes like /services/cosmetology or /services/facial-aesthetics
    const serviceKey = (pathSegments[1] || '').toLowerCase();
    
    // Load service data based on normalized key
    loadServiceData(serviceKey);
  }, [location.pathname]);

  const loadServiceData = (servicePath: string) => {
    setLoading(true);
    
    // Service data mapping based on the navigation structure
    const serviceDataMap: Record<string, ServiceData> = {
      // Permanent Makeup Services
      "permanent-makeup": {
        title: "Permanent Makeup Services",
        description: "Transform your natural beauty with our comprehensive permanent makeup services. From microblading to scalp micropigmentation, we offer professional, long-lasting solutions that enhance your features and boost your confidence.",
        duration: "2-4 Hours",
        category: "Permanent Makeup",
        price: "Starting from ₹15,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Professional certified artists",
          "Latest techniques and equipment",
          "Safe and sterile environment",
          "Customized color matching",
          "Comprehensive aftercare guidance",
          "Touch-up sessions included"
        ],
        benefits: [
          "Save time on daily makeup routine",
          "Waterproof and long-lasting results",
          "Natural-looking enhancement",
          "Perfect for active lifestyles",
          "Boosts self-confidence",
          "Low maintenance beauty solution"
        ],
        process: [
          "Initial consultation and design",
          "Color selection and patch test",
          "Treatment application",
          "Aftercare instructions",
          "Follow-up appointment scheduling",
          "Touch-up session (if needed)"
        ],
        services: [
          {
            name: "Microblading",
            link: "/services/permanent-makeup/microblading",
            description: "Natural-looking eyebrow enhancement using fine strokes",
            price: "₹15,000"
          },
          {
            name: "Ombre Brows",
            link: "/services/permanent-makeup/ombre-brows",
            description: "Soft, powdered eyebrow effect for a natural look",
            price: "₹18,000"
          },
          {
            name: "Powder Brows",
            link: "/services/permanent-makeup/powder-brows",
            description: "Full, defined eyebrows with a powdered finish",
            price: "₹20,000"
          },
          {
            name: "Combination Brows",
            link: "/services/permanent-makeup/combination-brows",
            description: "Perfect blend of microblading and powder technique",
            price: "₹22,000"
          },
          {
            name: "Permanent Lip Color",
            link: "/services/permanent-makeup/lip-color",
            description: "Enhanced lip color and definition",
            price: "₹25,000"
          },
          {
            name: "Permanent Beauty Spot",
            link: "/services/permanent-makeup/beauty-spot",
            description: "Natural-looking beauty mark enhancement",
            price: "₹8,000"
          },
          {
            name: "Eye Lash Lift",
            link: "/services/permanent-makeup/lash-lift",
            description: "Curled and lifted eyelashes for enhanced eyes",
            price: "₹3,500"
          },
          {
            name: "Eyebrows Lamination",
            link: "/services/permanent-makeup/eyebrows-lamination",
            description: "Smooth, styled eyebrows with lasting effect",
            price: "₹4,500"
          },
          {
            name: "Scalp Micro Pigmentation",
            link: "/services/permanent-makeup/scalp-micropigmentation",
            description: "Hair follicle simulation for hair loss",
            price: "₹50,000"
          },
          {
            name: "Stretch Mark Camouflage",
            link: "/services/permanent-makeup/stretch-mark-camouflage",
            description: "Professional stretch mark coverage",
            price: "₹30,000"
          },
          {
            name: "Vitiligo Camouflage",
            link: "/services/permanent-makeup/vitiligo-camouflage",
            description: "Specialized treatment for vitiligo coverage",
            price: "₹35,000"
          }
        ]
      },
      // Cosmetology Services
      "cosmetology": {
        title: "Cosmetology Services",
        description: "Rejuvenate and revitalize your skin with our advanced cosmetology treatments. From HydraFacial to laser hair reduction, we provide comprehensive skin care solutions for all your beauty needs.",
        duration: "1-3 Hours",
        category: "Cosmetology",
        price: "Starting from ₹5,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Advanced skin analysis",
          "Customized treatment plans",
          "Latest technology and equipment",
          "Professional skincare products",
          "Expert dermatological guidance",
          "Comprehensive aftercare support"
        ],
        benefits: [
          "Improved skin texture and tone",
          "Reduced signs of aging",
          "Clearer, healthier skin",
          "Professional-grade results",
          "Personalized treatment approach",
          "Long-lasting skin improvements"
        ],
        process: [
          "Detailed skin consultation",
          "Skin analysis and assessment",
          "Customized treatment selection",
          "Professional treatment application",
          "Post-treatment care instructions",
          "Follow-up recommendations"
        ],
        services: [
          {
            name: "Vampire Facial",
            link: "/services/cosmetology/vampire-facial",
            description: "PRP facial treatment for skin rejuvenation",
            price: "₹15,000"
          },
          {
            name: "Mesotherapy",
            link: "/services/cosmetology/mesotherapy",
            description: "Micro-injections for targeted skin treatment",
            price: "₹12,000"
          },
          {
            name: "PRP for Hair",
            link: "/services/cosmetology/prp-hair",
            description: "Platelet-rich plasma therapy for hair growth",
            price: "₹18,000"
          },
          {
            name: "HydraFacial",
            link: "/services/cosmetology/hydrafacial",
            description: "Deep cleansing and hydrating facial treatment",
            price: "₹8,000"
          },
          {
            name: "Dermaplaning",
            link: "/services/cosmetology/dermaplaning",
            description: "Exfoliation treatment for smooth, glowing skin",
            price: "₹6,000"
          },
          {
            name: "Medicated Facial",
            link: "/services/cosmetology/medicated-facial",
            description: "Therapeutic facial for specific skin concerns",
            price: "₹7,500"
          },
          {
            name: "Laser Hair Reduction",
            link: "/services/cosmetology/laser-hair-reduction",
            description: "Permanent hair reduction using laser technology",
            price: "₹3,000/session"
          },
          {
            name: "Wellness Drips",
            link: "/services/cosmetology/wellness-drips",
            description: "IV therapy for overall health and wellness",
            price: "₹5,000"
          }
        ]
      },
      // Facial Aesthetics Services
      "facial-aesthetics": {
        title: "Facial Aesthetics Services",
        description: "Achieve your aesthetic goals with our advanced facial treatments. From Botox to thread lifts, we offer non-surgical solutions for facial rejuvenation and enhancement.",
        duration: "30-90 Minutes",
        category: "Facial Aesthetics",
        price: "Starting from ₹8,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Board-certified practitioners",
          "FDA-approved treatments",
          "Minimal downtime procedures",
          "Natural-looking results",
          "Comprehensive consultation",
          "Follow-up care included"
        ],
        benefits: [
          "Non-surgical facial enhancement",
          "Reduced fine lines and wrinkles",
          "Improved facial contours",
          "Boosted self-confidence",
          "Quick recovery time",
          "Long-lasting results"
        ],
        process: [
          "Detailed facial assessment",
          "Treatment planning and consultation",
          "Pre-treatment preparation",
          "Professional treatment application",
          "Post-treatment care instructions",
          "Follow-up appointment scheduling"
        ],
        services: [
          {
            name: "Botox",
            link: "/services/facial-aesthetics/botox",
            description: "Anti-wrinkle treatment for smooth, youthful skin",
            price: "₹8,000/unit"
          },
          {
            name: "Face Lift",
            link: "/services/facial-aesthetics/face-lift",
            description: "Non-surgical face lifting treatment",
            price: "₹25,000"
          },
          {
            name: "Thread Lift",
            link: "/services/facial-aesthetics/thread-lift",
            description: "Minimally invasive facial lifting procedure",
            price: "₹35,000"
          },
          {
            name: "Nose Fillers",
            link: "/services/facial-aesthetics/nose-fillers",
            description: "Non-surgical nose reshaping and enhancement",
            price: "₹20,000"
          },
          {
            name: "Chin & Jawline Augmentation",
            link: "/services/facial-aesthetics/chin-jawline",
            description: "Facial contouring with dermal fillers",
            price: "₹18,000"
          },
          {
            name: "Lip Fillers",
            link: "/services/facial-aesthetics/lip-fillers",
            description: "Natural-looking lip enhancement and volume",
            price: "₹15,000"
          },
          {
            name: "Chemical Peels",
            link: "/services/facial-aesthetics/chemical-peels",
            description: "Professional skin resurfacing treatment",
            price: "₹6,000"
          },
          {
            name: "Acne Scar Treatment",
            link: "/services/facial-aesthetics/acne-scar",
            description: "Advanced treatment for acne scar reduction",
            price: "₹12,000"
          },
          {
            name: "Vitamin Drips",
            link: "/services/facial-aesthetics/vitamin-drips",
            description: "IV vitamin therapy for skin health",
            price: "₹5,000"
          },
          {
            name: "PDRN",
            link: "/services/facial-aesthetics/pdrn",
            description: "Advanced skin regeneration treatment",
            price: "₹10,000"
          },
          {
            name: "Profhilo",
            link: "/services/facial-aesthetics/profhilo",
            description: "Bio-remodeling treatment for skin tightening",
            price: "₹18,000"
          },
          {
            name: "Hyperhidrosis",
            link: "/services/facial-aesthetics/hyperhidrosis",
            description: "Treatment for excessive sweating",
            price: "₹12,000"
          },
          {
            name: "Polynucleotides",
            link: "/services/facial-aesthetics/polynucleotides",
            description: "Advanced skin rejuvenation treatment",
            price: "₹15,000"
          },
          {
            name: "Exosomes",
            link: "/services/facial-aesthetics/exosomes",
            description: "Cutting-edge regenerative therapy",
            price: "₹20,000"
          },
          {
            name: "Neck Rejuvenation",
            link: "/services/facial-aesthetics/neck-rejuvenation",
            description: "Comprehensive neck and décolletage treatment",
            price: "₹16,000"
          },
          {
            name: "Hands Rejuvenation",
            link: "/services/facial-aesthetics/hands-rejuvenation",
            description: "Anti-aging treatment for hands",
            price: "₹12,000"
          }
        ]
      },
      // Dentistry Services
      "dentistry": {
        title: "Dentistry Services",
        description: "Achieve your perfect smile with our comprehensive dental services. From cosmetic dentistry to orthodontics, we provide complete oral health and aesthetic solutions.",
        duration: "1-3 Hours",
        category: "Dentistry",
        price: "Starting from ₹3,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Experienced dental professionals",
          "Modern dental technology",
          "Pain-free treatment options",
          "Comprehensive oral care",
          "Cosmetic and restorative solutions",
          "Emergency dental services"
        ],
        benefits: [
          "Improved oral health",
          "Enhanced smile aesthetics",
          "Better chewing and speaking",
          "Increased self-confidence",
          "Long-lasting results",
          "Professional dental care"
        ],
        process: [
          "Comprehensive dental examination",
          "Treatment planning and consultation",
          "Pre-treatment preparation",
          "Professional treatment delivery",
          "Post-treatment care instructions",
          "Follow-up and maintenance"
        ],
        services: [
          {
            name: "Veneers Dentures",
            link: "/services/dentistry/veneers-dentures",
            description: "Custom-made dental veneers for perfect smile",
            price: "₹15,000/tooth"
          },
          {
            name: "Smile Designing",
            link: "/services/dentistry/smile-designing",
            description: "Complete smile makeover and design",
            price: "₹25,000"
          },
          {
            name: "Invisalign",
            link: "/services/dentistry/invisalign",
            description: "Clear aligner orthodontic treatment",
            price: "₹1,50,000"
          },
          {
            name: "Extractions",
            link: "/services/dentistry/extractions",
            description: "Painless tooth extraction procedures",
            price: "₹3,000"
          },
          {
            name: "Gum Surgeries",
            link: "/services/dentistry/gum-surgeries",
            description: "Advanced periodontal surgical procedures",
            price: "₹8,000"
          },
          {
            name: "Orthodontics",
            link: "/services/dentistry/orthodontics",
            description: "Comprehensive teeth straightening treatment",
            price: "₹80,000"
          },
          {
            name: "Teeth Whitening",
            link: "/services/dentistry/teeth-whitening",
            description: "Professional teeth whitening treatment",
            price: "₹8,000"
          },
          {
            name: "Dental Implants",
            link: "/services/dentistry/dental-implants",
            description: "Permanent tooth replacement solution",
            price: "₹35,000"
          },
          {
            name: "Crown & Bridges",
            link: "/services/dentistry/crown-bridges",
            description: "Restorative dental crown and bridge work",
            price: "₹12,000"
          },
          {
            name: "Gum Depigmentation",
            link: "/services/dentistry/gum-depigmentation",
            description: "Treatment for dark gum pigmentation",
            price: "₹15,000"
          },
          {
            name: "Root Canal Treatment",
            link: "/services/dentistry/root-canal",
            description: "Painless root canal therapy",
            price: "₹8,000"
          },
          {
            name: "Tooth Colored Fillings",
            link: "/services/dentistry/tooth-colored-fillings",
            description: "Natural-looking composite fillings",
            price: "₹4,000"
          },
          {
            name: "Oral Cancer Screening",
            link: "/services/dentistry/oral-cancer",
            description: "Comprehensive oral cancer detection",
            price: "₹2,000"
          }
        ]
      }
    };

    const service = serviceDataMap[servicePath];
    if (service) {
      setServiceData(service);
    } else {
      setServiceData(null);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold mx-auto"></div>
          <p className="mt-4 text-luxury-muted">Loading service information...</p>
        </div>
      </div>
    );
  }

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-luxury-dark mb-4">Service Not Found</h1>
          <p className="text-luxury-muted mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <div 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${serviceData.image})`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              {serviceData.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {serviceData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {serviceData.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{serviceData.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Professional</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Expert Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Service Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-luxury-muted leading-relaxed">
                  {serviceData.description}
                </p>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
                <CardDescription>
                  What you can expect from our {serviceData.category.toLowerCase()} services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {serviceData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-luxury-muted">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card>
              <CardHeader>
                <CardTitle>Our Process</CardTitle>
                <CardDescription>
                  How we deliver exceptional {serviceData.category.toLowerCase()} services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-luxury-gold text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                      <span className="text-luxury-muted">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Service Info Card */}
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Service Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-luxury-muted">Duration:</span>
                  <span className="font-semibold">{serviceData.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-luxury-muted">Category:</span>
                  <span className="font-semibold">{serviceData.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-luxury-muted">Starting Price:</span>
                  <span className="text-2xl font-bold text-luxury-gold">{serviceData.price}</span>
                </div>
                <Button className="w-full" size="lg">
                  Book Consultation
                </Button>
                <Button variant="outline" className="w-full">
                  Download Brochure
                </Button>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Service Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-luxury-muted text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-luxury-dark mb-4">
              Our {serviceData.category} Services
            </h2>
            <p className="text-luxury-muted text-lg">
              Explore our comprehensive range of {serviceData.category.toLowerCase()} treatments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-luxury-gold">{service.price}</span>
                  </div>
                  <Button asChild className="w-full group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-300">
                    <Link to={service.link} className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default ServiceCategoryPage;
