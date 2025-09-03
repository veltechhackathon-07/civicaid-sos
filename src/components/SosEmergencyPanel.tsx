import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, AlertTriangle, MapPin, Shield, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  type: 'police' | 'fire' | 'medical' | 'personal';
}

interface SosEmergencyPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SosEmergencyPanel: React.FC<SosEmergencyPanelProps> = ({ isOpen, onClose }) => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationSharing, setLocationSharing] = useState(false);

  // Emergency contacts
  const emergencyContacts: EmergencyContact[] = [
    { id: '1', name: 'Police', phone: '100', type: 'police' },
    { id: '2', name: 'Fire Brigade', phone: '101', type: 'fire' },
    { id: '3', name: 'Ambulance', phone: '108', type: 'medical' }
  ];

  // Mock neighbor/community contacts
  const communityContacts = [
    { id: '1', name: 'John Smith', phone: '+91-9876543210', distance: '0.2 km', status: 'online' },
    { id: '2', name: 'Maria Garcia', phone: '+91-9876543211', distance: '0.5 km', status: 'online' },
    { id: '3', name: 'David Wilson', phone: '+91-9876543212', distance: '0.8 km', status: 'offline' }
  ];

  useEffect(() => {
    if (isOpen) {
      // Get user location when panel opens
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      }
    }
  }, [isOpen]);

  const handleEmergencyCall = (phone: string, name: string) => {
    // In a real app, this would initiate the call
    window.open(`tel:${phone}`, '_self');
    console.log(`Emergency call to ${name}: ${phone}`);
  };

  const handleCommunityAlert = (contact: any) => {
    // Send alert to community member
    console.log(`Sending alert to ${contact.name}`);
    // This would send a real-time notification via Firebase
  };

  const toggleLocationSharing = () => {
    setLocationSharing(!locationSharing);
    // In a real app, this would enable/disable real-time location sharing
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="bg-emergency text-emergency-foreground">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
              <CardTitle className="text-xl">Emergency Assistance</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-emergency-foreground hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Emergency Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emergency" />
              Emergency Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {emergencyContacts.map((contact) => (
                <Button
                  key={contact.id}
                  variant="emergency"
                  className="h-auto p-4 flex-col gap-2"
                  onClick={() => handleEmergencyCall(contact.phone, contact.name)}
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">{contact.name}</span>
                  <span className="text-sm opacity-90">{contact.phone}</span>
                </Button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Community Network */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Community Network
            </h3>
            <div className="space-y-3">
              {communityContacts.map((contact) => (
                <div key={contact.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{contact.distance}</span>
                        <Badge 
                          variant={contact.status === 'online' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {contact.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(`tel:${contact.phone}`, '_self')}
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCommunityAlert(contact)}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="emergency"
                      onClick={() => handleCommunityAlert(contact)}
                    >
                      Alert
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Live Location */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-success" />
              Live Location Tracker
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Location Sharing</span>
                  <Button
                    size="sm"
                    variant={locationSharing ? "success" : "outline"}
                    onClick={toggleLocationSharing}
                  >
                    {locationSharing ? "Active" : "Enable"}
                  </Button>
                </div>
                {userLocation ? (
                  <div className="text-sm text-muted-foreground">
                    <p>Lat: {userLocation.lat.toFixed(6)}</p>
                    <p>Lng: {userLocation.lng.toFixed(6)}</p>
                    {locationSharing && (
                      <p className="text-success mt-2 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Location shared with emergency services
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">Getting location...</p>
                )}
              </div>
            </div>
          </div>

          <Separator />

          {/* Safety Guidelines */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Safety Guidelines</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Your location is automatically shared when you contact emergency services</p>
              <p>• Community alerts notify nearby trusted members</p>
              <p>• All emergency contacts are logged for security</p>
              <p>• Stay calm and provide clear information when calling</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SosEmergencyPanel;