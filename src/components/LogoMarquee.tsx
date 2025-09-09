import companyLogos from '@/assets/company-logos.png';

const LogoMarquee = () => {
  // Mock logos for demonstration
  const logos = [
    { name: 'TechCorp', url: 'https://framerusercontent.com/images/5nYj2i6tU9yLEAOJRESakSDvp0g.svg?width=102&height=24' },
    { name: 'InnovateCo', url: 'https://framerusercontent.com/images/0EIEmxtogiwTpTo7lEjARtFLa8.svg?width=96&height=24' },
    { name: 'FutureSoft', url: 'https://framerusercontent.com/images/5nYj2i6tU9yLEAOJRESakSDvp0g.svg?width=102&height=24' },
    { name: 'NextGen', url: 'https://framerusercontent.com/images/5nYj2i6tU9yLEAOJRESakSDvp0g.svg?width=102&height=24' },
    { name: 'CloudTech', url: 'https://framerusercontent.com/images/5nYj2i6tU9yLEAOJRESakSDvp0g.svg?width=102&height=24' },
    { name: 'DataFlow', url: 'https://framerusercontent.com/images/5nYj2i6tU9yLEAOJRESakSDvp0g.svg?width=102&height=24' },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-lg font-semibold text-muted-foreground mb-12">
          Trusted by industry leaders worldwide
        </p>
        
        {/* Logo marquee */}
        <div className="relative overflow-hidden">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none"></div>
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none"></div>
          
          <div className="flex animate-scroll-x space-x-16">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="h-16 w-32 bg-muted/50 rounded-lg flex items-center justify-center">
                  <img src={logo.url} title={logo.name} />
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <div className="h-16 w-32 bg-muted/50 rounded-lg flex items-center justify-center">
                  <img src={logo.url} title={logo.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;