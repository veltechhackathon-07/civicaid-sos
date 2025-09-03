import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Wrench, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star,
  Bell,
  LogOut,
  User,
  Phone,
  Navigation
} from 'lucide-react';

const ProviderDashboard = () => {
  const { user, logout } = useAuth();
  const [isOnline, setIsOnline] = useState(true);

  // Mock data for demo
  const stats = {
    assigned: 5,
    completed: 23,
    rating: 4.8,
    earnings: 2450
  };

  const assignedIssues = [
    {
      id: '1',
      title: 'Fix Water Leak',
      category: 'water',
      priority: 'high',
      location: 'Oak Street, Building 12',
      distance: '2.5 km',
      customerName: 'John Doe',
      customerPhone: '+91-9876543210',
      estimatedTime: '2 hours',
      assignedAt: '2024-01-15'
    },
    {
      id: '2', 
      title: 'Electrical Repair',
      category: 'power',
      priority: 'medium',
      location: 'Pine Avenue, Apt 5B',
      distance: '1.8 km',
      customerName: 'Jane Smith',
      customerPhone: '+91-9876543211',
      estimatedTime: '1.5 hours',
      assignedAt: '2024-01-14'
    },
    {
      id: '3',
      title: 'Road Maintenance',
      category: 'road',
      priority: 'low',
      location: 'Highway 101, Mile 8',
      distance: '5.2 km',
      customerName: 'City Council',
      customerPhone: '+91-9876543212',
      estimatedTime: '4 hours',
      assignedAt: '2024-01-13'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-emergency';
      case 'medium':
        return 'text-warning';
      default:
        return 'text-muted-foreground';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'water':
        return '💧';
      case 'power':
        return '⚡';
      case 'road':
        return '🛣️';
      default:
        return '🔧';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold">Provider Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, {user?.name}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Online Status Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm">Offline</span>
                <Switch 
                  checked={isOnline} 
                  onCheckedChange={setIsOnline}
                />
                <span className="text-sm">Online</span>
                <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-success' : 'bg-muted-foreground'}`} />
              </div>

              <Button variant="outline" size="icon">
                <Bell className="w-4 h-4" />
              </Button>

              <Button variant="outline" size="icon">
                <User className="w-4 h-4" />
              </Button>

              <Button variant="ghost" onClick={logout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">{stats.assigned}</div>
              <p className="text-sm text-muted-foreground">Assigned Jobs</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">{stats.completed}</div>
              <p className="text-sm text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
                {stats.rating}
                <Star className="w-4 h-4 fill-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Rating</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">₹{stats.earnings}</div>
              <p className="text-sm text-muted-foreground">This Month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions & Map */}
          <div className="lg:col-span-1">
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm font-medium">Service Status</span>
                  <Badge variant={isOnline ? "default" : "secondary"}>
                    {isOnline ? "Available" : "Offline"}
                  </Badge>
                </div>
                
                {isOnline && (
                  <div className="text-center p-4 border-2 border-dashed border-success/30 rounded-lg">
                    <Wrench className="w-8 h-8 mx-auto mb-2 text-success" />
                    <p className="text-sm font-medium text-success">Ready for assignments</p>
                    <p className="text-xs text-muted-foreground">You'll receive new job notifications</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Location Map */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Your Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="map-container bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Your live location</p>
                    <p className="text-xs text-muted-foreground mt-1">Visible to nearby customers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Assigned Issues */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Assigned Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignedIssues.map((issue) => (
                    <div key={issue.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{getCategoryIcon(issue.category)}</div>
                          <div>
                            <h3 className="font-semibold">{issue.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className={`font-medium ${getPriorityColor(issue.priority)}`}>
                                {issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1)}
                              </span>
                              <span>•</span>
                              <Clock className="w-3 h-3" />
                              <span>{issue.estimatedTime}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline">{issue.distance}</Badge>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <MapPin className="w-3 h-3" />
                        <span>{issue.location}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="font-medium">{issue.customerName}</span>
                          <span className="text-muted-foreground ml-2">{issue.customerPhone}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Navigation className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="provider">
                            Start Job
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {assignedIssues.length === 0 && (
                  <div className="text-center py-8">
                    <Wrench className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-semibold mb-2">No assignments yet</h3>
                    <p className="text-sm text-muted-foreground">
                      Make sure you're online to receive new job assignments
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;