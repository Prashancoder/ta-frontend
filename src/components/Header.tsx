import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X, ChevronDown, ChevronRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";



interface SubmenuItem {
  label: string;
  link?: string;
  submenu?: SubmenuItem[];
}

interface MenuItem {
  label: string;
  link?: string;
  submenu?: SubmenuItem[];
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const { user } = useAuth();

  const navigationItems: MenuItem[] = [
    { label: "Home", link: "/" },
    {
      label: "Courses",
      submenu: [
        {
          label: "Permanent Makeup",
          submenu: [
            { label: "Master's in Permanent Eyebrows", link: "/courses/permanent-makeup/masters-eyebrows" },
            { label: "Master class in Scalp Micropigmentation", link: "/courses/permanent-makeup/master-scalp" },
            { label: "PG Diploma in Permanent Make up", link: "/courses/permanent-makeup/pg-diploma" },
            { label: "Certificate Course in Lip Micropigmentation", link: "/courses/permanent-makeup/cert-lip" },
            { label: "Certificate in Brows and Lash Lift", link: "/courses/permanent-makeup/cert-brows-lash" },
            { label: "Certificate in Scalp Micropigmentation", link: "/courses/permanent-makeup/cert-scalp" },
            { label: "Certificate course in Laser Hair Reduction", link: "/courses/permanent-makeup/cert-laser-hair" },
            { label: "Certificate Course Skin Technicial", link: "/courses/permanent-makeup/cert-skin-tech" }
          ]
        },
        {
          label: "Cosmetology",
          submenu: [
            { label: "Master Class in Chemical Peels", link: "/courses/cosmetology/master-chemical-peels" },
            { label: "Diploma in Advanced Cosmetology", link: "/courses/cosmetology/diploma-advanced" },
            { label: "Certificate in Professional Cosmetology", link: "/courses/cosmetology/cert-professional" },
            { label: "Certificate Course in Medicated Hydrafacial", link: "/courses/cosmetology/cert-hydrafacial" },
            { label: "Certificate Courses in Chemical Peels", link: "/courses/cosmetology/cert-chemical-peels" }
          ]
        },
        {
          label: "Facial Aesthetics",
          submenu: [
            { label: "Masters in Facial Aesthetics", link: "/courses/facial-aesthetics/masters" },
            { label: "Master Class In Lipolytic Injections", link: "/courses/facial-aesthetics/master-lipolytic" },
            { label: "Master Class in Nose correction", link: "/courses/facial-aesthetics/master-nose" },
            { label: "Master Class In Acne Scar Treatment", link: "/courses/facial-aesthetics/master-acne" },
            { label: "Masters Class in Plasma Pen", link: "/courses/facial-aesthetics/master-plasma" },
            { label: "Master class in Under eye rejuvenation", link: "/courses/facial-aesthetics/master-undereye" },
            { label: "Master class in Lip Fillers", link: "/courses/facial-aesthetics/master-fillers" },
            { label: "PG Diploma in Facial Aesthetics", link: "/courses/facial-aesthetics/pg-diploma" },
            { label: "Certificate Course in Lipolytic Injections", link: "/courses/facial-aesthetics/cert-lipolytic" }
          ]
        },
        {
          label: "Fellowship Courses",
          submenu: [
            { label: "Fellowship in Permanent Make up and Cosmetology", link: "/courses/fellowship/permanent-cosmetology" },
            { label: "Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology", link: "/courses/fellowship/facial-permanent-cosmetology" },
            { label: "Fellowship in Facial Aesthetics", link: "/courses/fellowship/facial-aesthetics" },
            { label: "Fellowship in Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen", link: "/courses/fellowship/permanent-micropigmentation" },
            { label: "Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen", link: "/courses/fellowship/facial-permanent-micropigmentation" }
          ]
        }
      ]
    },
    {
      label: "Services",
      submenu: [
        {
          label: "Permanent Makeup",
          submenu: [
            { label: "Microblading", link: "/services/permanent-makeup/microblading" },
            { label: "Ombre Brows", link: "/services/permanent-makeup/ombre-brows" },
            { label: "Powder Brows", link: "/services/permanent-makeup/powder-brows" },
            { label: "Combination Brows", link: "/services/permanent-makeup/combination-brows" },
            { label: "Permanent Lip Color", link: "/services/permanent-makeup/lip-color" },
            { label: "Permanent Beauty Spot", link: "/services/permanent-makeup/beauty-spot" },
            { label: "Eye Lash Lift", link: "/services/permanent-makeup/lash-lift" },
            { label: "Eyebrows Lamination", link: "/services/permanent-makeup/eyebrows-lamination" },
            { label: "Scalp Micro Pigmentation", link: "/services/permanent-makeup/scalp-micropigmentation" },
            { label: "Stretch Mark Camouflage", link: "/services/permanent-makeup/stretch-mark-camouflage" },
            { label: "Vitiligo Camouflage", link: "/services/permanent-makeup/vitiligo-camouflage" },
          ],
        },
        {
          label: "Cosmetology",
          submenu: [
            { label: "Vampire Facial", link: "/services/cosmetology/vampire-facial" },
            { label: "Mesotherapy", link: "/services/cosmetology/mesotherapy" },
            { label: "PRP for Hair", link: "/services/cosmetology/prp-hair" },
            { label: "HydraFacial", link: "/services/cosmetology/hydrafacial" },
            { label: "Dermaplaning", link: "/services/cosmetology/dermaplaning" },
            { label: "Medicated Facial", link: "/services/cosmetology/medicated-facial" },
            { label: "Laser Hair Reduction", link: "/services/cosmetology/laser-hair-reduction" },
            { label: "Wellness Drips", link: "/services/cosmetology/wellness-drips" },
          ],
        },
        {
          label: "Facial Aesthetics",
          submenu: [
            { label: "Botox", link: "/services/facial-aesthetics/botox" },
            { label: "Face Lift", link: "/services/facial-aesthetics/face-lift" },
            { label: "Thread Lift", link: "/services/facial-aesthetics/thread-lift" },
            { label: "Nose Fillers", link: "/services/facial-aesthetics/nose-fillers" },
            { label: "Chin & Jawline Augmentation", link: "/services/facial-aesthetics/chin-jawline" },
            { label: "Lip Fillers", link: "/services/facial-aesthetics/lip-fillers" },
            { label: "Chemical Peels", link: "/services/facial-aesthetics/chemical-peels" },
            { label: "Acne Scar Treatment", link: "/services/facial-aesthetics/acne-scar" },
            { label: "Vitamin Drips", link: "/services/facial-aesthetics/vitamin-drips" },
            { label: "PDRN", link: "/services/facial-aesthetics/pdrn" },
            { label: "Profhilo", link: "/services/facial-aesthetics/profhilo" },
            { label: "Hyperhidrosis", link: "/services/facial-aesthetics/hyperhidrosis" },
            { label: "Polynucleotides", link: "/services/facial-aesthetics/polynucleotides" },
            { label: "Exosomes", link: "/services/facial-aesthetics/exosomes" },
            { label: "Neck Rejuvenation", link: "/services/facial-aesthetics/neck-rejuvenation" },
            { label: "Hands Rejuvenation", link: "/services/facial-aesthetics/hands-rejuvenation" },
          ],
        },
        {
          label: "Dentistry",
          submenu: [
            { label: "Veneers Dentures", link: "/services/dentistry/veneers-dentures" },
            { label: "Smile Designing", link: "/services/dentistry/smile-designing" },
            { label: "Invisalign", link: "/services/dentistry/invisalign" },
            { label: "Extractions", link: "/services/dentistry/extractions" },
            { label: "Gum Surgeries", link: "/services/dentistry/gum-surgeries" },
            { label: "Orthodontics", link: "/services/dentistry/orthodontics" },
            { label: "Teeth Whitening", link: "/services/dentistry/teeth-whitening" },
            { label: "Dental Implants", link: "/services/dentistry/dental-implants" },
            { label: "Crown & Bridges", link: "/services/dentistry/crown-bridges" },
            { label: "Gum Depigmentation", link: "/services/dentistry/gum-depigmentation" },
            { label: "Root Canal Treatment", link: "/services/dentistry/root-canal" },
            { label: "Tooth Colored Fillings", link: "/services/dentistry/tooth-colored-fillings" },
            { label: "Oral Cancer Screening", link: "/services/dentistry/oral-cancer" },
          ],
        },
      ],
    
    },
    {
      label: "Media",
      submenu: [
        // { label: "Blogs", link: "/media/blogs" },
        { label: "Gallery", link: "/media/gallery" }
      ]
    },

    {
      label: "Our Clinics",
      submenu: [
        { label: "Amritsar", link: "/clinics/amritsar" },
        { label: "Gurgaon", link: "/clinics/gurgaon" },
        { label: "Jammu", link: "/clinics/jammu" }
      ]
    },
    // {
    //   label: "Shop",
    //   submenu: [
    //     { label: "Permanent Makeup", link: "/shop/permanent-makeup" },
    //     { label: "Cosmetology", link: "/shop/cosmetology" },
    //     { label: "Facial Aesthetics", link: "/shop/facial-aesthetics" }
    //   ]
    // },
    // { label: "Academy", link: "/academy" },
    { label: "Contact Us", link: "/contact" },
  ];

  const toggleMobileSubmenu = (itemLabel: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(itemLabel) 
        ? prev.filter(item => item !== itemLabel)
        : [...prev, itemLabel]
    );
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedMobileItems([]);
  };

  return (
    <header className="bg-neutral-100 shadow-subtle sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="border-b border-border py-2 text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-luxury-muted">
              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                +91 8750027070
              </span>
              <span>info@timelessaesthetics.in</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              {/* <Button variant="luxury-ghost" size="sm">We Are Featured</Button> */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 text-luxury-dark hover:text-luxury-gold">
                      <img src="/logo-1.png" alt={user.name} className="w-8 h-8 rounded-full object-cover border" />
                      <span className="text-sm">{user.name}</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/account/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/cart">Add to Cart</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/orders">Orders</Link>
                    </DropdownMenuItem>
                    {user.role === "admin" && (
                      <DropdownMenuItem asChild>
                        <Link to="/admin/dashboard">Admin Dashboard</Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/logout">Logout</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/login">
                  {/* <Button variant="luxury" size="sm">Login</Button> */}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="/logo-1.png"
                  alt="Timeless Aesthetics Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.link ? (
                    <Link
                      to={item.link}
                      className="text-luxury-dark hover:text-luxury-gold font-medium transition-colors duration-300 flex items-center gap-1"
                    >
                      {item.label}
                      {item.submenu && <ChevronDown className="h-4 w-4" />}
                    </Link>
                  ) : (
                    <span className="text-luxury-dark hover:text-luxury-gold font-medium transition-colors duration-300 flex items-center gap-1 cursor-pointer">
                      {item.label}
                      {item.submenu && <ChevronDown className="h-4 w-4" />}
                    </span>
                  )}
                  
                  {/* First Level Dropdown */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <div key={subItem.label} className="relative group/sub">
                            {subItem.link ? (
                              <Link
                                to={subItem.link}
                                className="block px-4 py-2 text-luxury-dark hover:text-luxury-gold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                              >
                                {subItem.label}
                                {subItem.submenu && <ChevronRight className="h-4 w-4" />}
                              </Link>
                            ) : (
                              <span className="block px-4 py-2 text-luxury-dark hover:text-luxury-gold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between cursor-pointer">
                                {subItem.label}
                                {subItem.submenu && <ChevronRight className="h-4 w-4" />}
                              </span>
                            )}
                            
                            {/* Second Level Dropdown */}
                            {subItem.submenu && (
                              <div className="absolute top-0 left-full ml-2 w-80 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 ease-in-out transform scale-95 group-hover/sub:scale-100 z-50">
                                <div className="py-2">
                                  {subItem.submenu.map((subSubItem) => (
                                    <Link
                                      key={subSubItem.label}
                                      to={subSubItem.link || "#"}
                                      className="block px-4 py-2 text-luxury-dark hover:text-luxury-gold hover:bg-gray-50 transition-colors duration-200 text-sm"
                                    >
                                      {subSubItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}

                            
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Desktop Profile shortcut when user exists */}
              {user && (
                <Link to="/account/profile" className="text-sm text-luxury-dark hover:text-luxury-gold">My Account</Link>
              )}
            </div>

            {/* Mobile actions */}
            <div className="lg:hidden flex items-center gap-2">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center justify-center w-9 h-9 rounded-full border">
                      <img src="/logo-1.png" alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/account/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/cart">Add to Cart</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/orders">Orders</Link>
                    </DropdownMenuItem>
                    {user.role === "admin" && (
                      <DropdownMenuItem asChild>
                        <Link to="/admin/dashboard">Admin Dashboard</Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/logout">Logout</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/login">
                  {/* <Button variant="luxury" size="icon">
                    <img src="/logo-1.png" alt="Login" className="w-6 h-6 rounded-full" />
                  </Button> */}
                </Link>
              )}

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMobileMenu}
          />

          {/* Sidebar */}
          <div className="absolute top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-lg text-luxury-dark">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMobileMenu}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col p-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-2">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className="w-full flex items-center justify-between text-luxury-dark hover:text-luxury-gold font-medium transition-colors duration-300 py-2"
                      >
                        {item.label}
                        {expandedMobileItems.includes(item.label) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      
                      {/* First Level Mobile Submenu */}
                      {expandedMobileItems.includes(item.label) && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <div key={subItem.label}>
                              {subItem.submenu ? (
                                <div>
                                  <button
                                    onClick={() => toggleMobileSubmenu(`${item.label}-${subItem.label}`)}
                                    className="w-full flex items-center justify-between text-luxury-dark hover:text-luxury-gold font-medium transition-colors duration-300 py-1 text-sm"
                                  >
                                    {subItem.label}
                                    {expandedMobileItems.includes(`${item.label}-${subItem.label}`) ? (
                                      <ChevronDown className="h-3 w-3" />
                                    ) : (
                                      <ChevronRight className="h-3 w-3" />
                                    )}
                                  </button>
                                  
                                  {/* Second Level Mobile Submenu */}
                                  {expandedMobileItems.includes(`${item.label}-${subItem.label}`) && (
                                    <div className="ml-4 mt-1 space-y-1">
                                      {subItem.submenu.map((subSubItem) => (
                                        <Link
                                          key={subSubItem.label}
                                          to={subSubItem.link || "#"}
                                          className="block text-luxury-dark hover:text-luxury-gold transition-colors duration-300 py-1 text-xs"
                                          onClick={closeMobileMenu}
                                        >
                                          {subSubItem.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  to={subItem.link || "#"}
                                  className="block text-luxury-dark hover:text-luxury-gold transition-colors duration-300 py-1 text-sm"
                                  onClick={closeMobileMenu}
                                >
                                  {subItem.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.link || "#"}
                      className="block text-luxury-dark hover:text-luxury-gold font-medium transition-colors duration-300 py-2"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
