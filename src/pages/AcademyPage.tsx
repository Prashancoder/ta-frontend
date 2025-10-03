import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, BookOpen, Star, CheckCircle, ArrowRight, GraduationCap, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AcademyPage = () => {
  const courseCategories = [
    {
      title: "Permanent Makeup",
      description: "Master the art of permanent makeup with our comprehensive courses",
      courses: 8,
      duration: "2-10 Days",
      price: "Starting from ₹25,000",
      image: "/images/courses-banner.jpeg",
      features: [
        "Microblading techniques",
        "Powder brow application",
        "Lip micropigmentation",
        "Scalp micropigmentation",
        "Professional certification",
        "Hands-on training"
      ]
    },
    {
      title: "Cosmetology",
      description: "Learn advanced cosmetology techniques and skin care treatments",
      courses: 5,
      duration: "2-6 Months",
      price: "Starting from ₹25,000",
      image: "/images/courses-banner.jpeg",
      features: [
        "Chemical peel treatments",
        "HydraFacial technology",
        "Advanced facial techniques",
        "Skin analysis methods",
        "Professional certification",
        "Clinical experience"
      ]
    },
    {
      title: "Facial Aesthetics",
      description: "Master non-surgical facial treatments and injectable techniques",
      courses: 9,
      duration: "2-6 Months",
      price: "Starting from ₹40,000",
      image: "/images/courses-banner.jpeg",
      features: [
        "Botox and filler techniques",
        "Thread lift procedures",
        "Advanced injection methods",
        "Facial anatomy knowledge",
        "Professional certification",
        "Clinical supervision"
      ]
    },
    {
      title: "Fellowship Courses",
      description: "Comprehensive fellowship programs for complete aesthetic expertise",
      courses: 5,
      duration: "6-15 Months",
      price: "Starting from ₹2,00,000",
      image: "/images/courses-banner.jpeg",
      features: [
        "Complete aesthetic training",
        "Business management",
        "Research opportunities",
        "Clinical experience",
        "Mentorship program",
        "Advanced certification"
      ]
    }
  ];

  const academyFeatures = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Expert Faculty",
      description: "Learn from industry-leading professionals with years of experience"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Certified Programs",
      description: "All our courses are certified and recognized by industry standards"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Hands-on Training",
      description: "Practical training with real clients and modern equipment"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Small Batch Size",
      description: "Personalized attention with maximum 4 students per batch"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Lifetime Support",
      description: "Ongoing support and guidance even after course completion"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Comprehensive Curriculum",
      description: "Complete training covering theory, practice, and business aspects"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      course: "Masters in Facial Aesthetics",
      rating: 5,
      comment: "The academy provided excellent training with hands-on experience. The faculty is highly knowledgeable and supportive."
    },
    {
      name: "Sarah Johnson",
      course: "Permanent Makeup Course",
      rating: 5,
      comment: "I learned so much in just a few days. The small batch size allowed for personalized attention and better learning."
    },
    {
      name: "Dr. Rajesh Kumar",
      course: "Fellowship in Aesthetics",
      rating: 5,
      comment: "The comprehensive curriculum and practical training helped me establish my own successful practice."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <div 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/courses-banner.jpeg)`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Timeless Aesthetics Academy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Aesthetic Training
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Master the art of aesthetic medicine with our comprehensive courses, expert faculty, and hands-on training programs designed for professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Small Batches</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Certified Programs</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>Expert Faculty</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academy Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-luxury-dark mb-4">
            Why Choose Our Academy?
          </h2>
          <p className="text-luxury-muted text-lg">
            We provide world-class training with industry-leading standards
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academyFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center text-luxury-gold mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-luxury-muted">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Course Categories */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-luxury-dark mb-4">
              Our Course Categories
            </h2>
            <p className="text-luxury-muted text-lg">
              Choose from our comprehensive range of professional courses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {courseCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-luxury-gold">{category.courses}</div>
                      <div className="text-sm text-luxury-muted">Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-luxury-gold">{category.duration}</div>
                      <div className="text-sm text-luxury-muted">Duration</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                        <span className="text-luxury-muted text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-luxury-gold">{category.price}</span>
                  </div>
                  
                  <Button asChild className="w-full group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-300">
                    <Link to="/courses" className="flex items-center justify-center gap-2">
                      Explore Courses
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-luxury-dark mb-4">
            What Our Students Say
          </h2>
          <p className="text-luxury-muted text-lg">
            Hear from our successful graduates
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-luxury-gold fill-current" />
                  ))}
                </div>
                <CardDescription className="text-base italic">
                  "{testimonial.comment}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-luxury-dark">{testimonial.name}</div>
                <div className="text-sm text-luxury-muted">{testimonial.course}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-luxury-gold py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Aesthetic Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our academy and become a certified aesthetic professional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-luxury-gold">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default AcademyPage;
