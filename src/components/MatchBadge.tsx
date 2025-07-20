import React from 'react';
import { Zap } from 'lucide-react';

interface MatchBadgeProps {
  percentage: number;
  size?: 'sm' | 'md' | 'lg';
}

export const MatchBadge: React.FC<MatchBadgeProps> = ({ percentage, size = 'md' }) => {
  const getMatchColor = (percent: number) => {
    if (percent >= 85) return 'match-excellent';
    if (percent >= 70) return 'match-good';
    if (percent >= 55) return 'match-fair';
    return 'match-poor';
  };

  const getMatchLabel = (percent: number) => {
    if (percent >= 85) return 'Excellent';
    if (percent >= 70) return 'Good';
    if (percent >= 55) return 'Fair';
    return 'Low';
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base'
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16
  };

  return (
    <div className={`${getMatchColor(percentage)} ${sizeClasses[size]} rounded-full flex items-center space-x-1 font-semibold shadow-lg`}>
      <Zap size={iconSizes[size]} className="fill-current" />
      <span>{percentage}% Match</span>
    </div>
  );
};