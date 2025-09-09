import { Folder, UserPlus, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductOverviewSection = () => {
  const features = [
    {
      icon: Folder,
      title: "File Sharing",
      description: "Easily upload and share project files securely."
    },
    {
      icon: UserPlus,
      title: "Team Sync",
      description: "Keep your team aligned with real-time updates."
    },
    {
      icon: Clock,
      title: "Time Tracker",
      description: "Log work hours directly within the platform."
    },
    {
      icon: Tag,
      title: "Task Tags",
      description: "Organize tasks with editable tags for quick filtering."
    }
  ];

  const additionalFeatures = [
    { color: 'bg-green-500', name: 'Resource Allocation' },
    { color: 'bg-red-500', name: 'Advanced Analytics' },
    { color: 'bg-blue-500', name: 'Real-time Collaboration' },
    { color: 'bg-yellow-500', name: 'Task Management' },
    { color: 'bg-purple-500', name: 'Security Measures' },
    { color: 'bg-green-500', name: 'Document Sharing' },
    { color: 'bg-pink-500', name: 'Client Communication' },
    { color: 'bg-red-500', name: 'Agile Workflow' }
  ];

  return (
    <section className="w-full bg-black py-24 px-10 flex flex-col items-center gap-5">
      <div className="w-full max-w-7xl flex flex-col items-center gap-20">
        {/* Header Section */}
        <div className="w-full max-w-4xl px-0 md:px-32 flex flex-col items-center gap-2.5">
          {/* Product Overview Badge */}
          <div className="relative p-px rounded-full bg-gradient-to-r from-red-500 via-orange-500 via-purple-500 to-pink-500">
            <div className="bg-card rounded-full px-3.5 py-2.5 flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">Product Overview</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full max-w-2xl flex flex-col items-center gap-3.5">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
              Simplify Task Management with Powerful Features
            </h2>
            <p className="text-muted-foreground text-center leading-relaxed">
              Discover features designed to simplify workflows, boost productivity, and<br className="hidden md:block" />
              improve team collaboration seamlessly.
            </p>
            <Button size="lg" className="mt-2">
              Get Started
            </Button>
          </div>
        </div>

        {/* Dashboard Image Section */}
        <div className="w-full max-w-5xl p-4 flex flex-col items-center gap-2.5 relative">
          {/* Main Dashboard Image */}
          <div className="w-full relative bg-gradient-to-br from-card to-muted rounded-2xl overflow-hidden aspect-[1.59/1]">
            {/* Gradient borders */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 via-purple-500 to-pink-500 opacity-20 rounded-2xl"></div>
            <div className="absolute inset-3 bg-gradient-to-r from-red-500 via-orange-500 via-purple-500 to-pink-500 rounded-xl"></div>
            
            {/* Dashboard Content Placeholder */}
            <div className="absolute inset-4 bg-muted rounded-xl flex items-center justify-center">
              <div className="text-muted-foreground text-lg font-medium">Dashboard Interface</div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -left-16 top-20 w-60 h-64 bg-card rounded-lg shadow-2xl border hidden lg:block">
              <div className="p-4">
                <div className="w-full h-4 bg-primary rounded mb-3"></div>
                <div className="space-y-2">
                  <div className="w-3/4 h-3 bg-muted rounded"></div>
                  <div className="w-1/2 h-3 bg-muted rounded"></div>
                  <div className="w-5/6 h-3 bg-muted rounded"></div>
                </div>
              </div>
            </div>

            <div className="absolute -right-18 bottom-24 w-72 h-32 bg-card rounded-lg shadow-2xl border hidden lg:block">
              <div className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <div className="w-3/4 h-3 bg-muted rounded mb-2"></div>
                  <div className="w-1/2 h-2 bg-muted-foreground/50 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="w-full flex flex-col gap-0 overflow-hidden border-t border-border">
            <div className="w-full flex flex-col md:flex-row">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isHighlighted = index === 2; // Time Tracker gets special styling

                return (
                  <div key={index} className="flex-1 flex flex-col gap-5 p-10 border-r border-border last:border-r-0">
                    <Icon className="w-7 h-7 text-foreground" />
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                    {/* Special gradient line for highlighted feature */}
                    {isHighlighted && (
                      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-border via-pink-500 via-purple-500 via-orange-500 to-red-500"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Features Marquee */}
          <div className="w-full flex items-center gap-3.5">
            <div className="flex-1 h-1.5 bg-gradient-to-r from-transparent via-border to-transparent"></div>
            
            <div className="relative bg-card border border-border rounded-full px-3.5 py-2.5">
              <span className="text-sm text-foreground">Other Interesting Features</span>
              <div className="absolute left-1/2 top-0 w-36 h-px bg-gradient-to-r from-border via-pink-500 via-purple-500 via-orange-500 via-red-500 to-border transform -translate-x-1/2"></div>
            </div>
            
            <div className="flex-1 h-1.5 bg-gradient-to-r from-transparent via-border to-transparent transform rotate-180"></div>
          </div>

          {/* Scrolling Feature Tags */}
          <div className="w-full max-w-5xl h-15 overflow-hidden">
            <div 
              className="flex items-center h-full"
              style={{
                maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)'
              }}
            >
              <div 
                className="flex items-center gap-2.5"
                style={{
                  animation: 'marquee 30s linear infinite'
                }}
              >
                {[...additionalFeatures, ...additionalFeatures].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-card border border-border rounded-lg px-3.5 py-3 whitespace-nowrap">
                    <div className={`w-3 h-3 rounded-full ${feature.color}`}></div>
                    <span className="text-sm text-foreground">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ProductOverviewSection;