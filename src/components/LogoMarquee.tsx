import companyLogos from '@/assets/company-logos.png';

const LogoMarquee = () => {
  // Mock logos for demonstration
  const logos = [
    { name: 'TechCorp', url: 'https://framerusercontent.com/images/5nYj2i6tU9yLEAOJRESakSDvp0g.svg?width=102&height=24' },
    { name: 'InnovateCo', url: 'https://framerusercontent.com/images/0EIEmxtogiwTpTo7lEjARtFLa8.svg?width=96&height=24' },
    { name: 'FutureSoft', url: companyLogos },
    { name: 'NextGen', url: companyLogos },
    { name: 'CloudTech', url: companyLogos },
    { name: 'DataFlow', url: companyLogos },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-lg font-semibold text-muted-foreground mb-12">
          Trusted by industry leaders worldwide
        </p>
        
        {/* Logo marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-x space-x-16">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="h-16 w-32 bg-muted/50 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-semibold text-sm">
                    {logo.name}
                  </span>
                  <img src={logo.url} />
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <div className="h-16 w-32 bg-muted/50 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-semibold text-sm">
                    {logo.name}
                  </span>
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