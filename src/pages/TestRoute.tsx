import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TestRoute: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-luxury-dark">
          Test Route
        </h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Route Testing</CardTitle>
            <CardDescription>
              This is a test route to verify routing functionality
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-luxury-muted">
                This page is used for testing routing functionality in the application.
                All routes should be working correctly.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React Router</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Shadcn UI</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full">
                <Link to="/">Home</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/demo-routes">Demo Routes</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/blog">Blog</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full">
                <Link to="/courses/permanent-makeup/masters-eyebrows">
                  Master's in Permanent Eyebrows
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/courses/facial-aesthetics/masters">
                  Masters in Facial Aesthetics
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestRoute;

