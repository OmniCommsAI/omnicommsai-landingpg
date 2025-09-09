import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroDashboard from '@/assets/hero-dashboard.png';
import noiseTexture from '@/assets/noise-texture.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Container - framer-1ntaqo5 */}
      <div className="absolute inset-0">
        
        {/* Left Abstract - framer-1u0tsst */}
        <div className="absolute left-0 top-0 w-1/3 h-full opacity-100">
          {/* Sub Container */}
          <div className="relative w-full h-full">
            {/* Ellipse 3 */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-pink-200/30 to-purple-200/20 rounded-full blur-xl top-1/4 left-8"></div>
            {/* Ellipse 4 */}
            <div className="absolute w-24 h-24 bg-gradient-to-br from-purple-200/25 to-pink-200/15 rounded-full blur-lg top-1/3 left-16"></div>
            {/* Ellipse 2 */}
            <div className="absolute w-40 h-40 bg-gradient-to-br from-pink-200/20 to-purple-200/10 rounded-full blur-2xl top-1/2 left-4"></div>
            {/* Ellipse 1 */}
            <div className="absolute w-28 h-28 bg-gradient-to-br from-purple-200/30 to-pink-200/20 rounded-full blur-xl top-2/3 left-12"></div>
          </div>
          {/* Second Sub Container */}
          <div className="relative w-full h-full">
            {/* Ellipse 3 */}
            <div className="absolute w-36 h-36 bg-gradient-to-br from-pink-200/25 to-purple-200/15 rounded-full blur-xl top-1/6 left-20"></div>
            {/* Ellipse 4 */}
            <div className="absolute w-20 h-20 bg-gradient-to-br from-purple-200/20 to-pink-200/10 rounded-full blur-lg top-1/4 left-24"></div>
            {/* Ellipse 2 */}
            <div className="absolute w-44 h-44 bg-gradient-to-br from-pink-200/15 to-purple-200/8 rounded-full blur-2xl top-3/5 left-8"></div>
            {/* Ellipse 1 */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-purple-200/25 to-pink-200/15 rounded-full blur-xl top-4/5 left-16"></div>
          </div>
        </div>

        {/* Right Abstract - framer-q9vqft (rotated 180deg) */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-100 transform rotate-180">
          {/* Sub Container */}
          <div className="relative w-full h-full">
            {/* Ellipse 3 */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-pink-200/30 to-purple-200/20 rounded-full blur-xl top-1/4 left-8"></div>
            {/* Ellipse 4 */}
            <div className="absolute w-24 h-24 bg-gradient-to-br from-purple-200/25 to-pink-200/15 rounded-full blur-lg top-1/3 left-16"></div>
            {/* Ellipse 2 */}
            <div className="absolute w-40 h-40 bg-gradient-to-br from-pink-200/20 to-purple-200/10 rounded-full blur-2xl top-1/2 left-4"></div>
            {/* Ellipse 1 */}
            <div className="absolute w-28 h-28 bg-gradient-to-br from-purple-200/30 to-pink-200/20 rounded-full blur-xl top-2/3 left-12"></div>
          </div>
          {/* Second Sub Container (rotated -25deg) */}
          <div className="relative w-full h-full transform -rotate-25">
            {/* Ellipse 3 */}
            <div className="absolute w-36 h-36 bg-gradient-to-br from-pink-200/25 to-purple-200/15 rounded-full blur-xl top-1/6 left-20"></div>
            {/* Ellipse 4 */}
            <div className="absolute w-20 h-20 bg-gradient-to-br from-purple-200/20 to-pink-200/10 rounded-full blur-lg top-1/4 left-24"></div>
            {/* Ellipse 2 */}
            <div className="absolute w-44 h-44 bg-gradient-to-br from-pink-200/15 to-purple-200/8 rounded-full blur-2xl top-3/5 left-8"></div>
            {/* Ellipse 1 */}
            <div className="absolute w-32 h-32 bg-gradient-to-br from-purple-200/25 to-pink-200/15 rounded-full blur-xl top-4/5 left-16"></div>
          </div>
        </div>

        {/* Main BG - framer-q7mnqc */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 via-purple-50/30 to-white"></div>

        {/* Vertical Blocks Container - framer-z7xzby */}
        <div className="absolute inset-0 flex">
          {Array.from({ length: 24 }, (_, i) => (
            <div
              key={i}
              className="flex-1 border-l border-r border-white/5 h-full"
              data-border="true"
            ></div>
          ))}
        </div>

        {/* Secondary BG - framer-4sryew */}
        <div className="absolute inset-0 bg-white/60"></div>

        {/* Noise Texture - framer-kkjcxt */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${noiseTexture})`,
              backgroundRepeat: 'repeat',
              backgroundPosition: 'left top',
              backgroundSize: '128px auto',
            }}
          ></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm px-6 py-2 text-sm font-medium text-gradient animate-fade-in-up">
              🚀 Powered by Advanced AI Technology
            </div>
            
            {/* Main heading */}
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
                {/* Colorful gradient border */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-50 z-10"
                  style={{
                    background: 'linear-gradient(179deg, #ff2f2f, #ef7b16 35.87832457397675%, #8a43e1 69.92196209587513%, #d511fd)',
                    padding: '4px'
                  }}
                >
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>
                
                {/* Dashboard container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm z-20">
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
      </div>
    </section>
  );
};

export default HeroSection;