import React, { useState } from 'react';
import { ArrowLeft, Send, Paperclip, Phone, Video, MoreVertical } from 'lucide-react';

const mockConversations = [
  {
    id: 1,
    jobTitle: 'Senior Frontend Developer',
    company: 'TechFlow Inc.',
    logo: '🚀',
    lastMessage: 'Looking forward to our call tomorrow!',
    lastMessageTime: '2m',
    unreadCount: 0,
    isActive: true
  },
  {
    id: 2,
    jobTitle: 'UX Designer',
    company: 'Design Studio Co.',
    logo: '🎨',
    lastMessage: 'Could you share your portfolio?',
    lastMessageTime: '1h',
    unreadCount: 2,
    isActive: false
  }
];

const mockMessages = [
  {
    id: 1,
    text: 'Hi! Thanks for your interest in our Senior Frontend Developer position.',
    sender: 'recruiter',
    timestamp: '10:30 AM',
    senderName: 'TechFlow Hiring Team'
  },
  {
    id: 2,
    text: 'Hi! I\'m really excited about this opportunity. The role seems like a perfect fit for my skills.',
    sender: 'candidate',
    timestamp: '10:32 AM'
  },
  {
    id: 3,
    text: 'That\'s great to hear! Could you tell me more about your experience with React and TypeScript?',
    sender: 'recruiter',
    timestamp: '10:35 AM',
    senderName: 'TechFlow Hiring Team'
  },
  {
    id: 4,
    text: 'Of course! I\'ve been working with React for 4+ years and TypeScript for 3 years. I\'ve built several large-scale applications using these technologies.',
    sender: 'candidate',
    timestamp: '10:37 AM'
  },
  {
    id: 5,
    text: 'Excellent! Would you be available for a quick call tomorrow at 2 PM to discuss this further?',
    sender: 'recruiter',
    timestamp: '10:40 AM',
    senderName: 'TechFlow Hiring Team'
  },
  {
    id: 6,
    text: 'Yes, that works perfectly for me. Looking forward to our call tomorrow!',
    sender: 'candidate',
    timestamp: '10:42 AM'
  }
];

export const Chat = () => {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [showConversationList, setShowConversationList] = useState(true);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle send message logic
      setNewMessage('');
    }
  };

  const handleSelectConversation = (conversation: typeof mockConversations[0]) => {
    setSelectedConversation(conversation);
    setShowConversationList(false);
  };

  if (showConversationList) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="p-6 pt-12">
          <h1 className="text-2xl font-bold mb-2">Messages</h1>
          <p className="text-muted-foreground">Connect with potential employers</p>
        </div>

        {/* Conversations List */}
        <div className="px-6 space-y-3">
          {mockConversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => handleSelectConversation(conversation)}
              className="w-full neural-card p-4 rounded-2xl text-left hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white text-xl">
                  {conversation.logo}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold truncate">{conversation.jobTitle}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">{conversation.lastMessageTime}</span>
                      {conversation.unreadCount > 0 && (
                        <div className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                          {conversation.unreadCount}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{conversation.company}</p>
                  <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Empty State */}
        {mockConversations.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-full bg-muted/30 mx-auto mb-4 flex items-center justify-center">
              <Send className="text-muted-foreground" size={32} />
            </div>
            <h3 className="font-semibold mb-2">No conversations yet</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Start matching with companies to begin conversations!
            </p>
            <button className="btn-love">Discover Jobs</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Chat Header */}
      <div className="neural-card p-4 pt-12 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setShowConversationList(true)}
            className="neural-card p-2 rounded-full hover:bg-muted/50 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          
          <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white">
            {selectedConversation.logo}
          </div>
          
          <div>
            <h3 className="font-semibold text-sm">{selectedConversation.jobTitle}</h3>
            <p className="text-xs text-muted-foreground">{selectedConversation.company}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="neural-card p-2 rounded-full hover:bg-muted/50 transition-colors">
            <Phone size={18} />
          </button>
          <button className="neural-card p-2 rounded-full hover:bg-muted/50 transition-colors">
            <Video size={18} />
          </button>
          <button className="neural-card p-2 rounded-full hover:bg-muted/50 transition-colors">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {mockMessages.map((message, index) => (
          <div key={message.id} className={`flex ${message.sender === 'candidate' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] ${message.sender === 'candidate' ? 'chat-bubble-sent' : 'chat-bubble-received'} p-3 rounded-2xl`}>
              {message.sender === 'recruiter' && message.senderName && (
                <p className="text-xs text-muted-foreground mb-1">{message.senderName}</p>
              )}
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === 'candidate' ? 'text-white/70' : 'text-muted-foreground'}`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Anonymous Chat Notice */}
      <div className="px-4 py-2">
        <div className="neural-card-inset p-3 rounded-xl bg-muted/30 text-center">
          <p className="text-xs text-muted-foreground">
            🔒 This is an anonymous conversation through the job profile. Your personal details remain private.
          </p>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 neural-card mx-4 mb-4 rounded-2xl">
        <div className="flex items-center space-x-3">
          <button className="neural-card p-2 rounded-full hover:bg-muted/50 transition-colors">
            <Paperclip size={18} className="text-muted-foreground" />
          </button>
          
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-transparent outline-none text-sm"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          
          <button 
            onClick={handleSendMessage}
            className={`neural-card p-2 rounded-full transition-all duration-300 ${
              newMessage.trim() ? 'gradient-primary text-white' : 'text-muted-foreground'
            }`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};