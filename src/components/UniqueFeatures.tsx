import { Users, Calendar, FolderOpen } from 'lucide-react';

const UniqueFeatures = () => {
  const features = [
    {
      icon: Users,
      color: 'rgb(255, 47, 47)',
      category: 'Meetings and Collaboration',
      title: 'Seamless Collaboration for Effective Meetings',
      description: 'Easily schedule and manage meetings, collaborate in real-time, and keep everyone aligned for successful team interactions and faster decision-making.',
      image: 'https://framerusercontent.com/images/iwdYvqussSgtyd4vJilHFOVHXA.svg',
      opacity: 1
    },
    {
      icon: Calendar,
      color: 'rgb(0, 180, 115)',
      category: 'Planning and Tracking',
      title: 'Efficient Planning and Real-Time Tracking',
      description: 'Plan tasks, set priorities, and track progress with ease to ensure projects stay on track and deadlines are met with minimal effort.',
      image: 'https://framerusercontent.com/images/za0PKa2XhNMBz68vOXCVFAMSvQw.svg',
      opacity: 0.7
    },
    {
      icon: FolderOpen,
      color: 'rgb(138, 67, 225)',
      category: 'Events and Document Sharing',
      title: 'Organize Events and Share Documents',
      description: 'Effortlessly manage events, share important documents, and collaborate with your team to ensure everything is in one place and easily accessible.',
      image: 'https://framerusercontent.com/images/fZzxmzkfza5uO1Pv0lCA7KqDY.svg',
      opacity: 0.5
    }
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -right-32 -bottom-60 w-[575px] h-[575px] z-10 opacity-30">
        <div 
          className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-3xl"
          style={{
            mask: 'radial-gradient(50% 50%, rgb(0, 0, 0) 78.6898%, rgba(0, 0, 0, 0) 100%)'
          }}
        />
      </div>
      <div className="absolute -left-52 -bottom-32 w-[575px] h-[575px] z-10 opacity-20">
        <div 
          className="w-full h-full bg-gradient-to-tl from-secondary/20 to-accent/10 rounded-full blur-3xl"
          style={{
            mask: 'radial-gradient(50% 50%, rgb(0, 0, 0) 76.9901%, rgba(0, 0, 0, 0) 100%)'
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-20">
          
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto px-30">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border mb-4">
              <span className="text-sm font-medium text-foreground">Unique Features</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Unleash Prismo's<br />Unique Potential for you
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Discover Prismo's powerful and unique tools that set it apart, offering unmatched efficiency, customization, and collaboration.
            </p>
          </div>

          {/* Features Cards - Stacked Layout */}
          <div className="w-full max-w-6xl relative">
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.category}
                    className="relative transition-all duration-300"
                    style={{ opacity: feature.opacity }}
                  >
                    <div className="bg-white rounded-xl shadow-lg border-2 border-white overflow-hidden">
                      <div className="flex">
                        {/* Left Side - Content */}
                        <div className="flex-1 p-8">
                          {/* Category Header */}
                          <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg" style={{ color: feature.color }}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground">
                              {feature.category}
                            </span>
                          </div>
                          
                          {/* Main Content */}
                          <div className="max-w-lg">
                            <h3 className="text-3xl font-bold text-foreground mb-4">
                              {feature.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                              {feature.description}
                            </p>
                          </div>
                        </div>

                        {/* Right Side - Interface Preview */}
                        <div className="flex-1 p-8 flex items-center justify-center">
                          <div className="w-full max-w-lg">
                            <div 
                              className="bg-gradient-to-b from-muted/50 to-transparent rounded-lg overflow-hidden"
                              style={{
                                mask: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 49%)'
                              }}
                            >
                              <img
                                src={feature.image}
                                alt={`${feature.category} interface`}
                                className="w-full h-auto object-contain"
                                style={{ minHeight: '300px' }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Decorative line */}
          <div className="w-full h-2.5 relative z-20">
            <img 
              src="https://framerusercontent.com/images/iDrlOYszhHrSmrgaFKo5G5kRV8.svg"
              alt="Decorative line"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimonial Section */}
          <div className="w-full relative z-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-4xl mx-auto">
              <div className="w-48 h-48 flex-shrink-0">
                <img
                  src="https://framerusercontent.com/images/6LqMtTrytJZ09tRazNHOI13tQQ.svg"
                  alt="Testimonial avatar"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <blockquote className="text-2xl font-bold text-foreground mb-5">
                  "Prismo has transformed how our team collaborates, tracks progress, and shares documents. It made our works more efficient"
                </blockquote>
                <p className="text-muted-foreground">
                  Rachel Lewis, Operations Manager, Velocity Tech
                </p>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="absolute top-52 right-10 w-36 h-26 z-10 opacity-30">
            <img
              src="https://framerusercontent.com/images/CalKafEvMdoE9okD8p55II6rzek.svg"
              alt="Decorative element"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;