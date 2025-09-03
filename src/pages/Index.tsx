import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  MapPin, 
  Users, 
  Wrench, 
  AlertTriangle, 
  CheckCircle, 
  Phone,
  ArrowRight,
  Star,
  Clock
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-xl font-bold">ServicePro Connect</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button variant="civic">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-hero text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-primary">
              🚨 Real-Time Emergency & Civic Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your City's{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Emergency Hub
              </span>{' '}
              & Service Platform
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Report civic issues, get emergency help, and connect with local service providers. 
              Real-time tracking, SOS alerts, and community-driven solutions for safer cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register">
                <Button variant="hero" size="xl" className="gap-2">
                  Start Reporting Issues
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10">
                  Join as Service Provider
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Ways to Make Your City Better</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you need help, want to help, or manage services - we have you covered
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Citizens */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/20 rounded-full w-fit">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">For Citizens</CardTitle>
                <CardDescription>Report issues and get emergency help</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Report issues with GPS location</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emergency" />
                    <span>SOS Emergency Panel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-success" />
                    <span>Track resolution progress</span>
                  </div>
                </div>
                <Link to="/register" className="block">
                  <Button variant="civic" className="w-full">
                    Start Reporting
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Service Providers */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-success/20 rounded-full w-fit">
                  <Wrench className="w-8 h-8 text-success" />
                </div>
                <CardTitle className="text-xl">For Service Providers</CardTitle>
                <CardDescription>Connect with customers who need help</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Real-time job matching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-warning" />
                    <span>Build your reputation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Manage assignments</span>
                  </div>
                </div>
                <Link to="/register" className="block">
                  <Button variant="provider" className="w-full">
                    Join as Provider
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Administrators */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-accent/20 rounded-full w-fit">
                  <Shield className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">For Administrators</CardTitle>
                <CardDescription>Manage and coordinate city services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Monitor all city issues</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Assign tasks to providers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Analytics & reporting</span>
                  </div>
                </div>
                <Link to="/register" className="block">
                  <Button variant="admin" className="w-full">
                    Admin Access
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Features */}
      <section className="py-20 bg-emergency/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emergency/20 text-emergency px-4 py-2 rounded-full mb-4">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">Emergency Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Real Emergencies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              When every second counts, our SOS system connects you to help instantly
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emergency/20 rounded-lg">
                  <Phone className="w-6 h-6 text-emergency" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Instant Emergency Contacts</h3>
                  <p className="text-muted-foreground">
                    One-tap access to police, fire, and medical services with automatic location sharing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Community Network</h3>
                  <p className="text-muted-foreground">
                    Alert nearby trusted neighbors and community members in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-success/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Live Location Tracking</h3>
                  <p className="text-muted-foreground">
                    Automatic GPS sharing with emergency services and trusted contacts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Emergency SOS Panel</h3>
              <div className="space-y-3">
                <Button variant="emergency" size="lg" className="w-full justify-start">
                  <Phone className="w-5 h-5" />
                  Emergency Services
                </Button>
                <Button variant="outline" size="lg" className="w-full justify-start">
                  <Users className="w-5 h-5" />
                  Community Network
                </Button>
                <Button variant="outline" size="lg" className="w-full justify-start">
                  <MapPin className="w-5 h-5" />
                  Share Live Location
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make Your City Safer?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of citizens, service providers, and administrators working together for better communities.
          </p>
          <Link to="/register">
            <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">ServicePro Connect</span>
          </div>
          <p className="text-muted-foreground">
            Building safer, more connected communities through technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
