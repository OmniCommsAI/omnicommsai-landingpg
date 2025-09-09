import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroDashboard from '@/assets/hero-dashboard.png';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{background: 'var(--gradient-hero-soft)'}}></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-sm font-medium text-primary animate-fade-in-up">
            🚀 Powered by Advanced AI Technology
          </div>
          
          {/* Main heading */}
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-foreground sm:text-7xl animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            AI-Powered{' '}
            <span className="text-gradient">
              Omnichannel
            </span>{' '}
            Communications
          </h1>
          
          {/* Subtitle */}
          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Revolutionize your customer communications with OmniComms AI. Seamlessly manage conversations across all channels with intelligent automation and real-time insights.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Button className="btn-hero group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="btn-outline-hero group">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
          
          {/* Dashboard Preview */}
          <div className="mt-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent-dark/20 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={heroDashboard}
                  alt="OmniComms AI Dashboard"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">500K+</div>
              <div className="text-sm text-muted-foreground">Messages Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">50+</div>
              <div className="text-sm text-muted-foreground">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;