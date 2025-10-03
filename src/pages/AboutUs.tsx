import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";
import FeaturedClients from "@/components/FeaturedClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfterResults from "@/components/BeforeAfterResults";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import banner from "@/assets/courses/courses-banner.jpeg";
import aboutImg from "@/assets/about-us.webp";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F6] font-lato">
      <Header />

      {/* Banner */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <img
          src={banner}
          alt="About Timeless Aesthetics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl font-playfair font-bold tracking-wide"
          >
            About Us
          </motion.h1>
        </div>
      </div>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold uppercase text-[#3B2F2F] mb-4 tracking-wide">
              Timeless Aesthetics
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[#555555] leading-relaxed mb-4"
            >
              Timeless Aesthetics is the best aesthetic clinic in Gurgaon that
              offers a diverse range of non-surgical aesthetic treatments,
              focusing on Permanent Makeup, Facial Aesthetics, and Modern
              Cosmetology. The Academy provides certified training programs,
              and the shop offers exclusive, health-compliant products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-[#555555] leading-relaxed mb-4"
            >
              Timeless Aesthetics pioneered Permanent Makeup, Cosmetology, and
              Facial Aesthetics in India, founded and led by{" "}
              <span className="font-semibold">Dr. Shikha Baghi</span>, BDS,
              MDS (Endodontics). She is one of the first Master Artists and
              Trainers in Permanent Makeup, Cosmetology, and Facial Aesthetics
              in the nation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-[#555555] leading-relaxed mb-4"
            >
              Dr. Baghi is also the only Diamond Trainer of the American
              Academy of Micropigmentation (AAM). Business development, sales,
              and marketing are guided by{" "}
              <span className="font-semibold">Mr. Ashish Thapar</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-6"
            >
              <a
                href="/about"
                className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full font-medium hover:bg-[#D4AF37] hover:text-white transition duration-300 transform hover:scale-110 shadow-md"
              >
                Know More
              </a>
            </motion.div>
          </motion.div>

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={aboutImg}
              alt="About Timeless Aesthetics"
              className="w-full h-auto rounded-xl shadow-xl border-4 border-[#D4AF37] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Enrichment Sections */}
      <WhyChooseUs />
      <BeforeAfterResults />
      <FeaturedClients />
      <TeamMember />
      <FAQ />
      <BlogSection />

      <Footer />
    </div>
  );
};

export default AboutUs;
