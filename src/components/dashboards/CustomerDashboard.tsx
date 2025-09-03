import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SosEmergencyPanel from '@/components/SosEmergencyPanel';
import { 
  AlertTriangle, 
  MapPin, 
  Plus, 
  Clock, 
  CheckCircle, 
  Bell,
  LogOut,
  User,
  FileText
} from 'lucide-react';

const CustomerDashboard = () => {
  const { user, logout } = useAuth();
  const [showSOS, setShowSOS] = useState(false);

  // Mock data for demo
  const stats = {
    reported: 12,
    resolved: 8,
    pending: 3,
    inProgress: 1
  };

  const recentIssues = [
    {
      id: '1',
      title: 'Broken Street Light',
      category: 'power',
      status: 'resolved',
      location: 'Main Street, Block A',
      createdAt: '2024-01-15',
      priority: 'medium'
    },
    {
      id: '2',
      title: 'Pothole on Highway',
      category: 'road',
      status: 'in_progress',
      location: 'Highway 101, Mile 15',
      createdAt: '2024-01-14',
      priority: 'high'
    },
    {
      id: '3',
      title: 'Garbage Collection Issue',
      category: 'garbage',
      status: 'pending',
      location: 'Residential Area, Sector 7',
      createdAt: '2024-01-13',
      priority: 'low'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'in_progress':
        return <Clock className="w-4 h-4 text-warning" />;
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
      case 'pending':
        return <Badge className="status-pending">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

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

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header with SOS Button */}
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold">Citizen Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Welcome back, {user?.name}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {/* SOS Emergency Button - Most Important */}
                <Button
                  variant="emergency"
                  size="lg"
                  onClick={() => setShowSOS(true)}
                  className="pulse-emergency font-semibold"
                >
                  <AlertTriangle className="w-5 h-5" />
                  SOS Emergency
                </Button>

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
                <div className="text-2xl font-bold text-primary">{stats.reported}</div>
                <p className="text-sm text-muted-foreground">Issues Reported</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-success">{stats.resolved}</div>
                <p className="text-sm text-muted-foreground">Resolved</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-warning">{stats.inProgress}</div>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-muted-foreground">{stats.pending}</div>
                <p className="text-sm text-muted-foreground">Pending</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="civic" className="w-full justify-start">
                    <Plus className="w-4 h-4" />
                    Report New Issue
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="w-4 h-4" />
                    View Community Issues
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4" />
                    Track My Issues
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="w-4 h-4" />
                    Notifications
                  </Button>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-base">Issues Near You</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="map-container bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Interactive map will load here</p>
                      <p className="text-xs text-muted-foreground mt-1">Showing nearby civic issues</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Issues */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Your Recent Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentIssues.map((issue) => (
                      <div key={issue.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(issue.status)}
                            <h3 className="font-semibold">{issue.title}</h3>
                          </div>
                          {getStatusBadge(issue.status)}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <span className={`font-medium ${getPriorityColor(issue.priority)}`}>
                            {issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1)} Priority
                          </span>
                          <span className="capitalize">{issue.category}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{issue.location}</span>
                          <span>•</span>
                          <span>{new Date(issue.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-center">
                    <Button variant="outline">View All Issues</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* SOS Emergency Panel */}
      <SosEmergencyPanel isOpen={showSOS} onClose={() => setShowSOS(false)} />
    </>
  );
};

export default CustomerDashboard;