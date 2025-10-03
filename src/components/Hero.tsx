import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules"; // ❌ removed Navigation
import { Button } from "@/components/ui/button";
import { useState } from "react";

import hero1 from "@/assets/faical.webp";
import hero2 from "@/assets/filler.jpg";
import hero3 from "@/assets/clinic.jpg";
import mobileBanner from "@/assets/mobile.jpg";

const Hero = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const slides = [
    {
      image: hero1,
      imageMobile: mobileBanner,
      heading: "Discover Your Destiny Through Vedic Astrology",
      text: "Get deep insights into your life, career, marriage, and health with precise astrological analysis based on your birth chart. Align your decisions with cosmic timing and divine direction. Our expert astrologers bring clarity, confidence, and divine guidance to your journey.",
      button: "Book Appointment",
    },
    {
      image: hero2,
      imageMobile: mobileBanner,
      heading: "Find Balance in Life",
      text: "Life often feels overwhelming with uncertainty and stress. Our personalized astrology consultations help you find balance, peace of mind, and clarity in your decisions. Whether it’s relationships, work, or personal growth, we guide you toward harmony with cosmic wisdom.",
      button: "Book Appointment",
    },
    {
      image: hero3,
      imageMobile: mobileBanner,
      heading: "Unlock Your Potential",
      text: "Your birth chart is a key to untapped opportunities. With astrology, unlock hidden talents, make confident career decisions, and overcome life’s obstacles. From love and marriage to health and financial growth, we provide insights that empower your future.",
      button: "Book Appointment",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedName) {
      setError("Name is required");
      return;
    }
    if (!trimmedPhone) {
      setError("Phone number is required");
      return;
    }

    const parts = trimmedName.split(/\s+/);
    const firstName = parts[0];
    const lastName = parts.slice(1).join(" ");

    try {
      setSubmitting(true);
      const res = await fetch(
        import.meta.env.VITE_API_BASE_URL
          ? `${import.meta.env.VITE_API_BASE_URL}/api/leads`
          : `http://localhost:5000/api/leads`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone: trimmedPhone,
            message,
          }),
        }
      );
      if (!res.ok) throw new Error("Failed to submit");
      setSuccess("Thank you! We will contact you shortly.");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err: any) {
      setError(err?.message || "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background Images */}
            <div
              className="absolute inset-0 hidden md:block bg-cover bg-center transition-transform duration-500 hover:scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div
              className="absolute inset-0 md:hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageMobile})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-20">
              {/* Left Content */}
              <div className="flex-1 flex flex-col justify-center max-w-2xl text-left">
                <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-wide drop-shadow-xl font-playfair">
                  {slide.heading}
                </h1>
                <p className="text-base md:text-xl text-white/90 mb-8 leading-relaxed font-lato">
                  {slide.text}
                </p>
                <Button
                  variant="luxury"
                  className="w-[144px] py-2 text-sm font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform bg-gradient-to-r from-[#D4AF37] to-[#C5A572] text-white"
                  onClick={() => (window.location.href = "/book-appointment")}
                >
                  {slide.button}
                </Button>
              </div>

              {/* Right Form (Desktop) */}
              <div className="hidden md:block flex-1 max-w-md bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-6 font-playfair">
                  Get a Free Consultation
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                  <textarea
                    placeholder="Your Message (optional)"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                  <Button
                    type="submit"
                    variant="luxury"
                    size="lg"
                    className="w-full font-semibold shadow-lg hover:scale-105 transition-transform"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </Button>
                  {error && <p className="text-red-300 text-sm">{error}</p>}
                  {success && <p className="text-green-300 text-sm">{success}</p>}
                </form>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile Form */}
      <div className="md:hidden bg-[#FAF8F6] px-6 py-8">
        <h2 className="text-xl font-bold mb-4 font-playfair">
          Get a Free Consultation
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border bg-[#FFF5F2] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border bg-[#FFF5F2] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            required
          />
          <input
            type="email"
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border bg-[#FFF5F2] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
          <textarea
            placeholder="Your Message (optional)"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border bg-[#FFF5F2] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
          <Button
            type="submit"
            variant="luxury"
            size="lg"
            className="w-full"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </Button>
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
        </form>
      </div>
    </section>
  );
};

export default Hero;
