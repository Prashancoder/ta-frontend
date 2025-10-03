import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Welcome to our blog section! Here we share the latest updates, insights, and news.
        </p>
        {/* Yaha tum apne blog list ya blog cards add karna */}
      </main>
      <Footer />
    </div>
  );
};

export default Blog ;
