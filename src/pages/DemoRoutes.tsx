import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DemoRoutes: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-luxury-dark">
          Demo Routes
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Pages</CardTitle>
              <CardDescription>
                Explore our comprehensive course offerings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full">
                <Link to="/courses/permanent-makeup/masters-eyebrows">
                  Permanent Makeup Courses
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/courses/cosmetology/master-chemical-peels">
                  Cosmetology Courses
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/courses/facial-aesthetics/masters">
                  Facial Aesthetics Courses
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/courses/fellowship/facial-aesthetics">
                  Fellowship Courses
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Pages</CardTitle>
              <CardDescription>
                Discover our range of aesthetic services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full">
                <Link to="/services/permanent-makeup/microblading">
                  Permanent Makeup Services
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/services/cosmetology/hydrafacial">
                  Cosmetology Services
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/services/facial-aesthetics/botox">
                  Facial Aesthetics Services
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/services/dentistry/veneers-dentures">
                  Dentistry Services
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="luxury">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoRoutes;

