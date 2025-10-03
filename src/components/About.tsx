const About = () => {
  const highlights = [
    { number: "5000k+", label: "Graduates" },
    { number: "11+", label: "Years of Experience" },
    { number: "20k+", label: "Treatments Conducted" },
  ];

  return (
    <section className="py-20 bg-[#FAF8F6]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3B2F2F] mb-8 tracking-wide">
            About <span className="text-[#D4AF37]">Timeless Aesthetics</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-[#555555] leading-relaxed mb-12 max-w-3xl mx-auto font-lato">
            Pioneer in Permanent Makeup, Cosmetology & Facial Aesthetics in India led by{" "}
            <span className="text-[#D4AF37] font-semibold">Dr. Shikha Baghi</span>{" "}
            (BDS, MDS, Endodontist, AAM Diamond Trainer) and{" "}
            <span className="text-[#D4AF37] font-semibold">Mr. Ashish Thapar</span>{" "}
            (B.E., Founder & Managing Director).
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-[#FFF5F2] to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-playfair mb-2">
                    {highlight.number}
                  </div>
                  <div className="text-[#3B2F2F] font-medium text-lg">
                    {highlight.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
