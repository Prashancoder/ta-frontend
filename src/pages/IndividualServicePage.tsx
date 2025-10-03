import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, BookOpen, Star, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServiceData {
  title: string;
  description: string;
  duration: string;
  category: string;
  subcategory: string;
  price: string;
  features: string[];
  benefits: string[];
  process: string[];
  aftercare: string[];
  contraindications: string[];
  image?: string;
  relatedServices: {
    name: string;
    link: string;
    description: string;
  }[];
}

const IndividualServicePage = () => {
  const location = useLocation();
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract service path from URL
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const servicePath = pathSegments.slice(1).join('/'); // Remove 'services' from path
    
    // Load service data based on path
    loadServiceData(servicePath);
  }, [location.pathname]);

  const loadServiceData = (servicePath: string) => {
    setLoading(true);
    
    // Service data mapping based on the navigation structure
    const serviceDataMap: Record<string, ServiceData> = {
      // Permanent Makeup Services
      "permanent-makeup/microblading": {
        title: "Microblading",
        description: "Achieve perfectly shaped, natural-looking eyebrows with our professional microblading service. Using fine, hair-like strokes, we create realistic eyebrow hair that lasts for 12-18 months.",
        duration: "2-3 Hours",
        category: "Permanent Makeup",
        subcategory: "Eyebrow Enhancement",
        price: "₹15,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Hand-drawn hair strokes",
          "Natural-looking results",
          "Customized shape and color",
          "Professional consultation",
          "Touch-up included",
          "Sterile environment"
        ],
        benefits: [
          "Save time on daily makeup",
          "Waterproof and smudge-proof",
          "Natural appearance",
          "Long-lasting results",
          "Perfect for active lifestyles",
          "Boosts self-confidence"
        ],
        process: [
          "Initial consultation and design",
          "Numbing cream application",
          "Custom shape drawing",
          "Color selection and matching",
          "Microblading procedure",
          "Aftercare instructions"
        ],
        aftercare: [
          "Keep area dry for 24 hours",
          "Apply healing ointment as directed",
          "Avoid sun exposure",
          "No swimming for 2 weeks",
          "Gentle cleansing only",
          "Schedule touch-up appointment"
        ],
        contraindications: [
          "Pregnancy or breastfeeding",
          "Diabetes (uncontrolled)",
          "Blood clotting disorders",
          "Skin conditions in treatment area",
          "Recent Botox in eyebrow area",
          "Allergic to numbing agents"
        ],
        relatedServices: [
          {
            name: "Ombre Brows",
            link: "/services/permanent-makeup/ombre-brows",
            description: "Soft, powdered eyebrow effect"
          },
          {
            name: "Powder Brows",
            link: "/services/permanent-makeup/powder-brows",
            description: "Full, defined eyebrows with powdered finish"
          },
          {
            name: "Combination Brows",
            link: "/services/permanent-makeup/combination-brows",
            description: "Perfect blend of microblading and powder"
          }
        ]
      },
      "permanent-makeup/ombre-brows": {
        title: "Ombre Brows",
        description: "Get soft, natural-looking eyebrows with our ombre brow technique. This method creates a gradient effect from light to dark, giving you perfectly defined brows that look naturally filled in.",
        duration: "2-3 Hours",
        category: "Permanent Makeup",
        subcategory: "Eyebrow Enhancement",
        price: "₹18,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Gradient color effect",
          "Soft, natural appearance",
          "Customized shape and color",
          "Professional consultation",
          "Touch-up included",
          "Sterile environment"
        ],
        benefits: [
          "Soft, natural look",
          "Long-lasting results",
          "Low maintenance",
          "Perfect for all skin types",
          "Waterproof and smudge-proof",
          "Enhances natural beauty"
        ],
        process: [
          "Initial consultation and design",
          "Numbing cream application",
          "Custom shape drawing",
          "Color gradient planning",
          "Ombre brow procedure",
          "Aftercare instructions"
        ],
        aftercare: [
          "Keep area dry for 24 hours",
          "Apply healing ointment as directed",
          "Avoid sun exposure",
          "No swimming for 2 weeks",
          "Gentle cleansing only",
          "Schedule touch-up appointment"
        ],
        contraindications: [
          "Pregnancy or breastfeeding",
          "Diabetes (uncontrolled)",
          "Blood clotting disorders",
          "Skin conditions in treatment area",
          "Recent Botox in eyebrow area",
          "Allergic to numbing agents"
        ],
        relatedServices: [
          {
            name: "Microblading",
            link: "/services/permanent-makeup/microblading",
            description: "Natural hair-stroke eyebrow enhancement"
          },
          {
            name: "Powder Brows",
            link: "/services/permanent-makeup/powder-brows",
            description: "Full, defined eyebrows with powdered finish"
          },
          {
            name: "Combination Brows",
            link: "/services/permanent-makeup/combination-brows",
            description: "Perfect blend of microblading and powder"
          }
        ]
      },
      "permanent-makeup/powder-brows": {
        title: "Powder Brows",
        description: "Achieve full, defined eyebrows with our powder brow technique. This method creates a soft, powdered effect that looks like you've applied makeup, giving you perfectly shaped brows that last.",
        duration: "2-3 Hours",
        category: "Permanent Makeup",
        subcategory: "Eyebrow Enhancement",
        price: "₹20,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Soft powdered effect",
          "Full, defined appearance",
          "Customized shape and color",
          "Professional consultation",
          "Touch-up included",
          "Sterile environment"
        ],
        benefits: [
          "Full, defined look",
          "Long-lasting results",
          "Low maintenance",
          "Perfect for all skin types",
          "Waterproof and smudge-proof",
          "Professional appearance"
        ],
        process: [
          "Initial consultation and design",
          "Numbing cream application",
          "Custom shape drawing",
          "Color selection and matching",
          "Powder brow procedure",
          "Aftercare instructions"
        ],
        aftercare: [
          "Keep area dry for 24 hours",
          "Apply healing ointment as directed",
          "Avoid sun exposure",
          "No swimming for 2 weeks",
          "Gentle cleansing only",
          "Schedule touch-up appointment"
        ],
        contraindications: [
          "Pregnancy or breastfeeding",
          "Diabetes (uncontrolled)",
          "Blood clotting disorders",
          "Skin conditions in treatment area",
          "Recent Botox in eyebrow area",
          "Allergic to numbing agents"
        ],
        relatedServices: [
          {
            name: "Microblading",
            link: "/services/permanent-makeup/microblading",
            description: "Natural hair-stroke eyebrow enhancement"
          },
          {
            name: "Ombre Brows",
            link: "/services/permanent-makeup/ombre-brows",
            description: "Soft, powdered eyebrow effect"
          },
          {
            name: "Combination Brows",
            link: "/services/permanent-makeup/combination-brows",
            description: "Perfect blend of microblading and powder"
          }
        ]
      },
      "permanent-makeup/combination-brows": {
        title: "Combination Brows",
        description: "Get the best of both worlds with our combination brow technique. This method combines microblading for natural hair strokes with powder technique for fullness, creating perfectly defined, natural-looking eyebrows.",
        duration: "2.5-3.5 Hours",
        category: "Permanent Makeup",
        subcategory: "Eyebrow Enhancement",
        price: "₹22,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Combined technique approach",
          "Natural hair strokes + powder effect",
          "Customized shape and color",
          "Professional consultation",
          "Touch-up included",
          "Sterile environment"
        ],
        benefits: [
          "Best of both techniques",
          "Natural yet defined look",
          "Long-lasting results",
          "Perfect for all skin types",
          "Waterproof and smudge-proof",
          "Professional appearance"
        ],
        process: [
          "Initial consultation and design",
          "Numbing cream application",
          "Custom shape drawing",
          "Color selection and matching",
          "Combination brow procedure",
          "Aftercare instructions"
        ],
        aftercare: [
          "Keep area dry for 24 hours",
          "Apply healing ointment as directed",
          "Avoid sun exposure",
          "No swimming for 2 weeks",
          "Gentle cleansing only",
          "Schedule touch-up appointment"
        ],
        contraindications: [
          "Pregnancy or breastfeeding",
          "Diabetes (uncontrolled)",
          "Blood clotting disorders",
          "Skin conditions in treatment area",
          "Recent Botox in eyebrow area",
          "Allergic to numbing agents"
        ],
        relatedServices: [
          {
            name: "Microblading",
            link: "/services/permanent-makeup/microblading",
            description: "Natural hair-stroke eyebrow enhancement"
          },
          {
            name: "Ombre Brows",
            link: "/services/permanent-makeup/ombre-brows",
            description: "Soft, powdered eyebrow effect"
          },
          {
            name: "Powder Brows",
            link: "/services/permanent-makeup/powder-brows",
            description: "Full, defined eyebrows with powdered finish"
          }
        ]
      },
      "permanent-makeup/lip-color": {
        title: "Permanent Lip Color",
        description: "Enhance your natural lip color and definition with our permanent lip color service. Get fuller, more defined lips with long-lasting color that won't fade or smudge.",
        duration: "2-3 Hours",
        category: "Permanent Makeup",
        subcategory: "Lip Enhancement",
        price: "₹25,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Natural lip enhancement",
          "Customized color selection",
          "Improved lip definition",
          "Professional consultation",
          "Touch-up included",
          "Sterile environment"
        ],
        benefits: [
          "Enhanced lip color",
          "Improved lip definition",
          "Long-lasting results",
          "No daily lipstick needed",
          "Waterproof and smudge-proof",
          "Natural appearance"
        ],
        process: [
          "Initial consultation and design",
          "Numbing cream application",
          "Color selection and matching",
          "Lip shape enhancement",
          "Permanent lip color procedure",
          "Aftercare instructions"
        ],
        aftercare: [
          "Keep area clean and dry",
          "Apply healing ointment as directed",
          "Avoid spicy foods",
          "No kissing for 24 hours",
          "Gentle cleansing only",
          "Schedule touch-up appointment"
        ],
        contraindications: [
          "Pregnancy or breastfeeding",
          "Cold sores or herpes",
          "Diabetes (uncontrolled)",
          "Blood clotting disorders",
          "Allergic to numbing agents",
          "Recent lip fillers"
        ],
        relatedServices: [
          {
            name: "Lip Fillers",
            link: "/services/facial-aesthetics/lip-fillers",
            description: "Natural-looking lip enhancement and volume"
          },
          {
            name: "Permanent Beauty Spot",
            link: "/services/permanent-makeup/beauty-spot",
            description: "Natural-looking beauty mark enhancement"
          }
        ]
      },
      "permanent-makeup/beauty-spot": {
        title: "Permanent Beauty Spot",
        description: "Add a natural-looking beauty mark to enhance your facial features. Our permanent beauty spot service creates a subtle, elegant mark that complements your natural beauty.",
        duration: "1 Hour",
        category: "Permanent Makeup",
        subcategory: "Facial Enhancement",
        price: "₹8,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Natural-looking beauty mark",
          "Customized size and placement",
          "Subtle color matching",
          "Professional consultation",
          "Touch-up included",
          "Sterile environment"
        ],
        benefits: [
          "Enhanced facial features",
          "Natural appearance",
          "Long-lasting results",
          "Low maintenance",
          "Waterproof and smudge-proof",
          "Elegant enhancement"
        ],
        process: [
          "Initial consultation and design",
          "Placement selection",
          "Size and color customization",
          "Numbing cream application",
          "Beauty spot procedure",
          "Aftercare instructions"
        ],
        aftercare: [
          "Keep area clean and dry",
          "Apply healing ointment as directed",
          "Avoid sun exposure",
          "Gentle cleansing only",
          "No picking or scratching",
          "Schedule touch-up appointment"
        ],
        contraindications: [
          "Pregnancy or breastfeeding",
          "Skin conditions in treatment area",
          "Diabetes (uncontrolled)",
          "Blood clotting disorders",
          "Allergic to numbing agents",
          "Moles or skin lesions in area"
        ],
        relatedServices: [
          {
            name: "Permanent Lip Color",
            link: "/services/permanent-makeup/lip-color",
            description: "Enhanced lip color and definition"
          },
          {
            name: "Microblading",
            link: "/services/permanent-makeup/microblading",
            description: "Natural hair-stroke eyebrow enhancement"
          }
        ]
      },
      "permanent-makeup/lash-lift": {
        title: "Eye Lash Lift",
        description: "Get beautifully curled and lifted eyelashes with our professional lash lift service. Enhance your natural lashes for a wide-eyed, glamorous look that lasts for 6-8 weeks.",
        duration: "1.5 Hours",
        category: "Permanent Makeup",
        subcategory: "Eyelash Enhancement",
        price: "₹3,500",
        image: "/images/courses-banner.jpeg",
        features: [
          "Natural lash enhancement",
          "Long-lasting curl",
          "No daily mascara needed",
          "Professional consultation",
          "Safe chemical process",
          "Sterile environment"
        ],
        benefits: [
          "Enhanced eye appearance",
          "Long-lasting results",
          "No daily maintenance",
          "Natural look",
          "Perfect for all lash types",
          "Boosts self-confidence"
        ],
        process: [
          "Initial consultation",
          "Lash assessment",
          "Eye protection application",
          "Lash lifting procedure",
          "Conditioning treatment",
          "Aftercare instructions"
        ],
        aftercare: [
          "Keep lashes dry for 24 hours",
          "Avoid rubbing eyes",
          "No mascara for 24 hours",
          "Gentle cleansing only",
          "Use lash conditioner",
          "Schedule maintenance appointment"
        ],
        contraindications: [
          "Pregnancy or breastfeeding",
          "Eye infections or conditions",
          "Allergic to lash chemicals",
          "Recent eye surgery",
          "Very short or sparse lashes",
          "Sensitive eyes"
        ],
        relatedServices: [
          {
            name: "Eyebrows Lamination",
            link: "/services/permanent-makeup/eyebrows-lamination",
            description: "Smooth, styled eyebrows with lasting effect"
          },
          {
            name: "Microblading",
            link: "/services/permanent-makeup/microblading",
            description: "Natural hair-stroke eyebrow enhancement"
          }
        ]
      },
      "permanent-makeup/eyebrows-lamination": {
        title: "Eyebrows Lamination",
        description: "Transform your eyebrows with our professional lamination service. Get smooth, styled eyebrows that stay in place, giving you perfectly groomed brows that last for 6-8 weeks.",
        duration: "1.5 Hours",
        category: "Permanent Makeup",
        subcategory: "Eyebrow Enhancement",
        price: "₹4,500",
        image: "/images/courses-banner.jpeg",
        features: [
          "Smooth, styled eyebrows",
          "Long-lasting effect",
          "No daily maintenance",
          "Professional consultation",
          "Safe chemical process",
          "Sterile environment"
        ],
        benefits: [
          "Perfectly groomed brows",
          "Long-lasting results",
          "No daily maintenance",
          "Natural look",
          "Perfect for all brow types",
          "Professional appearance"
        ],
        process: [
          "Initial consultation",
          "Brow assessment",
          "Brow shaping",
          "Lamination procedure",
          "Conditioning treatment",
          "Aftercare instructions"
        ],
        aftercare: [
          "Keep brows dry for 24 hours",
          "Avoid rubbing brows",
          "No brow products for 24 hours",
          "Gentle cleansing only",
          "Use brow conditioner",
          "Schedule maintenance appointment"
        ],
        contraindications: [
          "Pregnancy or breastfeeding",
          "Skin conditions in brow area",
          "Allergic to lamination chemicals",
          "Recent brow treatments",
          "Very sparse brows",
          "Sensitive skin"
        ],
        relatedServices: [
          {
            name: "Eye Lash Lift",
            link: "/services/permanent-makeup/lash-lift",
            description: "Curled and lifted eyelashes"
          },
          {
            name: "Microblading",
            link: "/services/permanent-makeup/microblading",
            description: "Natural hair-stroke eyebrow enhancement"
          }
        ]
      },
      "permanent-makeup/scalp-micropigmentation": {
        title: "Scalp Micro Pigmentation",
        description: "Restore your confidence with our professional scalp micropigmentation service. Create the appearance of a full head of hair with natural-looking hair follicles that last for years.",
        duration: "4-6 Hours",
        category: "Permanent Makeup",
        subcategory: "Hair Loss Solution",
        price: "₹50,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Natural hair follicle appearance",
          "Long-lasting results",
          "Customized hairline design",
          "Professional consultation",
          "Multiple sessions included",
          "Sterile environment"
        ],
        benefits: [
          "Restored confidence",
          "Natural appearance",
          "Long-lasting results",
          "Low maintenance",
          "Perfect for all hair loss types",
          "Professional appearance"
        ],
        process: [
          "Initial consultation and assessment",
          "Hairline design and planning",
          "Color matching",
          "First session treatment",
          "Follow-up sessions",
          "Aftercare instructions"
        ],
        aftercare: [
          "Keep scalp clean and dry",
          "Apply healing ointment as directed",
          "Avoid sun exposure",
          "No swimming for 2 weeks",
          "Gentle cleansing only",
          "Schedule follow-up sessions"
        ],
        contraindications: [
          "Pregnancy or breastfeeding",
          "Scalp conditions or infections",
          "Diabetes (uncontrolled)",
          "Blood clotting disorders",
          "Allergic to numbing agents",
          "Recent scalp surgery"
        ],
        relatedServices: [
          {
            name: "PRP for Hair",
            link: "/services/cosmetology/prp-hair",
            description: "Platelet-rich plasma therapy for hair growth"
          },
          {
            name: "Laser Hair Reduction",
            link: "/services/cosmetology/laser-hair-reduction",
            description: "Permanent hair reduction using laser technology"
          }
        ]
      },
      
      "permanent-makeup/stretch-mark-camouflage": {
        title: "Stretch Mark Camouflage",
        description: "Conceal stretch marks with our professional camouflage service. Using advanced techniques, we help reduce the appearance of stretch marks and restore your skin's confidence.",
        duration: "3-4 Hours",
        category: "Permanent Makeup",
        subcategory: "Skin Camouflage",
        price: "₹30,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Professional stretch mark coverage",
          "Natural skin tone matching",
          "Long-lasting results",
          "Professional consultation",
          "Multiple sessions included",
          "Sterile environment"
        ],
        benefits: [
          "Reduced stretch mark appearance",
          "Restored confidence",
          "Natural appearance",
          "Long-lasting results",
          "Low maintenance",
          "Professional results"
        ],
        process: [
          "Initial consultation and assessment",
          "Skin tone analysis",
          "Color matching",
          "Treatment area preparation",
          "Camouflage procedure",
          "Aftercare instructions"
        ],
        aftercare: [
          "Keep area clean and dry",
          "Apply healing ointment as directed",
          "Avoid sun exposure",
          "No swimming for 2 weeks",
          "Gentle cleansing only",
          "Schedule follow-up sessions"
        ],
        contraindications: [
          "Pregnancy or breastfeeding",
          "Active skin conditions",
          "Diabetes (uncontrolled)",
          "Blood clotting disorders",
          "Allergic to numbing agents",
          "Recent skin treatments"
        ],
        relatedServices: [
          {
            name: "Vitiligo Camouflage",
            link: "/services/permanent-makeup/vitiligo-camouflage",
            description: "Specialized treatment for vitiligo coverage"
          },
          {
            name: "Acne Scar Treatment",
            link: "/services/facial-aesthetics/acne-scar",
            description: "Advanced treatment for acne scar reduction"
          }
        ]
      },
      "permanent-makeup/vitiligo-camouflage": {
        title: "Vitiligo Camouflage",
        description: "Specialized treatment for vitiligo coverage using advanced micropigmentation techniques. Restore your skin's natural appearance with professional camouflage that lasts for years.",
        duration: "3-4 Hours",
        category: "Permanent Makeup",
        subcategory: "Skin Camouflage",
        price: "₹35,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Specialized vitiligo treatment",
          "Natural skin tone matching",
          "Long-lasting results",
          "Professional consultation",
          "Multiple sessions included",
          "Sterile environment"
        ],
        benefits: [
          "Reduced vitiligo appearance",
          "Restored confidence",
          "Natural appearance",
          "Long-lasting results",
          "Low maintenance",
          "Professional results"
        ],
        process: [
          "Initial consultation and assessment",
          "Skin tone analysis",
          "Color matching",
          "Treatment area preparation",
          "Vitiligo camouflage procedure",
          "Aftercare instructions"
        ],
        aftercare: [
          "Keep area clean and dry",
          "Apply healing ointment as directed",
          "Avoid sun exposure",
          "No swimming for 2 weeks",
          "Gentle cleansing only",
          "Schedule follow-up sessions"
        ],
        contraindications: [
          "Pregnancy or breastfeeding",
          "Active vitiligo progression",
          "Diabetes (uncontrolled)",
          "Blood clotting disorders",
          "Allergic to numbing agents",
          "Recent skin treatments"
        ],
        relatedServices: [
          {
            name: "Stretch Mark Camouflage",
            link: "/services/permanent-makeup/stretch-mark-camouflage",
            description: "Professional stretch mark coverage"
          },
          {
            name: "Acne Scar Treatment",
            link: "/services/facial-aesthetics/acne-scar",
            description: "Advanced treatment for acne scar reduction"
          }
        ]
      }
    };

    const service = serviceDataMap[servicePath];
    if (service) {
      setServiceData(service);
    } else {
      // Fallback placeholder for any service route not yet defined
      const [categoryKey, serviceKey] = servicePath.split('/');
      if (categoryKey && serviceKey) {
        const toTitleCase = (text: string) => text
          .split('-')
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' ');
        const categoryMap: Record<string, string> = {
          'permanent-makeup': 'Permanent Makeup',
          'cosmetology': 'Cosmetology',
          'facial-aesthetics': 'Facial Aesthetics',
          'dentistry': 'Dentistry'
        };
        const title = toTitleCase(serviceKey);
        const category = categoryMap[categoryKey] || 'Services';
        const placeholder: ServiceData = {
          title,
          description: `Details about ${title} in ${category}. This is placeholder content to be replaced with real copy.`,
          duration: "60 Minutes",
          category,
          subcategory: "General",
          price: "₹—",
          image: "/images/courses-banner.jpeg",
          features: [
            "Professional care",
            "Safe and hygienic",
            "Personalized plan",
            "Modern techniques",
            "Aftercare guidance",
            "Expert team"
          ],
          benefits: [
            "Visible improvement",
            "Confidence boost",
            "Minimal downtime",
            "Tailored approach",
            "Comfort-focused",
            "Quality results"
          ],
          process: [
            "Consultation and assessment",
            "Treatment planning",
            "Procedure",
            "Soothing and protection",
            "Aftercare instructions",
            "Follow-up (if needed)"
          ],
          aftercare: [
            "Follow provided care plan",
            "Use SPF daily",
            "Avoid heat/sun for 24-48h",
            "Hydrate and rest",
            "Gentle skincare",
            "Contact clinic for concerns"
          ],
          contraindications: [
            "Pregnancy (some treatments)",
            "Active infection at site",
            "Allergy to components",
            "Bleeding disorders",
            "Uncontrolled medical conditions",
            "Recent invasive procedure at site"
          ],
          relatedServices: []
        };
        setServiceData(placeholder);
      } else {
        setServiceData(null);
      }
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
            <div className="flex items-center justify-center gap-2 mb-4">
              <Button variant="ghost" size="sm" asChild className="text-white hover:text-luxury-gold">
                <Link to={`/services/${serviceData.category.toLowerCase().replace(' ', '-')}`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to {serviceData.category}
                </Link>
              </Button>
            </div>
            <Badge variant="secondary" className="mb-4">
              {serviceData.category} • {serviceData.subcategory}
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
                  What you can expect from our {serviceData.title.toLowerCase()} service
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
                  How we deliver exceptional {serviceData.title.toLowerCase()} service
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

            {/* Aftercare */}
            <Card>
              <CardHeader>
                <CardTitle>Aftercare Instructions</CardTitle>
                <CardDescription>
                  Important guidelines for optimal results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {serviceData.aftercare.map((instruction, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-luxury-muted">{instruction}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contraindications */}
            <Card>
              <CardHeader>
                <CardTitle>Contraindications</CardTitle>
                <CardDescription>
                  Please inform us if any of these apply to you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {serviceData.contraindications.map((contraindication, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-semibold">
                        !
                      </div>
                      <span className="text-luxury-muted">{contraindication}</span>
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
                  <span className="text-luxury-muted">Price:</span>
                  <span className="text-2xl font-bold text-luxury-gold">{serviceData.price}</span>
                </div>
                <Button className="w-full" size="lg">
                  Book Appointment
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

            {/* Related Services */}
            <Card>
              <CardHeader>
                <CardTitle>Related Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {serviceData.relatedServices.map((service, index) => (
                    <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <Link 
                        to={service.link}
                        className="block hover:text-luxury-gold transition-colors duration-200"
                      >
                        <h4 className="font-semibold text-sm">{service.name}</h4>
                        <p className="text-xs text-luxury-muted">{service.description}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default IndividualServicePage;
