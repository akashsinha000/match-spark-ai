import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { MapPin, Clock, Zap, Heart, Star, ChevronDown } from 'lucide-react';
import { MatchBadge } from './MatchBadge';

interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  salary: string;
  matchPercentage: number;
  tags: string[];
  description: string;
  culture: string;
  remote: boolean;
  posted: string;
}

interface SwipeCardProps {
  job: Job;
  onSwipe: (direction: 'like' | 'pass' | 'super') => void;
  isLoading?: boolean;
}

export const SwipeCard = forwardRef<any, SwipeCardProps>(({ job, onSwipe, isLoading }, ref) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  const triggerSwipe = (direction: 'like' | 'pass' | 'super') => {
    const element = document.getElementById(`swipe-card-${job.id}`);
    if (element) {
      element.style.animation = `swipe-${direction === 'like' ? 'like' : direction === 'pass' ? 'pass' : 'super'} 0.6s ease-out forwards`;
      setTimeout(() => onSwipe(direction), 300);
    }
  };

  useImperativeHandle(ref, () => ({
    triggerSwipe
  }));

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setDragOffset({ x: e.movementX, y: e.movementY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragOffset({ x: 0, y: 0 });
  };

  return (
    <div
      id={`swipe-card-${job.id}`}
      className={`swipe-card w-full h-full bg-card rounded-3xl overflow-hidden ${isDragging ? 'swiping' : ''} ${isLoading ? 'opacity-50' : ''}`}
      style={{
        transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) rotate(${dragOffset.x * 0.1}deg)`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Header */}
      <div className="relative p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white text-xl">
              {job.logo}
            </div>
            <div>
              <h3 className="font-semibold text-lg leading-tight">{job.title}</h3>
              <p className="text-muted-foreground text-sm">{job.company}</p>
            </div>
          </div>
          <MatchBadge percentage={job.matchPercentage} />
        </div>

        {/* Location & Type */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin size={14} className="mr-1" />
            {job.location}
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock size={14} className="mr-1" />
            {job.type}
          </div>
        </div>

        {/* Salary */}
        <div className="neural-card-inset p-3 rounded-xl mb-4">
          <p className="font-semibold text-primary">{job.salary}</p>
          <p className="text-xs text-muted-foreground mt-1">Annual salary</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="neural-card px-3 py-1 text-xs font-medium rounded-full bg-primary-muted text-primary">
              {tag}
            </span>
          ))}
          {job.tags.length > 3 && (
            <span className="text-xs text-muted-foreground">+{job.tags.length - 3} more</span>
          )}
        </div>

        {/* Remote Badge */}
        {job.remote && (
          <div className="inline-flex items-center neural-card px-3 py-2 rounded-full bg-success-glow/20">
            <Zap size={14} className="text-success mr-2" />
            <span className="text-xs font-medium text-success">Remote Friendly</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="px-6 pb-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {job.description}
        </p>
      </div>

      {/* Expandable Details */}
      <div className="px-6 pb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full neural-card p-3 rounded-xl hover:bg-muted/50 transition-colors"
        >
          <span className="text-sm font-medium">More Details</span>
          <ChevronDown 
            size={16} 
            className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
          />
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-3 animate-fade-in">
            <div className="neural-card-inset p-4 rounded-xl">
              <h4 className="font-medium mb-2">Company Culture</h4>
              <p className="text-sm text-muted-foreground">{job.culture}</p>
            </div>
            
            <div className="neural-card-inset p-4 rounded-xl">
              <h4 className="font-medium mb-2">All Skills</h4>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
                  <span key={index} className="neural-card px-2 py-1 text-xs rounded-lg bg-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Posted Time */}
      <div className="px-6 pb-6">
        <p className="text-xs text-muted-foreground">Posted {job.posted}</p>
      </div>
    </div>
  );
});

SwipeCard.displayName = 'SwipeCard';