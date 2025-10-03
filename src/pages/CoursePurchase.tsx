import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import { apiFetch } from "@/lib/api";
import { ArrowLeft, CreditCard, CheckCircle } from "lucide-react";

interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  duration: string;
  level: string;
  instructor: string;
  curriculum: Array<{
    title: string;
    description: string;
    duration: string;
  }>;
  benefits: string[];
}

interface ShippingAddress {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
}

const CoursePurchase = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    name: user?.name || "",
    email: user?.email || "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: ""
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    fetchCourse();
  }, [courseId, user, navigate]);

  const fetchCourse = async () => {
    try {
      // For now, we'll use mock data. In a real app, you'd fetch from API
      const mockCourse: Course = {
        _id: courseId || "",
        title: "Master's in Permanent Eyebrows",
        description: "Comprehensive course covering all aspects of permanent eyebrow techniques including microblading, powder brows, and combination techniques.",
        price: 25000,
        originalPrice: 30000,
        category: "Permanent Makeup",
        images: ["/images/courses/1.webp"],
        duration: "3 months",
        level: "intermediate",
        instructor: "Dr. Anshul",
        curriculum: [
          { title: "Introduction to Permanent Makeup", description: "Basic concepts and safety", duration: "2 weeks" },
          { title: "Microblading Techniques", description: "Hands-on training", duration: "4 weeks" },
          { title: "Powder Brows", description: "Advanced techniques", duration: "3 weeks" },
          { title: "Business Setup", description: "Starting your practice", duration: "2 weeks" }
        ],
        benefits: [
          "Industry-recognized certification",
          "Hands-on training with live models",
          "Business guidance and support",
          "Lifetime access to course materials"
        ]
      };
      setCourse(mockCourse);
    } catch (error) {
      console.error("Failed to fetch course:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof ShippingAddress, value: string) => {
    setShippingAddress(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePurchase = async () => {
    if (!course) return;

    // Validate shipping address
    const requiredFields = ['name', 'address', 'city', 'state', 'pincode', 'phone'];
    const missingFields = requiredFields.filter(field => !shippingAddress[field as keyof ShippingAddress]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in: ${missingFields.join(', ')}`);
      return;
    }

    try {
      setProcessing(true);

      // Create order
      const orderResponse = await apiFetch("/api/orders", {
        method: "POST",
        body: JSON.stringify({
          items: [{
            type: "course",
            itemId: course._id,
            quantity: 1
          }],
          shippingAddress,
          paymentMethod: "razorpay"
        })
      });

      // Create Razorpay order
      const razorpayResponse = await apiFetch("/api/orders/razorpay/create", {
        method: "POST",
        body: JSON.stringify({
          orderId: orderResponse.order._id
        })
      });

      // Initialize Razorpay
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: razorpayResponse.order.amount,
        currency: razorpayResponse.order.currency,
        name: "Timeless Aesthetics",
        description: course.title,
        order_id: razorpayResponse.order.id,
        handler: async function (response: any) {
          try {
            await apiFetch("/api/orders/razorpay/verify", {
              method: "POST",
              body: JSON.stringify({
                orderId: orderResponse.order._id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature
              })
            });
            
            alert("Payment successful! You will receive course access details via email.");
            navigate("/orders");
          } catch (error) {
            console.error("Payment verification failed:", error);
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: shippingAddress.name,
          email: shippingAddress.email,
          contact: shippingAddress.phone
        },
        theme: {
          color: "#D4AF37"
        }
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Purchase failed:", error);
      alert("Purchase failed. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h1>
          <Button onClick={() => navigate("/courses")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Course Purchase</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary">{course.category}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                  <span className="text-sm text-gray-600">{course.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Course Description</h3>
                    <p className="text-gray-700">{course.description}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Instructor</h3>
                    <p className="text-gray-700">{course.instructor}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Curriculum</h3>
                    <div className="space-y-2">
                      {course.curriculum.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                          <span className="text-sm text-gray-500">{item.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">What You'll Get</h3>
                    <ul className="space-y-1">
                      {course.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Purchase Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Purchase Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Price */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Course Price</span>
                    <div className="text-right">
                      {course.originalPrice && (
                        <span className="text-sm text-gray-500 line-through mr-2">
                          ₹{course.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-green-600">
                        ₹{course.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  {course.originalPrice && (
                    <p className="text-sm text-green-600 mt-1">
                      Save ₹{(course.originalPrice - course.price).toLocaleString()}
                    </p>
                  )}
                </div>

                <Separator />

                {/* Shipping Address */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Contact Information</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={shippingAddress.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={shippingAddress.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={shippingAddress.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      value={shippingAddress.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={shippingAddress.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={shippingAddress.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        value={shippingAddress.pincode}
                        onChange={(e) => handleInputChange("pincode", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Purchase Button */}
                <Button
                  onClick={handlePurchase}
                  disabled={processing}
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  {processing ? "Processing..." : `Purchase Course - ₹${course.price.toLocaleString()}`}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By purchasing this course, you agree to our terms and conditions.
                  You will receive course access details via email after successful payment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePurchase;
