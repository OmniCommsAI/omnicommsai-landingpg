import { Folder, UserPlus, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gradientLineSvg from '@/assets/gradient-line.svg';

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
    { color: 'bg-purple-500', name: 'Security Measures' }
  ];

  return (
    <section className="w-full bg-black py-24 px-10 flex flex-col items-center gap-5">
      <div className="w-full max-w-7xl flex flex-col items-center gap-20">
        {/* Header Section */}
        <div className="w-full max-w-4xl px-0 md:px-32 flex flex-col items-center gap-2.5">
          {/* Product Overview Badge */}
          <div className="relative p-px rounded-full bg-gradient-to-r from-red-500 via-orange-500 via-purple-500 to-pink-500">
            <div className="bg-zinc-900 rounded-full px-3.5 py-2.5 flex items-center gap-3">
              <span className="text-sm font-medium text-white">Product Overview</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full max-w-2xl flex flex-col items-center gap-3.5">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
              Simplify Task Management with Powerful Features
            </h2>
            <p className="text-neutral-400 text-center leading-relaxed">
              Discover features designed to simplify workflows, boost productivity, and<br className="hidden md:block" />
              improve team collaboration seamlessly.
            </p>
            <Button size="lg" className="mt-2 bg-white text-black hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </div>

        {/* Dashboard Image Section */}
        <div className="w-full max-w-5xl p-4 flex flex-col items-center gap-2.5 relative">
          {/* Main Dashboard Container */}
          <div className="w-full relative">
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 via-purple-500 to-pink-500 rounded-2xl p-1">
              <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
                {/* Use the uploaded image */}
                <img 
                  src="/lovable-uploads/9d4cb87e-2329-4405-978a-f5e9367968d3.png" 
                  alt="Dashboard Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Spacer for aspect ratio */}
            <div className="w-full aspect-[1.6/1] opacity-0"></div>
          </div>

          {/* Features Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 relative border-t border-zinc-700">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <div key={index} className="flex flex-col items-start gap-5 text-left relative pt-8">
                  <Icon className="w-8 h-8 text-white" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{feature.description}</p>
                  </div>
                  
                  {/* Vertical divider lines */}
                  {index < 3 && (
                    <div className="absolute -right-4 -top-0 w-px hidden md:block" style={{ height: 'calc(100% + 8rem)' }}>
                      {index === 1 ? (
                        // Center divider with colorful gradient
                        <div className="w-full h-full bg-gradient-to-b from-zinc-700 via-red-500 via-orange-500 via-purple-500 to-pink-500"></div>
                      ) : (
                        // Regular gradient dividers
                        <div className="w-full h-full bg-gradient-to-b from-zinc-700 via-zinc-700 to-transparent"></div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Other Interesting Features */}
          <div className="w-full mt-16 flex flex-col items-center gap-8">
            <div className="flex items-center gap-3.5 w-full max-w-4xl">
              {/* Left line section */}
              <div className="flex-1 h-1.5 relative overflow-hidden">
                <img 
                  src={gradientLineSvg} 
                  alt="" 
                  className="block w-full h-full object-cover object-right"
                  style={{ objectPosition: 'right center' }}
                />
              </div>
              
              {/* Text Container */}
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-full px-6 py-3" data-border="true">
                <div className="flex flex-col justify-start flex-shrink-0">
                  <p className="text-white font-medium">Other Interesting Features</p>
                </div>
                <div className="absolute left-1/2 top-0 w-36 h-px bg-gradient-to-r from-zinc-800 via-pink-500 via-purple-500 via-orange-500 via-red-500 to-zinc-800 transform -translate-x-1/2"></div>
              </div>
              
              {/* Right line section (rotated) */}
              <div className="flex-1 h-1.5 relative overflow-hidden transform rotate-180">
                <img 
                  src={gradientLineSvg} 
                  alt="" 
                  className="block w-full h-full object-cover object-right"
                  style={{ objectPosition: 'right center' }}
                />
              </div>
            </div>

            {/* Feature Tags */}
            <div className="w-full max-w-5xl h-15 overflow-hidden">
              <div 
                className="flex items-center h-full"
                style={{
                  maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)'
                }}
              >
                <div 
                  className="flex items-center gap-4"
                  style={{
                    animation: 'marquee 30s linear infinite'
                  }}
                >
                  {[...additionalFeatures, ...additionalFeatures].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 whitespace-nowrap">
                      <div className={`w-3 h-3 rounded-full ${feature.color}`}></div>
                      <span className="text-sm text-white">{feature.name}</span>
                    </div>
                  ))}
                </div>
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