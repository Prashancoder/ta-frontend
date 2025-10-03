import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Heart, Filter, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { allProducts, ShopProduct } from "@/pages/shopData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product extends ShopProduct {
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  tags?: string[];
}

const ShopPage = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract category from URL
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const category = pathSegments[1]; // 'permanent-makeup', 'cosmetology', 'facial-aesthetics', or 'all'
    
    if (category && category !== 'shop') {
      setActiveCategory(category);
      loadProducts(category);
    } else {
      setActiveCategory('all');
      loadProducts('all');
    }
  }, [location.pathname]);

  const loadProducts = (category: string) => {
    setLoading(true);
    let filteredProducts = allProducts as Product[];
    if (category !== 'all') {
      filteredProducts = allProducts.filter(product => product.category === category);
    }

    setProducts(filteredProducts);
    setLoading(false);
  };

  const categories = [
    { id: 'all', name: 'All Products', count: allProducts.length },
    { id: 'permanent-makeup', name: 'Permanent Makeup', count: allProducts.filter(p=>p.category==='permanent-makeup').length },
    { id: 'cosmetology', name: 'Cosmetology', count: allProducts.filter(p=>p.category==='cosmetology').length },
    { id: 'facial-aesthetics', name: 'Facial Aesthetics', count: allProducts.filter(p=>p.category==='facial-aesthetics').length }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold mx-auto"></div>
          <p className="mt-4 text-luxury-muted">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

{/* Hero Section */}
<div 
  className="relative text-white py-20 bg-center bg-cover bg-no-repeat"
  style={{ backgroundImage: "url('/images/shop/banner.jpg')" }}
>
  <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for dark effect */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Professional Shop
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-8">
        Premium products and equipment for aesthetic professionals
      </p>
    </div>
  </div>
</div>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? 'default' : 'ghost'}
                    className="w-full justify-between"
                    onClick={() => {
                      setActiveCategory(category.id);
                      loadProducts(category.id);
                    }}
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Price Range</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Under ₹10,000</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">₹10,000 - ₹25,000</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Above ₹25,000</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Availability</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">In Stock</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">On Sale</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Search and Sort */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-luxury-muted" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Sort
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden rounded-t-lg relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-2 left-2 bg-red-500">
                        Sale
                      </Badge>
                    )}
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {typeof product.rating !== 'undefined' && (
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(product.rating || 0) ? 'text-luxury-gold fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-luxury-muted">({product.reviews || 0})</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-luxury-gold">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-luxury-muted line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1"
                        onClick={() => {
                          if (!user) {
                            navigate('/login');
                            return;
                          }
                          navigate(`/shop/product/${product.id}`);
                        }}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Buy Now
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => navigate(`/shop/product/${product.id}`)}>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Products Message */}
            {products.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-luxury-dark mb-2">No products found</h3>
                <p className="text-luxury-muted">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-luxury-gold py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with New Products
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter for the latest product updates and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default ShopPage;
