import { TrendingUp, Users, MessageCircle, Zap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: MessageCircle,
      number: '10M+',
      label: 'Messages Processed',
      description: 'Daily across all channels'
    },
    {
      icon: Users, 
      number: '50K+',
      label: 'Active Users',
      description: 'Teams worldwide'
    },
    {
      icon: TrendingUp,
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Enterprise reliability'
    },
    {
      icon: Zap,
      number: '300%',
      label: 'Efficiency Boost',
      description: 'Average improvement'
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Prismo-style background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-warning/20 via-transparent to-primary/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-white/80 text-xl">
            See how OmniComms AI transforms communication workflows
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center card-prism animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white mb-6 mx-auto">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-white/70">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;