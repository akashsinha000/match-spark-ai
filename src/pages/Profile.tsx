import React, { useState } from 'react';
import { Edit3, MapPin, Briefcase, GraduationCap, Settings, Star, Heart, Eye } from 'lucide-react';
import { MatchBadge } from '@/components/MatchBadge';

const mockProfile = {
  name: 'Alex Johnson',
  title: 'Senior Frontend Developer',
  location: 'San Francisco, CA',
  avatar: '👨‍💻',
  bio: 'Passionate frontend developer with 5+ years of experience building modern web applications. Love creating beautiful, performant user experiences.',
  experience: [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      duration: '2022 - Present',
      description: 'Led frontend development for multiple web applications using React, TypeScript, and Next.js.'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      duration: '2020 - 2022',
      description: 'Built responsive web applications and improved performance by 40%.'
    }
  ],
  education: [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of California, Berkeley',
      year: '2020'
    }
  ],
  skills: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'CSS', 'Node.js', 'GraphQL', 'AWS'],
  stats: {
    profileViews: 89,
    matches: 23,
    likes: 156
  }
};

export const Profile = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'stats' | 'settings'>('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: Edit3 },
    { id: 'stats', label: 'Stats', icon: Star },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="neural-card p-6 rounded-2xl text-center">
        <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-4xl">
          {mockProfile.avatar}
        </div>
        <h2 className="text-2xl font-bold mb-2">{mockProfile.name}</h2>
        <p className="text-muted-foreground mb-3">{mockProfile.title}</p>
        <div className="flex items-center justify-center text-muted-foreground text-sm mb-4">
          <MapPin size={14} className="mr-1" />
          {mockProfile.location}
        </div>
        <button className="btn-neural">Edit Profile</button>
      </div>

      {/* Bio */}
      <div className="neural-card p-6 rounded-2xl">
        <h3 className="font-semibold mb-3">About</h3>
        <p className="text-muted-foreground leading-relaxed">{mockProfile.bio}</p>
      </div>

      {/* Experience */}
      <div className="neural-card p-6 rounded-2xl">
        <h3 className="font-semibold mb-4 flex items-center">
          <Briefcase size={20} className="mr-2" />
          Experience
        </h3>
        <div className="space-y-4">
          {mockProfile.experience.map((exp, index) => (
            <div key={index} className="neural-card-inset p-4 rounded-xl">
              <h4 className="font-semibold">{exp.title}</h4>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="neural-card p-6 rounded-2xl">
        <h3 className="font-semibold mb-4 flex items-center">
          <GraduationCap size={20} className="mr-2" />
          Education
        </h3>
        <div className="space-y-4">
          {mockProfile.education.map((edu, index) => (
            <div key={index} className="neural-card-inset p-4 rounded-xl">
              <h4 className="font-semibold">{edu.degree}</h4>
              <p className="text-primary font-medium">{edu.school}</p>
              <p className="text-sm text-muted-foreground">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="neural-card p-6 rounded-2xl">
        <h3 className="font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {mockProfile.skills.map((skill, index) => (
            <span key={index} className="neural-card px-3 py-2 text-sm rounded-full bg-primary-muted text-primary">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStatsTab = () => (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-4">
        <div className="neural-card p-4 rounded-2xl text-center">
          <div className="w-12 h-12 rounded-full bg-primary/20 mx-auto mb-3 flex items-center justify-center">
            <Eye className="text-primary" size={20} />
          </div>
          <p className="text-2xl font-bold">{mockProfile.stats.profileViews}</p>
          <p className="text-xs text-muted-foreground">Profile Views</p>
        </div>
        
        <div className="neural-card p-4 rounded-2xl text-center">
          <div className="w-12 h-12 rounded-full bg-success/20 mx-auto mb-3 flex items-center justify-center">
            <Star className="text-success" size={20} />
          </div>
          <p className="text-2xl font-bold">{mockProfile.stats.matches}</p>
          <p className="text-xs text-muted-foreground">Matches</p>
        </div>
        
        <div className="neural-card p-4 rounded-2xl text-center">
          <div className="w-12 h-12 rounded-full bg-secondary/20 mx-auto mb-3 flex items-center justify-center">
            <Heart className="text-secondary" size={20} />
          </div>
          <p className="text-2xl font-bold">{mockProfile.stats.likes}</p>
          <p className="text-xs text-muted-foreground">Likes Received</p>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="neural-card p-6 rounded-2xl gradient-primary text-white">
        <h3 className="font-semibold mb-3">AI Performance Insights</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm opacity-90">Profile Completeness</span>
            <span className="text-sm font-semibold">85%</span>
          </div>
          <div className="w-full neural-card-inset h-2 rounded-full bg-white/20">
            <div className="h-full w-[85%] bg-white rounded-full"></div>
          </div>
        </div>
        <p className="text-sm opacity-90 mt-3">
          Complete your skills section to improve match quality by 15%!
        </p>
      </div>

      {/* Recent Activity */}
      <div className="neural-card p-6 rounded-2xl">
        <h3 className="font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <span className="text-sm">Profile viewed by TechFlow Inc.</span>
            <span className="text-xs text-muted-foreground">2h ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm">New match with Design Studio Co.</span>
            <span className="text-xs text-muted-foreground">1d ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm">Application sent to StartupXYZ</span>
            <span className="text-xs text-muted-foreground">3d ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      {/* Preferences */}
      <div className="neural-card p-6 rounded-2xl">
        <h3 className="font-semibold mb-4">Job Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Remote Work</span>
            <div className="neural-card w-12 h-6 rounded-full bg-primary p-1">
              <div className="w-4 h-4 rounded-full bg-white ml-auto"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Email Notifications</span>
            <div className="neural-card w-12 h-6 rounded-full bg-muted p-1">
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Push Notifications</span>
            <div className="neural-card w-12 h-6 rounded-full bg-primary p-1">
              <div className="w-4 h-4 rounded-full bg-white ml-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy */}
      <div className="neural-card p-6 rounded-2xl">
        <h3 className="font-semibold mb-4">Privacy & Security</h3>
        <div className="space-y-3">
          <button className="w-full text-left py-2 hover:text-primary transition-colors">
            <span className="text-sm">Privacy Settings</span>
          </button>
          <button className="w-full text-left py-2 hover:text-primary transition-colors">
            <span className="text-sm">Change Password</span>
          </button>
          <button className="w-full text-left py-2 hover:text-primary transition-colors">
            <span className="text-sm">Two-Factor Authentication</span>
          </button>
        </div>
      </div>

      {/* Account */}
      <div className="neural-card p-6 rounded-2xl">
        <h3 className="font-semibold mb-4">Account</h3>
        <div className="space-y-3">
          <button className="w-full text-left py-2 hover:text-primary transition-colors">
            <span className="text-sm">Export Data</span>
          </button>
          <button className="w-full text-left py-2 hover:text-destructive transition-colors">
            <span className="text-sm text-destructive">Delete Account</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="p-6 pt-12">
        <h1 className="text-2xl font-bold mb-2">Profile</h1>
        <p className="text-muted-foreground">Manage your professional presence</p>
      </div>

      {/* Tabs */}
      <div className="px-6 mb-6">
        <div className="neural-card p-2 rounded-full bg-muted/30">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                  activeTab === tab.id 
                    ? 'neural-card bg-card text-foreground shadow-md' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <tab.icon size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6 pb-8">
        {activeTab === 'profile' && renderProfileTab()}
        {activeTab === 'stats' && renderStatsTab()}
        {activeTab === 'settings' && renderSettingsTab()}
      </div>
    </div>
  );
};