import React, { useState } from 'react';
import { Search, Filter, MapPin, Clock, Heart, Bookmark } from 'lucide-react';
import { MatchBadge } from '@/components/MatchBadge';

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
    posted: '2 days ago',
    saved: false,
    applied: false,
    remote: true
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
    posted: '1 day ago',
    saved: true,
    applied: false,
    remote: false
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
    posted: '3 days ago',
    saved: false,
    applied: true,
    remote: true
  }
];

export const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'saved' | 'applied'>('all');

  const filters = [
    { id: 'all', label: 'All Jobs', count: mockJobs.length },
    { id: 'saved', label: 'Saved', count: mockJobs.filter(j => j.saved).length },
    { id: 'applied', label: 'Applied', count: mockJobs.filter(j => j.applied).length }
  ];

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === 'all') return matchesSearch;
    if (activeFilter === 'saved') return matchesSearch && job.saved;
    if (activeFilter === 'applied') return matchesSearch && job.applied;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="p-6 pt-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Jobs</h1>
            <p className="text-muted-foreground">Explore opportunities</p>
          </div>
          <button className="neural-card p-3 rounded-full">
            <Filter size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="neural-card-inset p-4 rounded-2xl">
          <div className="flex items-center space-x-3">
            <Search size={20} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search jobs, companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 mb-6">
        <div className="neural-card p-2 rounded-full bg-muted/30">
          <div className="flex">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'neural-card bg-card text-foreground shadow-md' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="px-6 space-y-4 pb-8">
        {filteredJobs.map((job) => (
          <div key={job.id} className="neural-card p-4 rounded-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white text-xl">
                  {job.logo}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-muted-foreground">{job.company}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <MatchBadge percentage={job.matchPercentage} size="sm" />
                <button className={`neural-card p-2 rounded-full transition-colors ${job.saved ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
                  <Bookmark size={16} className={job.saved ? 'fill-current' : ''} />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin size={14} className="mr-1" />
                {job.location}
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock size={14} className="mr-1" />
                {job.type}
              </div>
              {job.remote && (
                <span className="neural-card px-2 py-1 text-xs rounded-full bg-success-glow/20 text-success">
                  Remote
                </span>
              )}
            </div>

            <div className="neural-card-inset p-3 rounded-xl mb-4">
              <p className="font-semibold text-primary">{job.salary}</p>
              <p className="text-xs text-muted-foreground">Annual salary</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Posted {job.posted}</p>
              
              <div className="flex space-x-2">
                {job.applied ? (
                  <span className="neural-card px-4 py-2 rounded-full text-sm font-medium bg-success-glow/20 text-success">
                    Applied
                  </span>
                ) : (
                  <>
                    <button className="neural-card px-4 py-2 rounded-full text-sm font-medium hover:bg-muted/50 transition-colors">
                      View Details
                    </button>
                    <button className="btn-love py-2 px-6 text-sm">
                      Apply Now
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 rounded-full bg-muted/30 mx-auto mb-4 flex items-center justify-center">
            <Search className="text-muted-foreground" size={32} />
          </div>
          <h3 className="font-semibold mb-2">No jobs found</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Try adjusting your search or filters.
          </p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
            }}
            className="btn-love"
          >
            Show All Jobs
          </button>
        </div>
      )}
    </div>
  );
};