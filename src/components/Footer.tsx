import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-luxury-dark border-t border-border mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Info */}
        <div>
          <img
       src="/logo-1.png"
       alt="Timeless Aesthetics Logo"
            className="h-12 mb-4"
          />
          <p className="text-sm">
            Timeless Aesthetics brings world-class facial aesthetics, cosmetology,
            and permanent makeup training and services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-luxury-gold">Shop</a></li>
            <li><a href="#" className="hover:text-luxury-gold">Services</a></li>
            <li><a href="#" className="hover:text-luxury-gold">Academy</a></li>
            <li><a href="#" className="hover:text-luxury-gold">Blog</a></li>
            <li><a href="#" className="hover:text-luxury-gold">Contact</a></li>
            <li><a href="#" className="hover:text-luxury-gold">About</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3">CATEGORY</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-luxury-gold">Permanent Makeup</a></li>
            <li><a href="#" className="hover:text-luxury-gold">Facial Aesthetics</a></li>
            <li><a href="#" className="hover:text-luxury-gold">Cosmetology</a></li>
            <li><a href="#" className="hover:text-luxury-gold">Dentistry</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">GET IN TOUCH</h3>
          <p className="text-sm">
            Timeless Aesthetics <br />
            2nd Floor, Ameya One, Golf Course Road, Sector 42, Gurgaon, Haryana 122022
          </p>
          <p className="mt-2 text-sm">📞 (+91) 8750027070</p>
          <p className="text-sm">✉️ info@timelessaesthetics.in</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-luxury-gold" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-luxury-gold" /></a>
            <a href="#" aria-label="Linkedin"><Linkedin className="h-5 w-5 hover:text-luxury-gold" /></a>
            <a href="#" aria-label="Youtube"><Youtube className="h-5 w-5 hover:text-luxury-gold" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-luxury-gold" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border text-center py-4 text-xs">
        © 2023, All rights reserved. |{" "}
        <a href="#" className="hover:text-luxury-gold">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
