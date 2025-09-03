// Type definitions for ServicePro Connect

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'customer' | 'provider' | 'admin';
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  isApproved?: boolean; // For providers
  location?: {
    lat: number;
    lng: number;
    address?: string;
  };
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  category: 'road' | 'water' | 'power' | 'garbage' | 'other';
  priority: 'low' | 'medium' | 'high' | 'emergency';
  status: 'pending' | 'assigned' | 'in_progress' | 'resolved' | 'rejected';
  customerId: string;
  providerId?: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  images?: string[];
  videos?: string[];
  upvotes: number;
  upvotedBy: string[];
  createdAt: Date;
  updatedAt: Date;
  assignedAt?: Date;
  resolvedAt?: Date;
  estimatedResolutionTime?: Date;
}

export interface Provider {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: 'electrician' | 'plumber' | 'carpenter' | 'cleaner' | 'other';
  rating: number;
  completedJobs: number;
  location: {
    lat: number;
    lng: number;
    address?: string;
  };
  isOnline: boolean;
  isApproved: boolean;
  hourlyRate?: number;
  avatar?: string;
  createdAt: Date;
  lastSeen?: Date;
}

export interface ServiceRequest {
  id: string;
  customerId: string;
  providerId: string;
  serviceType: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  status: 'pending' | 'accepted' | 'declined' | 'in_progress' | 'completed' | 'cancelled';
  price?: number;
  estimatedDuration?: number;
  createdAt: Date;
  updatedAt: Date;
  acceptedAt?: Date;
  completedAt?: Date;
}

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  type: 'police' | 'fire' | 'medical' | 'personal';
  isPrimary?: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'emergency';
  read: boolean;
  createdAt: Date;
  actionUrl?: string;
}

export interface Analytics {
  totalIssues: number;
  resolvedIssues: number;
  pendingIssues: number;
  averageResolutionTime: number;
  issuesByCategory: Record<string, number>;
  issuesByStatus: Record<string, number>;
  monthlyTrends: Array<{
    month: string;
    issues: number;
    resolved: number;
  }>;
}