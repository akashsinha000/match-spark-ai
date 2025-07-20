import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Briefcase, ArrowRight } from 'lucide-react';
import aiAssistant from '@/assets/ai-assistant.jpg';

export const RoleSelection = () => {
  const navigate = useNavigate();

  const roles = [
    {
      type: 'candidate',
      title: 'I\'m looking for a job',
      description: 'Find amazing opportunities that match your skills and passion',
      icon: Users,
      gradient: 'gradient-success',
      route: '/onboarding/candidate'
    },
    {
      type: 'recruiter',
      title: 'I\'m hiring talent',
      description: 'Discover exceptional candidates for your open positions',
      icon: Briefcase,
      gradient: 'gradient-primary',
      route: '/onboarding/recruiter'
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full max-w-md mx-auto mt-8">
        <div className="neural-card-inset h-2 rounded-full bg-muted">
          <div className="h-full w-1/4 gradient-primary rounded-full" />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">Step 1 of 4</p>
      </div>

      {/* AI Assistant */}
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="ai-glow w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
            <img 
              src={aiAssistant} 
              alt="AI Assistant" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-2xl font-bold mb-4">
            Hi there! I'm Alex, your AI assistant
          </h1>
          <p className="text-muted-foreground mb-8">
            I'll help you set up your profile and find the perfect matches. Let's start by understanding what brings you here.
          </p>
        </div>

        {/* Role Cards */}
        <div className="space-y-4">
          {roles.map((role) => (
            <button
              key={role.type}
              onClick={() => navigate(role.route)}
              className="w-full neural-card p-6 text-left hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg ${role.gradient} flex items-center justify-center flex-shrink-0`}>
                  <role.icon className="text-white" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{role.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {role.description}
                  </p>
                </div>
                
                <ArrowRight 
                  className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" 
                  size={20} 
                />
              </div>
            </button>
          ))}
        </div>

        {/* Skip Option */}
        <button 
          onClick={() => navigate('/discover')}
          className="text-center text-muted-foreground text-sm mt-8 hover:text-foreground transition-colors"
        >
          I'll decide later
        </button>
      </div>
    </div>
  );
};