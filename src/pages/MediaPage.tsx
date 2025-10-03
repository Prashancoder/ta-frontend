import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  tags: string[];
}

const MediaPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'blogs' | 'gallery'>('blogs');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const mediaType = pathSegments[1]; 
    
    if (mediaType === 'blogs') {
      setActiveTab('blogs');
      loadBlogPosts();
    } else if (mediaType === 'gallery') {
      setActiveTab('gallery');
      loadGalleryItems();
    } else {
      setActiveTab('blogs');
      loadBlogPosts();
    }
  }, [location.pathname]);

  const loadBlogPosts = () => {
    setLoading(true);
    const posts: BlogPost[] = [
      {
        id: '1',
        title: 'The Complete Guide to Permanent Makeup Aftercare',
        excerpt: 'Learn everything you need to know about caring for your permanent makeup to ensure the best results and longevity.',
        content: 'Permanent makeup aftercare is crucial for achieving optimal results...',
        author: 'Dr. Anshul',
        date: '2024-01-15',
        category: 'Permanent Makeup',
        image: '/assets/blogs/1.jfif',
        readTime: '5 min read',
        tags: ['aftercare', 'permanent makeup', 'tips']
      },
      {
        id: '2',
        title: 'Understanding Different Types of Chemical Peels',
        excerpt: 'Discover the various types of chemical peels available and which one might be right for your skin concerns.',
        content: 'Chemical peels are one of the most effective treatments for skin rejuvenation...',
        author: 'Dr. Anshul',
        date: '2024-01-10',
        category: 'Cosmetology',
        image: '/assets/blogs/2.jfif',
        readTime: '7 min read',
        tags: ['chemical peels', 'skin care', 'cosmetology']
      }
    ];
    setBlogPosts(posts);
    setLoading(false);
  };

  const loadGalleryItems = () => {
    setLoading(true);
    const items: GalleryItem[] = Array.from({ length: 6 }, (_, i) => ({
      id: String(i + 1),
      title: `Gallery Image ${i + 1}`,
      description: 'Beautiful transformation and results from our treatments',
      image: `/images/gallery/${i + 1}.png`,
      category: 'Aesthetic Treatment',
      date: '2024-01-01',
      tags: ['gallery', 'results']
    }));
    setGalleryItems(items);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold mx-auto"></div>
          <p className="mt-4 text-luxury-muted">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section with Banner Image */}
      <div
        className="relative text-white py-28 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/filler.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* overlay */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {activeTab === 'blogs' ? 'Our Blog' : 'Gallery'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {activeTab === 'blogs' 
              ? 'Stay updated with the latest trends, tips, and insights in aesthetic medicine'
              : 'Explore our amazing before & after results and treatment galleries'}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        {activeTab === 'blogs' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-luxury-muted">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-luxury-muted mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-300">
                    <Link to={`/blog/${post.id}`} className="flex items-center justify-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 text-lg">{item.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-luxury-muted mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <Button asChild className="w-full bg-gradient-to-r from-yellow-600 to-yellow-800 text-white hover:from-yellow-700 hover:to-yellow-900 transition-all duration-300 rounded-full shadow-md hover:shadow-lg">
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      Contact Us
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MediaPage;
