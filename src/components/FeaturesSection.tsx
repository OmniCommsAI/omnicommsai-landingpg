import { 
  MessageSquare, 
  Clock, 
  Users, 
  Bell,
  Zap,
  Shield,
  BarChart3,
  Workflow 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Unified Messaging',
      description: 'Manage all conversations from email, SMS, chat, and social media in one platform.',
    },
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Intelligent routing and automated responses powered by advanced machine learning.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team workflows with real-time collaboration and task assignment.',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Stay updated with intelligent alerts for urgent messages and important updates.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into communication patterns and team performance metrics.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with industry security standards.',
    },
    {
      icon: Clock,
      title: 'Real-Time Sync',
      description: 'Instant synchronization across all channels and devices.',
    },
    {
      icon: Workflow,
      title: 'Custom Workflows',
      description: 'Build automated workflows that adapt to your business processes.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            AI Communications
          </h2>
          <h3 className="mt-4 text-3xl font-bold text-gradient">
            Streamlined and Powerful
          </h3>
          <p className="mt-6 text-xl text-muted-foreground">
            Transform your customer communications with intelligent automation, 
            unified messaging, and real-time collaboration tools designed for modern businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title} 
                className="card-elevated group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 p-6 bg-gradient-primary rounded-2xl text-white">
            <Zap className="h-6 w-6" />
            <span className="text-lg font-semibold">
              Ready to supercharge your communications?
            </span>
            <button className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg font-medium transition-colors">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;