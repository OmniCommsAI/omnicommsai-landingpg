import companyLogos from '@/assets/company-logos.png';
import logoTechCorp from '@/assets/logo-techcorp.svg';
import logoInnovateCo from '@/assets/logo-innovateco.svg';

const LogoMarquee = () => {
  // Company logos data
  const logos = [
    { name: 'TechCorp', url: logoTechCorp },
    { name: 'InnovateCo', url: logoInnovateCo },
    { name: 'FutureSoft', url: logoTechCorp },
    { name: 'NextGen', url: logoInnovateCo },
    { name: 'CloudTech', url: logoTechCorp },
  ];

  return (
    <section className="py-16 bg-background">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Sub Container with text and decorative lines */}
        <div className="flex items-center justify-center mb-12">
          {/* Left decorative line */}
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border"></div>
          
          {/* Text */}
          <div className="px-6">
            <p className="text-center text-lg font-medium text-foreground whitespace-nowrap">
              Backed by the best
            </p>
          </div>
          
          {/* Right decorative line */}
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border"></div>
        </div>

        {/* Logo Marquee Container */}
        <div className="relative">
          <div 
            className="flex overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
            }}
          >
            <div className="flex animate-scroll-horizontal gap-12 items-center">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="h-12 w-24 flex items-center justify-center">
                    <img 
                      src={logo.url} 
                      alt={logo.name}
                      className="max-h-8 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
              
              {/* Second set for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`second-${index}`} className="flex-shrink-0">
                  <div className="h-12 w-24 flex items-center justify-center">
                    <img 
                      src={logo.url} 
                      alt={logo.name}
                      className="max-h-8 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
              
              {/* Third set for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`third-${index}`} className="flex-shrink-0">
                  <div className="h-12 w-24 flex items-center justify-center">
                    <img 
                      src={logo.url} 
                      alt={logo.name}
                      className="max-h-8 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}

              {/* Fourth set for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`fourth-${index}`} className="flex-shrink-0">
                  <div className="h-12 w-24 flex items-center justify-center">
                    <img 
                      src={logo.url} 
                      alt={logo.name}
                      className="max-h-8 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;