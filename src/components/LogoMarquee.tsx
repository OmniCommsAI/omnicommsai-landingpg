import companyLogos from '@/assets/company-logos.png';
import logoTechCorp from '@/assets/logo-techcorp.svg';
import logoInnovateCo from '@/assets/logo-innovateco.svg';

const LogoMarquee = () => {
  // Mock logos for demonstration
  const logos = [
    { name: 'TechCorp', url: logoTechCorp },
    { name: 'InnovateCo', url: logoInnovateCo },
    { name: 'FutureSoft', url: logoTechCorp },
    { name: 'NextGen', url: logoTechCorp },
    { name: 'CloudTech', url: logoTechCorp },
    { name: 'DataFlow', url: logoTechCorp },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-lg font-semibold text-muted-foreground mb-12">
          Trusted by industry leaders worldwide
        </p>
        
        {/* Logo marquee */}
        <div className="relative overflow-hidden">
          <div 
            className="flex animate-scroll-x space-x-16"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 15%, rgb(0, 0, 0) 85%, rgba(0, 0, 0, 0) 100%)'
            }}
          >
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