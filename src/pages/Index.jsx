import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Package2 } from "lucide-react";

function Index() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <img src="/images/toothbrush-hero.jpg" alt="Toothbrush" className="mx-auto w-1/2" />
        <h1 className="text-5xl font-bold">Revolutionize Your Oral Care</h1>
        <p className="text-xl text-muted-foreground">Experience the best in oral hygiene with our advanced toothbrushes.</p>
        <Button variant="primary" size="lg">Shop Now</Button>
      </section>

      {/* Features Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Features</h2>
        <div className="flex justify-center space-x-8">
          <Card className="w-1/4">
            <CardHeader>
              <Package2 className="h-10 w-10 mx-auto" />
              <CardTitle>Soft Bristles</CardTitle>
            </CardHeader>
            <CardContent>Gentle on your gums and effective in cleaning.</CardContent>
          </Card>
          <Card className="w-1/4">
            <CardHeader>
              <Package2 className="h-10 w-10 mx-auto" />
              <CardTitle>Ergonomic Handle</CardTitle>
            </CardHeader>
            <CardContent>Designed for comfort and control.</CardContent>
          </Card>
          <Card className="w-1/4">
            <CardHeader>
              <Package2 className="h-10 w-10 mx-auto" />
              <CardTitle>Eco-Friendly Materials</CardTitle>
            </CardHeader>
            <CardContent>Made with sustainable and biodegradable materials.</CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        <div className="flex justify-center space-x-8">
          <Card className="w-1/4">
            <CardHeader>
              <Avatar src="/images/customer1.jpg" alt="Customer 1" className="mx-auto" />
              <CardTitle>John Doe</CardTitle>
            </CardHeader>
            <CardContent>"This toothbrush has changed my life! My teeth have never felt cleaner."</CardContent>
          </Card>
          <Card className="w-1/4">
            <CardHeader>
              <Avatar src="/images/customer2.jpg" alt="Customer 2" className="mx-auto" />
              <CardTitle>Jane Smith</CardTitle>
            </CardHeader>
            <CardContent>"I love the eco-friendly materials. It's great to know I'm helping the environment."</CardContent>
          </Card>
          <Card className="w-1/4">
            <CardHeader>
              <Avatar src="/images/customer3.jpg" alt="Customer 3" className="mx-auto" />
              <CardTitle>Emily Johnson</CardTitle>
            </CardHeader>
            <CardContent>"The ergonomic handle makes it so easy to use. Highly recommend!"</CardContent>
          </Card>
        </div>
      </section>

      {/* Customer Shoutout Section */}
      <section className="text-center space-y-8 bg-gray-100 py-8">
        <h2 className="text-3xl font-bold">Customer Shoutout</h2>
        <Card className="mx-auto w-1/2">
          <CardHeader>
            <Avatar src="/images/customer4.jpg" alt="Customer 4" className="mx-auto" />
            <CardTitle>Michael Brown</CardTitle>
          </CardHeader>
          <CardContent>"I can't believe how much of a difference this toothbrush has made. My dentist even noticed the improvement!"</CardContent>
        </Card>
      </section>

      {/* Product Showcase */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <div className="flex justify-center space-x-8">
          <Card className="w-1/4">
            <img src="/images/toothbrush1.jpg" alt="Toothbrush Model 1" className="w-full" />
            <CardHeader>
              <CardTitle>Model 1</CardTitle>
            </CardHeader>
            <CardContent>Basic model with all essential features.</CardContent>
            <Button variant="primary" size="lg">Buy Now</Button>
          </Card>
          <Card className="w-1/4">
            <img src="/images/toothbrush2.jpg" alt="Toothbrush Model 2" className="w-full" />
            <CardHeader>
              <CardTitle>Model 2</CardTitle>
            </CardHeader>
            <CardContent>Advanced model with additional features.</CardContent>
            <Button variant="primary" size="lg">Buy Now</Button>
          </Card>
          <Card className="w-1/4">
            <img src="/images/toothbrush3.jpg" alt="Toothbrush Model 3" className="w-full" />
            <CardHeader>
              <CardTitle>Model 3</CardTitle>
            </CardHeader>
            <CardContent>Premium model with all the bells and whistles.</CardContent>
            <Button variant="primary" size="lg">Buy Now</Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center space-y-4">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">Facebook</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a>
        </div>
        <p className="text-muted-foreground">&copy; 2023 ToothBrush Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Index;