import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Zap, Shield, Brain } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export const Welcome = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Smart algorithms find your perfect job or candidate fit',
      gradient: 'gradient-primary'
    },
    {
      icon: Heart,
      title: 'Swipe to Connect',
      description: 'Tinder-style interface makes job hunting fun',
      gradient: 'gradient-success'
    },
    {
      icon: Shield,
      title: 'Anonymous Chat',
      description: 'Connect safely with employers through job profiles',
      gradient: 'gradient-secondary'
    },
    {
      icon: Zap,
      title: 'Instant Matches',
      description: 'Get notified immediately when there\'s mutual interest',
      gradient: 'gradient-primary'
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="JobMatch Hero" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/40 to-secondary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-6 pt-20 pb-10">
          <div className="neural-card p-8 max-w-sm mx-auto bg-card/90 backdrop-blur-lg">
            <div className="ai-glow w-20 h-20 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
              <Heart className="text-white" size={32} />
            </div>
            
            <h1 className="text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              JobMatch
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Where careers meet opportunity. Swipe your way to the perfect job or candidate.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="px-6 pb-8">
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="neural-card p-4 bg-card/90 backdrop-blur-lg">
                <div className={`w-12 h-12 rounded-lg ${feature.gradient} mb-3 flex items-center justify-center`}>
                  <feature.icon className="text-white" size={20} />
                </div>
                <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="px-6 pb-8 space-y-4">
          <button 
            onClick={() => navigate('/onboarding/role')}
            className="w-full btn-love py-4 text-lg font-semibold"
          >
            Get Started
          </button>
          
          <button 
            onClick={() => navigate('/login')}
            className="w-full btn-neural text-foreground border border-border/50"
          >
            I already have an account
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground pb-6">
          By continuing, you agree to our Terms & Privacy Policy
        </div>
      </div>
    </div>
  );
};