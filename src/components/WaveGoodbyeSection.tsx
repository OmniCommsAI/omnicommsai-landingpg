import { useState, useEffect } from 'react';
import { CheckCircle, Briefcase, Zap } from 'lucide-react';
import waveGoodbyeIcon1 from '@/assets/wave-goodbye-icon1.svg';
import waveGoodbyeIcon2 from '@/assets/wave-goodbye-icon2.svg';
import waveGoodbyeUserIcon from '@/assets/wave-goodbye-user-icon.svg';
import wavePattern from '@/assets/wave-pattern.svg';
import userAvatar1 from '@/assets/user-avatar1.png';
import userAvatar2 from '@/assets/user-avatar2.png';
import userAvatar3 from '@/assets/user-avatar3.png';
import statsBackground from '@/assets/stats-background.png';

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
    <section 
      className="relative overflow-visible flex flex-col items-center justify-center flex-none flex-nowrap w-full h-min py-12 px-4 sm:py-16 sm:px-8 lg:py-24 lg:px-10"
      style={{
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--token-0b85bf41-9970-464d-96f4-152f236b9294, #f1f0ee)',
        display: 'flex',
        flex: 'none',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        gap: '80px',
        height: 'min-content',
        justifyContent: 'center',
        overflow: 'visible',
        position: 'relative',
        width: '100%'
      }}
    >
      {/* Main Container - Full width */}
      <div className="relative w-full">
        <div className="flex flex-col items-center">
          
          {/* Wave Goodbye Container - Responsive */}
          <div className="relative flex flex-col items-center justify-center gap-2 sm:gap-5 lg:flex-row lg:gap-8 w-full max-w-6xl">
            {/* Decorative elements - visible on all screen sizes */}
            <div className="absolute -left-2 lg:-left-4 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-6 lg:h-6 z-10">
              <img 
                src={waveGoodbyeIcon1} 
                alt="Decorative wave"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 w-16 h-16 lg:w-32 lg:h-32 z-10">
              <img 
                src={waveGoodbyeIcon2} 
                alt="Decorative element"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Main heading - improved mobile scaling */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-center lg:text-left flex-shrink-0 whitespace-nowrap">
              Wave goodbye to
            </h2>

            {/* Animated text container - Responsive */}
            <div className="relative flex-1 w-full max-w-[600px] lg:min-w-[400px]">
              {/* Dark overlay top - subtle gray gradient */}
              <div className="absolute inset-x-0 top-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-b from-gray-500/30 to-transparent z-10"></div>
              
              {/* Animated text area - Responsive */}
              <div 
                className="relative h-32 sm:h-48 md:h-60 lg:h-80 overflow-hidden"
                style={{
                  mask: 'linear-gradient(0deg, rgba(0,0,0,0) -6%, rgb(0,0,0) 48%, rgba(0,0,0,0) 100%)'
                }}
              >
                <div className="flex flex-col items-start gap-2 animate-scroll-vertical">
                  {[...waveGoodbyeItems, ...waveGoodbyeItems].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 py-2 sm:py-4 w-full">
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold whitespace-nowrap">
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
              
              {/* Dark overlay bottom - subtle gray gradient */}
              <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-gray-500/30 to-transparent z-10"></div>
            </div>
          </div>

          {/* Top decorative arrow - positioned above stats */}
          <div className="relative w-full max-w-[1240px] mx-auto mt-8 sm:mt-12 lg:mt-16">
            <div className="absolute w-full h-8 sm:h-10 lg:h-12 -top-4 sm:-top-6 lg:-top-8 z-10">
              <img 
                src={waveGoodbyeUserIcon}
                alt="Decorative arrow"
                className="block w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="relative w-full max-w-[1240px] mx-auto">
            {/* Decorative line behind stats */}
            <div className="absolute w-full h-2 sm:h-3 lg:h-4 top-0 z-2">
              <img 
                src={wavePattern}
                alt="Wave pattern" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Container - Responsive */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-evenly items-center gap-8 sm:gap-12 md:gap-16 lg:gap-32 relative z-10 pt-8 sm:pt-12">
              {/* Team Collaborations */}
              <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded border border-white" style={{ transform: 'rotate(-9deg)' }}>
                    <img 
                      src={userAvatar1}
                      alt="Avatar"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded border border-white">
                    <img 
                      src={userAvatar2}
                      alt="Avatar" 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded border border-white" style={{ transform: 'rotate(9deg)' }}>
                    <img 
                      src={userAvatar3}
                      alt="Avatar"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">300K+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">Team Collaborations</div>
                </div>
              </div>

              {/* Tasks Completed */}
              <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full pointer-events-none z-0">
                    <img 
                      src={statsBackground} 
                      alt="" 
                      className="block w-full h-full object-cover object-center rounded-full opacity-80" 
                    />
                  </div>
                  <div 
                    className="p-0.5 rounded-full bg-gradient-to-r from-[rgb(255,47,47)] via-[rgb(239,123,22)] via-[rgb(138,67,225)] to-[rgb(213,17,253)] place-content-center items-center flex flex-none flex-row gap-0 h-min overflow-visible relative w-min z-10"
                    style={{
                      boxShadow: 'rgba(0, 0, 0, 0.12) 0px 6px 12px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 6px 11px 0px'
                    }}
                  >
                    <div className="p-2 sm:p-3 rounded-full bg-gradient-to-b from-[rgb(76,76,76)] to-[rgb(17,17,17)]">
                      <CheckCircle className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">500K+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">Tasks Completed</div>
                </div>
              </div>

              {/* Projects Managed */}
              <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full pointer-events-none z-0">
                    <img 
                      src={statsBackground} 
                      alt="" 
                      className="block w-full h-full object-cover object-center rounded-full opacity-80" 
                    />
                  </div>
                  <div 
                    className="p-0.5 rounded-full bg-gradient-to-r from-[rgb(255,47,47)] via-[rgb(239,123,22)] via-[rgb(138,67,225)] to-[rgb(213,17,253)] place-content-center items-center flex flex-none flex-row gap-0 h-min overflow-visible relative w-min z-10"
                    style={{
                      boxShadow: 'rgba(0, 0, 0, 0.12) 0px 6px 12px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 6px 11px 0px'
                    }}
                  >
                    <div className="p-2 sm:p-3 rounded-full bg-gradient-to-b from-[rgb(76,76,76)] to-[rgb(17,17,17)]">
                      <Briefcase className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">15M+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">Projects Managed</div>
                </div>
              </div>

              {/* Successful Integrations */}
              <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full pointer-events-none z-0">
                    <img 
                      src={statsBackground} 
                      alt="" 
                      className="block w-full h-full object-cover object-center rounded-full opacity-80" 
                    />
                  </div>
                  <div 
                    className="p-0.5 rounded-full bg-gradient-to-r from-[rgb(255,47,47)] via-[rgb(239,123,22)] via-[rgb(138,67,225)] to-[rgb(213,17,253)] place-content-center items-center flex flex-none flex-row gap-0 h-min overflow-visible relative w-min z-10"
                    style={{
                      boxShadow: 'rgba(0, 0, 0, 0.12) 0px 6px 12px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 6px 11px 0px'
                    }}
                  >
                    <div className="p-2 sm:p-3 rounded-full bg-gradient-to-b from-[rgb(76,76,76)] to-[rgb(17,17,17)]">
                      <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">150K+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">Successful Integrations</div>
                </div>
              </div>
            </div>

            {/* Bottom decorative element - improved mobile responsiveness */}
            <div className="relative w-full max-w-[1200px] h-2 sm:h-3 lg:h-4 mx-auto mt-4 sm:mt-6 lg:mt-8">
              <img 
                src={wavePattern}
                alt="Wave pattern"
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