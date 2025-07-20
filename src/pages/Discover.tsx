import React, { useState, useRef } from 'react';
import { Heart, X, Star, MapPin, Clock, Zap } from 'lucide-react';
import { SwipeCard } from '@/components/SwipeCard';
import { MatchBadge } from '@/components/MatchBadge';

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechFlow Inc.',
    logo: '🚀',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $160k',
    matchPercentage: 92,
    tags: ['React', 'TypeScript', 'Next.js'],
    description: 'Join our innovative team building next-gen web applications.',
    culture: 'Fast-paced, innovative, collaborative',
    remote: true,
    posted: '2 days ago'
  },
  {
    id: 2,
    title: 'UX Designer',
    company: 'Design Studio Co.',
    logo: '🎨',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90k - $120k',
    matchPercentage: 87,
    tags: ['Figma', 'User Research', 'Prototyping'],
    description: 'Create beautiful, user-centered digital experiences.',
    culture: 'Creative, user-focused, flexible',
    remote: false,
    posted: '1 day ago'
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'StartupXYZ',
    logo: '💡',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110k - $140k',
    matchPercentage: 78,
    tags: ['Strategy', 'Analytics', 'Agile'],
    description: 'Lead product strategy for our growing SaaS platform.',
    culture: 'Entrepreneurial, data-driven, agile',
    remote: true,
    posted: '3 days ago'
  }
];

export const Discover = () => {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const swipeCardRef = useRef<any>(null);

  const currentJob = mockJobs[currentJobIndex];
  const remainingJobs = mockJobs.length - currentJobIndex;

  const handleSwipe = (direction: 'like' | 'pass' | 'super') => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (currentJobIndex < mockJobs.length - 1) {
        setCurrentJobIndex(prev => prev + 1);
      } else {
        // Show end of stack
        setCurrentJobIndex(0);
      }
      setIsLoading(false);
    }, 600);
  };

  const handleButtonAction = (action: 'pass' | 'super' | 'like') => {
    if (swipeCardRef.current) {
      swipeCardRef.current.triggerSwipe(action);
    }
  };

  if (!currentJob) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
            <Heart className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-4">That's all for now!</h2>
          <p className="text-muted-foreground mb-6">
            Check back later for new opportunities, or refine your preferences.
          </p>
          <button className="btn-love">Update Preferences</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <div>
          <h1 className="text-2xl font-bold">Discover</h1>
          <p className="text-muted-foreground">{remainingJobs} opportunities waiting</p>
        </div>
        <div className="neural-card p-3 rounded-full">
          <Zap className="text-primary" size={20} />
        </div>
      </div>

      {/* AI Insights */}
      <div className="px-6 mb-6">
        <div className="neural-card p-4 gradient-primary text-white rounded-2xl">
          <div className="flex items-center mb-2">
            <Zap size={16} className="mr-2" />
            <span className="text-sm font-medium">AI Insight</span>
          </div>
          <p className="text-sm opacity-90">
            This role matches your React expertise and remote work preference perfectly!
          </p>
        </div>
      </div>

      {/* Swipe Cards Stack */}
      <div className="px-6 mb-8">
        <div className="relative h-[500px] max-w-sm mx-auto">
          {/* Background cards for stack effect */}
          <div className="absolute inset-0 neural-card opacity-20 scale-95 rounded-3xl" />
          <div className="absolute inset-0 neural-card opacity-40 scale-[0.97] rounded-3xl" />
          
          {/* Main card */}
          <SwipeCard
            ref={swipeCardRef}
            job={currentJob}
            onSwipe={handleSwipe}
            isLoading={isLoading}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-8">
        <div className="flex justify-center items-center space-x-6">
          <button 
            onClick={() => handleButtonAction('pass')}
            className="w-16 h-16 rounded-full btn-pass flex items-center justify-center shadow-lg"
            disabled={isLoading}
          >
            <X size={24} />
          </button>
          
          <button 
            onClick={() => handleButtonAction('super')}
            className="w-14 h-14 rounded-full btn-superlike flex items-center justify-center shadow-lg"
            disabled={isLoading}
          >
            <Star size={20} />
          </button>
          
          <button 
            onClick={() => handleButtonAction('like')}
            className="w-16 h-16 rounded-full btn-love flex items-center justify-center shadow-lg"
            disabled={isLoading}
          >
            <Heart size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-4 space-x-8 text-xs text-muted-foreground">
          <span>Pass</span>
          <span>Super Like</span>
          <span>Like</span>
        </div>
      </div>
    </div>
  );
};