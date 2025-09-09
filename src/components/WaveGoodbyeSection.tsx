import { useState, useEffect } from 'react';
import { CheckCircle, Briefcase, Zap } from 'lucide-react';

const WaveGoodbyeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const waveGoodbyeItems = [
    'missed deadlines',
    'disorganized workflows', 
    'unnecessary complexity',
    'slow progress',
    'wasted time',
    'lack of collaboration',
    'task overload',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % waveGoodbyeItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-[rgb(241,240,238)] overflow-hidden">
      {/* Main Container - Full width */}
      <div className="relative w-full px-6 lg:px-8">
        <div className="flex flex-col items-center gap-24">
          
          {/* Wave Goodbye Container - Expanded width */}
          <div className="relative flex items-center justify-center gap-5 w-full max-w-6xl">
            {/* Left decorative element */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-6 h-6 z-10">
              <img 
                src="https://framerusercontent.com/images/8BXeBQObnslmzSi9htBC7WTLXM.svg" 
                alt="Decorative wave"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right decorative element */}
            <div className="absolute left-16 -translate-y-1/2 w-32 h-32 z-10">
              <img 
                src="https://framerusercontent.com/images/QoTZyI7CkM97mFm0elr4g0yNc.svg" 
                alt="Decorative element"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Main heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-foreground whitespace-nowrap flex-shrink-0">
              Wave goodbye to
            </h2>

            {/* Animated text container - Expanded */}
            <div className="relative flex-1 min-w-[400px] max-w-[600px]">
              {/* Dark overlay top */}
              <div className="absolute inset-x-0 top-0 h-24 bg-[rgb(30,30,30)] mix-blend-saturation z-10"></div>
              
              {/* Animated text area */}
              <div 
                className="relative h-80 overflow-hidden"
                style={{
                  mask: 'linear-gradient(0deg, rgba(0,0,0,0) -6%, rgb(0,0,0) 48%, rgba(0,0,0,0) 100%)'
                }}
              >
                <div className="flex flex-col items-start gap-2 animate-scroll-vertical">
                  {[...waveGoodbyeItems, ...waveGoodbyeItems].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 py-4 w-full">
                      <h2 className="text-5xl md:text-6xl font-bold whitespace-nowrap">
                        <span 
                          className="bg-gradient-to-r from-[rgb(255,46,46)] via-[rgb(238,123,22)] via-[rgb(138,67,225)] to-[rgb(213,16,252)] bg-clip-text text-transparent"
                          style={{
                            backgroundImage: 'linear-gradient(90deg, rgb(255,46,46) 0%, rgb(238,123,22) 36.28%, rgb(138,67,225) 69.75%, rgb(213,16,252) 100%)'
                          }}
                        >
                          {item}
                        </span>
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Dark overlay bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-[rgb(30,30,30)] mix-blend-saturation z-10"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Decorative line */}
            <div className="absolute inset-x-0 top-0 h-2">
              <img 
                src="https://framerusercontent.com/images/PHE9EsmEfv8Zsyd0nV1rAMsyq28.svg"
                alt="Decorative line"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-16 pt-8">{/* ... keep existing stats content */}
              {/* Team Collaborations */}
              <div className="flex flex-col items-center gap-8 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded border border-white -rotate-2">
                    <img 
                      src="https://framerusercontent.com/images/bOZe3ThmdFaGjs87Gu7Fup6M4.png"
                      alt="Profile 1"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-7 h-7 rounded border border-white">
                    <img 
                      src="https://framerusercontent.com/images/70rKUELh1Zj5uRxlcEji6neFc.png"
                      alt="Profile 2" 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-7 h-7 rounded border border-white rotate-2">
                    <img 
                      src="https://framerusercontent.com/images/czofpZZGkqkn3CC2oLdJdIIzZ6g.png"
                      alt="Profile 3"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground">300K+</div>
                  <div className="text-muted-foreground">Team Collaborations</div>
                </div>
              </div>

              {/* Tasks Completed */}
              <div className="flex flex-col items-center gap-8 z-10">
                <div className="relative p-1.5">
                  <img 
                    src="https://framerusercontent.com/images/YJNYG46InTZzZfc46sZp4bmlo8.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                  />
                  <div className="relative p-0.5 rounded-full bg-gradient-to-r from-[rgb(255,47,47)] via-[rgb(239,123,22)] via-[rgb(138,67,225)] to-[rgb(213,17,253)] shadow-lg">
                    <div className="p-2.5 rounded-full bg-gradient-to-b from-[rgb(76,76,76)] to-[rgb(17,17,17)]">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground">500K+</div>
                  <div className="text-muted-foreground">Tasks Completed</div>
                </div>
              </div>

              {/* Projects Managed */}
              <div className="flex flex-col items-center gap-8 z-10">
                <div className="relative p-1.5">
                  <img 
                    src="https://framerusercontent.com/images/YJNYG46InTZzZfc46sZp4bmlo8.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                  />
                  <div className="relative p-0.5 rounded-full bg-gradient-to-r from-[rgb(255,47,47)] via-[rgb(239,123,22)] via-[rgb(138,67,225)] to-[rgb(213,17,253)] shadow-lg">
                    <div className="p-2.5 rounded-full bg-gradient-to-b from-[rgb(76,76,76)] to-[rgb(17,17,17)]">
                      <Briefcase className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground">15M+</div>
                  <div className="text-muted-foreground">Projects Managed</div>
                </div>
              </div>

              {/* Successful Integrations */}
              <div className="flex flex-col items-center gap-8 z-10">
                <div className="relative p-1.5">
                  <img 
                    src="https://framerusercontent.com/images/YJNYG46InTZzZfc46sZp4bmlo8.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                  />
                  <div className="relative p-0.5 rounded-full bg-gradient-to-r from-[rgb(255,47,47)] via-[rgb(239,123,22)] via-[rgb(138,67,225)] to-[rgb(213,17,253)] shadow-lg">
                    <div className="p-2.5 rounded-full bg-gradient-to-b from-[rgb(76,76,76)] to-[rgb(17,17,17)]">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground">150K+</div>
                  <div className="text-muted-foreground">Successful Integrations</div>
                </div>
              </div>
            </div>

            {/* Bottom decorative element */}
            <div 
              className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[1200px] h-2.5 z-10"
              style={{
                mask: 'linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 48.20%, rgba(0,0,0,0) 100%)'
              }}
            >
              <img 
                src="https://framerusercontent.com/images/iDrlOYszhHrSmrgaFKo5G5kRV8.svg"
                alt="Bottom decorative"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaveGoodbyeSection;