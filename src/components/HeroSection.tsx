import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroDashboard from '@/assets/hero-dashboard.png';
import prismBgLeft from '@/assets/prism-bg-left.png';
import prismBgRight from '@/assets/prism-bg-right.png';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Prismo-style colorful prism backgrounds */}
      <div className="absolute inset-0">
        {/* Left prism gradient */}
        <div className="prism-bg-left animate-prism-glow" style={{
          background: 'linear-gradient(135deg, hsl(270 91% 65% / 0.7) 0%, hsl(320 89% 70% / 0.6) 30%, hsl(200 100% 70% / 0.5) 70%, transparent 100%)'
        }}></div>
        
        {/* Right prism gradient */}
        <div className="prism-bg-right animate-prism-glow" style={{
          background: 'linear-gradient(225deg, hsl(35 91% 65% / 0.7) 0%, hsl(340 87% 65% / 0.6) 30%, hsl(280 100% 85% / 0.5) 70%, transparent 100%)',
          animationDelay: '2s'
        }}></div>
        
        {/* Additional colorful accent elements */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-secondary/30 to-warning/30 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge with Prismo styling */}
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm px-6 py-2 text-sm font-medium text-gradient animate-fade-in-up">
            🚀 Powered by Advanced AI Technology
          </div>
          
          {/* Main heading with multi-color gradient */}
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-foreground sm:text-7xl animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            AI-Powered{' '}
            <span className="text-gradient-multi">
              Omnichannel
            </span>{' '}
            Communications
          </h1>
          
          {/* Subtitle */}
          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Revolutionize your customer communications with OmniComms AI. Seamlessly manage conversations across all channels with intelligent automation and real-time insights.
          </p>
          
          {/* CTA Buttons with Prismo styling */}
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
          
          {/* Dashboard Preview with enhanced Prismo styling */}
          <div className="mt-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              {/* Multi-colored glow effect around dashboard */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-accent/30 via-secondary/30 to-warning/30 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 to-accent/40 rounded-3xl blur-2xl"></div>
              
              {/* Dashboard container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
                <img
                  src={heroDashboard}
                  alt="OmniComms AI Dashboard"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10 pointer-events-none"></div>
              </div>
            </div>
          </div>
          
          {/* Stats with colorful styling */}
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