import { Target, Award, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering businesses to communicate more effectively through AI innovation.'
    },
    {
      icon: Award, 
      title: 'Excellence',
      description: 'Delivering world-class solutions with uncompromising quality and reliability.'
    },
    {
      icon: Users,
      title: 'Customer-First',
      description: 'Building products that truly solve real-world communication challenges.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible in AI-powered communications.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              The Journey Behind{' '}
              <span className="text-gradient">OmniComms AI</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At OmniComms AI, we believe in transforming how businesses communicate. 
              Our platform is designed to unify all communication channels, enhance team 
              collaboration, and deliver exceptional customer experiences through the power of artificial intelligence.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-primary rounded-full mr-4"></div>
                <span className="text-muted-foreground">Founded by communication experts and AI pioneers</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-primary rounded-full mr-4"></div>
                <span className="text-muted-foreground">Trusted by 50,000+ users across 120+ countries</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-primary rounded-full mr-4"></div>
                <span className="text-muted-foreground">Backed by leading technology investors</span>
              </div>
            </div>

            <button className="btn-hero">
              Learn More About Us
            </button>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title}
                  className="bg-muted/50 rounded-2xl p-6 hover:bg-muted/70 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-12 w-12 mb-4">
                    {/* Gradient Border */}
                    <div
                      className="absolute inset-0 rounded-xl p-0.5"
                      style={{
                        background: 'linear-gradient(90deg, rgb(255, 47, 47) 0%, rgb(239, 123, 22) 35.8783%, rgb(138, 67, 225) 69.922%, rgb(213, 17, 253) 100%)'
                      }}
                    >
                      {/* Icon Container */}
                      <div className="bg-black rounded-xl h-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average User Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Customer Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">SOC2</div>
            <div className="text-sm text-muted-foreground">Security Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;