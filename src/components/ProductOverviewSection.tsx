import { Folder, UserPlus, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gradientLineSvg from '@/assets/gradient-line.svg';
import { useEffect, useRef } from 'react';

const ProductOverviewSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1) when section is in view
      const scrollProgress = Math.max(0, Math.min(1, 
        1 - (rect.top / (windowHeight * 0.8))
      ));
      
      // Apply transforms to floating elements
      const floatingElement1 = section.querySelector('.floating-element-1') as HTMLElement;
      const floatingElement2 = section.querySelector('.floating-element-2') as HTMLElement;
      
      if (floatingElement1) {
        const translateY = 43 * scrollProgress;
        const rotate = 1.4 * scrollProgress;
        floatingElement1.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
        floatingElement1.style.opacity = `${Math.min(1, scrollProgress + 0.3)}`;
      }
      
      if (floatingElement2) {
        const translateY = 43 * scrollProgress;
        const rotate = -1.4 * scrollProgress;
        floatingElement2.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
        floatingElement2.style.opacity = `${Math.min(1, scrollProgress + 0.3)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
    <section ref={sectionRef} className="w-full bg-black py-24 px-10 flex flex-col items-center gap-5">
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

        {/* Dashboard Image Section with Floating Elements */}
        <div className="w-full max-w-5xl p-4 flex flex-col items-center gap-2.5 relative">
          
          {/* Main Dashboard Container */}
          <div className="w-full relative z-10">
            {/* Background Gradient (expanded, behind everything) */}
            <div className="absolute -inset-6 bg-gradient-to-r from-red-500 via-orange-500 via-purple-500 to-pink-500 rounded-3xl opacity-40 z-0"></div>
            
            {/* Main Dashboard Image */}
            <div className="w-full aspect-[1.6/1] relative overflow-visible rounded-2xl z-10">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 via-purple-500 to-pink-500 rounded-2xl p-5">
                <div className="w-full h-full bg-white rounded-xl overflow-visible relative">
                  <img 
                    src="/lovable-uploads/9d4cb87e-2329-4405-978a-f5e9367968d3.png" 
                    alt="Dashboard Interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Element 1 - Top Left */}
              <div 
                className="absolute top-4 left-4 w-16 h-20 rounded-lg shadow-lg transform transition-transform duration-1000 ease-out floating-element-1"
                style={{ willChange: 'transform' }}
              >
                <div style={{ position: 'absolute', borderRadius: 'inherit', top: 0, right: 0, bottom: 0, left: -175 }}>
                  <img 
                    src="https://framerusercontent.com/images/59dXbAMOkWcJevijvnmRv2OiOAE.png?width=981&height=1063" 
                    alt="Floating dashboard element" 
                    style={{ display: 'block', width: '445px', height: '265px', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover' }}
                  />
                </div>
              </div>
              
              {/* Floating Element 2 - Top Right */}
              <div 
                className="absolute top-6 right-6 w-20 h-12 rounded-lg shadow-lg transform transition-transform duration-1000 ease-out floating-element-2"
                style={{ willChange: 'transform' }}
              >
                <div style={{ position: 'absolute', borderRadius: 'inherit', top: 0, right: -175, bottom: 0, left: 0 }}>
                  <img 
                    src="/lovable-uploads/2c75a0ef-f8c0-4464-9c6f-72c60eabd14f.png" 
                    alt="Floating dashboard element" 
                    style={{ display: 'block', width: '345px', height: '145px', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover' }}
                  />
                </div>
              </div>
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
            </div>
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