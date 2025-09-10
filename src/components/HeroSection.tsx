import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Using uploaded dashboard screenshot
import heroPattern from '@/assets/hero-pattern.png';
const HeroSection = () => {
  return <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Complex gradient background */}
      <div className="absolute inset-0 bg-[rgb(244,242,241)] overflow-hidden">
        {/* Left abstract shapes */}
        <div className="absolute top-0 left-[-60px] sm:left-[-120px] w-[200px] sm:w-[300px] lg:w-[378px] h-[300px] sm:h-[450px] lg:h-[571px] blur-[1px] sm:blur-[2px]">
          <div className="relative w-[220px] sm:w-[320px] lg:w-[420px] h-[300px] sm:h-[450px] lg:h-[571px] left-[-20px] sm:left-[-42px]">
            {/* Blurred circles - first layer */}
            <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-[100px] sm:top-[155px] lg:top-[207px] left-0 rounded-full bg-[rgb(138,67,225)] blur-[100px] sm:blur-[150px] lg:blur-[200px]"></div>
            <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-[180px] sm:w-[270px] lg:top-[363px] left-[18px] sm:left-[28px] lg:left-[37px] rounded-full bg-[rgb(213,17,253)] blur-[100px] sm:blur-[150px] lg:blur-[200px]"></div>
            <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-0 left-[106px] sm:left-[160px] lg:left-[213px] rounded-full bg-[rgb(239,123,22)] blur-[100px] sm:blur-[150px] lg:blur-[200px]"></div>
            <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-[40px] sm:top-[60px] lg:top-[80px] left-[4px] sm:left-[7px] lg:left-[9px] rounded-full bg-[rgb(255,47,47)] blur-[100px] sm:blur-[150px] lg:blur-[200px]"></div>
            
            {/* Blurred circles - second layer */}
            <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-[100px] sm:top-[155px] lg:top-[207px] left-0 rounded-full bg-[rgb(138,67,225)] blur-[50px] sm:blur-[75px] lg:blur-[100px]"></div>
            <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-[180px] sm:top-[270px] lg:top-[363px] left-[18px] sm:left-[28px] lg:left-[37px] rounded-full bg-[rgb(213,17,253)] blur-[50px] sm:blur-[75px] lg:blur-[100px]"></div>
            <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-0 left-[106px] sm:left-[160px] lg:left-[213px] rounded-full bg-[rgb(239,123,22)] blur-[50px] sm:blur-[75px] lg:blur-[100px]"></div>
            <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-[40px] sm:top-[60px] lg:top-[80px] left-[4px] sm:left-[7px] lg:left-[9px] rounded-full bg-[rgb(255,47,47)] blur-[50px] sm:blur-[75px] lg:blur-[100px]"></div>
          </div>
        </div>

        {/* Right abstract shapes */}
        <div className="absolute top-0 right-[-60px] sm:right-[-120px] w-[200px] sm:w-[300px] lg:w-[378px] h-[300px] sm:h-[450px] lg:h-[571px] blur-[1px] sm:blur-[2px] rotate-180">
          <div className="relative w-[220px] sm:w-[320px] lg:w-[420px] h-[300px] sm:h-[450px] lg:h-[571px] left-[-20px] sm:left-[-42px]">
            {/* Blurred circles - first layer */}
            <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-[100px] sm:top-[155px] lg:top-[207px] left-0 rounded-full bg-[rgb(138,67,225)] blur-[100px] sm:blur-[150px] lg:blur-[200px]"></div>
            <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-[180px] sm:top-[270px] lg:top-[363px] left-[18px] sm:left-[28px] lg:left-[37px] rounded-full bg-[rgb(213,17,253)] blur-[100px] sm:blur-[150px] lg:blur-[200px]"></div>
            <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-0 left-[106px] sm:left-[160px] lg:left-[213px] rounded-full bg-[rgb(239,123,22)] blur-[100px] sm:blur-[150px] lg:blur-[200px]"></div>
            <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-[40px] sm:top-[60px] lg:top-[80px] left-[4px] sm:left-[7px] lg:left-[9px] rounded-full bg-[rgb(255,47,47)] blur-[100px] sm:blur-[150px] lg:blur-[200px]"></div>
            
            {/* Rotated layer */}
            <div className="absolute w-[220px] sm:w-[320px] lg:w-[420px] h-[300px] sm:h-[450px] lg:h-[571px] top-[10px] sm:top-[15px] lg:top-[20px] left-[-25px] sm:left-[38px] lg:left-[-50px] -rotate-[25deg]">
              <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-[100px] sm:top-[155px] lg:top-[207px] left-0 rounded-full bg-[rgb(138,67,225)] blur-[50px] sm:blur-[75px] lg:blur-[100px]"></div>
              <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-[180px] sm:top-[270px] lg:top-[363px] left-[18px] sm:left-[28px] lg:left-[37px] rounded-full bg-[rgb(213,17,253)] blur-[50px] sm:blur-[75px] lg:blur-[100px]"></div>
              <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-0 left-[106px] sm:left-[160px] lg:left-[213px] rounded-full bg-[rgb(239,123,22)] blur-[50px] sm:blur-[75px] lg:blur-[100px]"></div>
              <div className="absolute w-[100px] sm:w-[150px] lg:w-[207px] h-[100px] sm:h-[150px] lg:h-[207px] top-[40px] sm:top-[60px] lg:top-[80px] left-[4px] sm:left-[7px] lg:left-[9px] rounded-full bg-[rgb(255,47,47)] blur-[50px] sm:blur-[75px] lg:blur-[100px]"></div>
            </div>
          </div>
        </div>

        {/* Top gradient */}
        <div className="absolute inset-x-0 top-0 h-[200px] sm:h-[300px] lg:h-[414px] bg-gradient-to-b from-[rgb(242,240,238)] to-transparent"></div>

        {/* Vertical grid lines - hidden on mobile for better performance */}
        <div className="absolute inset-0 hidden sm:flex">
          {Array.from({
          length: 24
        }).map((_, i) => <div key={i} className="flex-1 h-full backdrop-blur-[25px] bg-gradient-to-r from-[rgba(242,240,238,0.2)] to-transparent border-r border-white/10"></div>)}
        </div>

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(242,240,238)] to-transparent"></div>

        {/* Noise overlay - reduced on mobile */}
        <div className="absolute inset-0 opacity-50 sm:opacity-75 mix-blend-overlay" style={{
        backgroundImage: `url("${heroPattern}")`,
        backgroundSize: '64px sm:128px',
        backgroundRepeat: 'repeat'
      }}></div>

        {/* Mask */}
        <div className="absolute inset-0" style={{
        mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 37%)'
      }}></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl mt-200 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex flex-col items-center text-center animate-fade-in-up">
            <div className="flex flex-col">
              <p className="text-4xl font-bold mb-2">
                <span className="bg-clip-text text-transparent" style={{
                backgroundImage: 'linear-gradient(90deg, rgb(255, 46, 46) 0%, rgb(238, 123, 22) 36.2773%, rgb(138, 67, 225) 69.7515%, rgb(213, 16, 252) 100%)'
              }}>
                  200K+
                </span>
              </p>
              <p className="text-sm text-foreground">Projects Managed Daily with Prismo</p>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-foreground sm:text-7xl animate-fade-in-up" style={{
          animationDelay: '0.1s'
        }}>
            AI-Powered{' '}
            <span className="text-gradient">
              Omnichannel
            </span>{' '}
            Communications
          </h1>
          
          {/* Subtitle */}
          <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            Revolutionize your customer communications with OmniComms AI. Seamlessly manage conversations across all channels with intelligent automation and real-time insights.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up" style={{
          animationDelay: '0.3s'
        }}>
            <Button className="btn-hero group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
          </div>
          
          {/* Dashboard Preview */}
          <div className="mt-16 animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <div className="relative">
              {/* Gradient Border Container */}
              <div
                className="rounded-3xl p-0.5"
                style={{
                  background: 'linear-gradient(90deg, rgb(255, 47, 47) 0%, rgb(239, 123, 22) 35.8783%, rgb(138, 67, 225) 69.922%, rgb(213, 17, 253) 100%)'
                }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent-dark/20 rounded-3xl blur-2xl animate-pulse"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img src="/lovable-uploads/bbd270a6-888f-4f13-937e-3c142b7bdb31.png" alt="OmniComms AI Dashboard" className="w-full h-auto transform hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 animate-fade-in-up" style={{
          animationDelay: '0.5s'
        }}>
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
    </section>;
};
export default HeroSection;