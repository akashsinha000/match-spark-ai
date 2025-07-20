import React, { useState } from 'react';
import { Heart, MessageCircle, Star, MapPin, Clock } from 'lucide-react';
import { MatchBadge } from '@/components/MatchBadge';

const mockMatches = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechFlow Inc.',
    logo: '🚀',
    location: 'San Francisco, CA',
    matchPercentage: 92,
    status: 'mutual',
    matchedAt: '2 hours ago',
    message: 'Great profile! Would love to chat about this role.',
    isNew: true
  },
  {
    id: 2,
    title: 'UX Designer',
    company: 'Design Studio Co.',
    logo: '🎨',
    location: 'New York, NY',
    matchPercentage: 87,
    status: 'liked',
    matchedAt: '1 day ago',
    isNew: false
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'StartupXYZ',
    logo: '💡',
    location: 'Austin, TX',
    matchPercentage: 85,
    status: 'super',
    matchedAt: '3 days ago',
    isNew: false
  }
];

export const Matches = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'mutual' | 'liked'>('all');

  const filteredMatches = mockMatches.filter(match => {
    if (activeTab === 'all') return true;
    return match.status === activeTab || (activeTab === 'mutual' && match.status === 'mutual');
  });

  const tabs = [
    { id: 'all', label: 'All Matches', count: mockMatches.length },
    { id: 'mutual', label: 'Mutual', count: mockMatches.filter(m => m.status === 'mutual').length },
    { id: 'liked', label: 'You Liked', count: mockMatches.filter(m => m.status === 'liked').length }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="p-6 pt-12">
        <h1 className="text-2xl font-bold mb-2">Matches</h1>
        <p className="text-muted-foreground">Your connections and opportunities</p>
      </div>

      {/* Tabs */}
      <div className="px-6 mb-6">
        <div className="neural-card p-2 rounded-full bg-muted/30">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'neural-card bg-card text-foreground shadow-md' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      {activeTab === 'mutual' && (
        <div className="px-6 mb-6">
          <div className="neural-card p-4 gradient-primary text-white rounded-2xl">
            <div className="flex items-center mb-2">
              <Star size={16} className="mr-2" />
              <span className="text-sm font-medium">Great News!</span>
            </div>
            <p className="text-sm opacity-90">
              You have {mockMatches.filter(m => m.status === 'mutual').length} mutual matches. These companies are actively interested in your profile!
            </p>
          </div>
        </div>
      )}

      {/* Matches List */}
      <div className="px-6 space-y-4">
        {filteredMatches.map((match) => (
          <div key={match.id} className="neural-card p-4 rounded-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-start space-x-4">
              {/* Company Logo */}
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white text-xl flex-shrink-0">
                {match.logo}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold truncate">{match.title}</h3>
                    <p className="text-muted-foreground text-sm">{match.company}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {match.isNew && (
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    )}
                    <MatchBadge percentage={match.matchPercentage} size="sm" />
                  </div>
                </div>

                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <MapPin size={14} className="mr-1" />
                  {match.location}
                  <span className="mx-2">•</span>
                  <Clock size={14} className="mr-1" />
                  {match.matchedAt}
                </div>

                {match.message && (
                  <div className="neural-card-inset p-3 rounded-xl mb-3 bg-muted/30">
                    <p className="text-sm italic">"{match.message}"</p>
                  </div>
                )}

                {/* Status & Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {match.status === 'mutual' && (
                      <div className="flex items-center text-success text-sm">
                        <Heart size={14} className="mr-1 fill-current" />
                        Mutual Match
                      </div>
                    )}
                    {match.status === 'liked' && (
                      <div className="flex items-center text-primary text-sm">
                        <Heart size={14} className="mr-1" />
                        You Liked
                      </div>
                    )}
                    {match.status === 'super' && (
                      <div className="flex items-center text-warning text-sm">
                        <Star size={14} className="mr-1 fill-current" />
                        Super Liked
                      </div>
                    )}
                  </div>

                  <button className="neural-card p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                    <MessageCircle size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMatches.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 rounded-full bg-muted/30 mx-auto mb-4 flex items-center justify-center">
            <Heart className="text-muted-foreground" size={32} />
          </div>
          <h3 className="font-semibold mb-2">No matches yet</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Keep swiping to find your perfect opportunities!
          </p>
          <button className="btn-love">Discover Jobs</button>
        </div>
      )}
    </div>
  );
};