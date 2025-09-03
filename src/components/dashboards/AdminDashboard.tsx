import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  MapPin, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Bell,
  LogOut,
  User,
  Wrench,
  BarChart3,
  FileText,
  Settings
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  // Mock data for demo
  const stats = {
    totalIssues: 147,
    pendingIssues: 23,
    inProgressIssues: 15,
    resolvedIssues: 109,
    activeProviders: 18,
    totalUsers: 342
  };

  const recentIssues = [
    {
      id: '1',
      title: 'Water Main Break',
      category: 'water',
      priority: 'emergency',
      status: 'pending',
      location: 'Downtown District',
      reporter: 'Sarah Johnson',
      createdAt: '2024-01-15T10:30:00Z',
      upvotes: 15
    },
    {
      id: '2',
      title: 'Street Light Outage',
      category: 'power',
      priority: 'high',
      status: 'assigned',
      location: 'Residential Area B',
      reporter: 'Mike Chen',
      assignedTo: 'Electric Solutions Co.',
      createdAt: '2024-01-15T09:15:00Z',
      upvotes: 8
    },
    {
      id: '3',
      title: 'Pothole Repair Needed',
      category: 'road',
      priority: 'medium',
      status: 'in_progress',
      location: 'Main Street',
      reporter: 'Anna Davis',
      assignedTo: 'Road Maintenance Inc.',
      createdAt: '2024-01-14T16:45:00Z',
      upvotes: 23
    }
  ];

  const providers = [
    {
      id: '1',
      name: 'Electric Solutions Co.',
      serviceType: 'Electrical',
      rating: 4.8,
      completedJobs: 45,
      status: 'online',
      location: 'North District'
    },
    {
      id: '2',
      name: 'Road Maintenance Inc.',
      serviceType: 'Road Work',
      rating: 4.6,
      completedJobs: 32,
      status: 'busy',
      location: 'Central District'
    },
    {
      id: '3',
      name: 'Water Works Ltd.',
      serviceType: 'Plumbing',
      rating: 4.9,
      completedJobs: 38,
      status: 'offline',
      location: 'South District'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'in_progress':
        return <Clock className="w-4 h-4 text-warning" />;
      case 'assigned':
        return <User className="w-4 h-4 text-primary" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'resolved':
        return <Badge className="status-resolved">Resolved</Badge>;
      case 'in_progress':
        return <Badge className="status-progress">In Progress</Badge>;
      case 'assigned':
        return <Badge className="bg-primary text-primary-foreground">Assigned</Badge>;
      case 'pending':
        return <Badge className="status-pending">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'emergency':
        return <Badge className="status-emergency">Emergency</Badge>;
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge className="bg-warning text-warning-foreground">Medium</Badge>;
      default:
        return <Badge variant="secondary">Low</Badge>;
    }
  };

  const getProviderStatus = (status: string) => {
    switch (status) {
      case 'online':
        return <Badge className="bg-success text-success-foreground">Online</Badge>;
      case 'busy':
        return <Badge className="bg-warning text-warning-foreground">Busy</Badge>;
      default:
        return <Badge variant="secondary">Offline</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">System Administration Panel</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="w-4 h-4" />
              </Button>

              <Button variant="outline" size="icon">
                <Settings className="w-4 h-4" />
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
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.totalIssues}</div>
              <p className="text-sm text-muted-foreground">Total Issues</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-muted-foreground">{stats.pendingIssues}</div>
              <p className="text-sm text-muted-foreground">Pending</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">{stats.inProgressIssues}</div>
              <p className="text-sm text-muted-foreground">In Progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">{stats.resolvedIssues}</div>
              <p className="text-sm text-muted-foreground">Resolved</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">{stats.activeProviders}</div>
              <p className="text-sm text-muted-foreground">Providers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.totalUsers}</div>
              <p className="text-sm text-muted-foreground">Users</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="issues" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="issues">Issues Management</TabsTrigger>
            <TabsTrigger value="providers">Providers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="map">Map Overview</TabsTrigger>
          </TabsList>

          {/* Issues Management */}
          <TabsContent value="issues">
            <Card>
              <CardHeader>
                <CardTitle>Recent Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentIssues.map((issue) => (
                    <div key={issue.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(issue.status)}
                          <div>
                            <h3 className="font-semibold">{issue.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>by {issue.reporter}</span>
                              <span>•</span>
                              <span>{new Date(issue.createdAt).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {getPriorityBadge(issue.priority)}
                          {getStatusBadge(issue.status)}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{issue.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          <span>{issue.upvotes} upvotes</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        {issue.assignedTo ? (
                          <span className="text-sm">
                            Assigned to: <span className="font-medium">{issue.assignedTo}</span>
                          </span>
                        ) : (
                          <span className="text-sm text-muted-foreground">Not assigned</span>
                        )}
                        
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          {!issue.assignedTo && (
                            <Button size="sm" variant="civic">
                              Assign Provider
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Providers Management */}
          <TabsContent value="providers">
            <Card>
              <CardHeader>
                <CardTitle>Service Providers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {providers.map((provider) => (
                    <div key={provider.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-success/20 rounded-lg">
                            <Wrench className="w-6 h-6 text-success" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{provider.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{provider.serviceType}</span>
                              <span>•</span>
                              <span>⭐ {provider.rating}</span>
                              <span>•</span>
                              <span>{provider.completedJobs} jobs completed</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          {getProviderStatus(provider.status)}
                          <Button size="sm" variant="outline">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Issue Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Resolution Rate</span>
                      <span className="font-bold">74%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Avg. Response Time</span>
                      <span className="font-bold">2.3 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Most Common Category</span>
                      <span className="font-bold">Road Issues</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      Monthly Issues Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Provider Performance
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      User Engagement
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Map Overview */}
          <TabsContent value="map">
            <Card>
              <CardHeader>
                <CardTitle>City Overview Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="map-container bg-muted flex items-center justify-center" style={{ height: '500px' }}>
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-semibold mb-2">Interactive City Map</h3>
                    <p className="text-sm text-muted-foreground">
                      Shows all reported issues, provider locations, and resolution status
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Real-time updates with clustering and filtering capabilities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;