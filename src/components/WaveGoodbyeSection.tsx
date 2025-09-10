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
      className="relative overflow-visible flex flex-col items-center justify-center flex-none flex-nowrap w-full h-min"
      style={{
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--token-0b85bf41-9970-464d-96f4-152f236b9294, #f1f0ee)',
        display: 'flex',
        flex: 'none',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        gap: '150px',
        height: 'min-content',
        justifyContent: 'center',
        overflow: 'visible',
        padding: '100px 40px',
        position: 'relative',
        width: '100%'
      }}
    >
      {/* Main Container - Full width */}
      <div className="relative w-full">
        <div className="flex flex-col items-center">
          
          {/* Wave Goodbye Container - Responsive */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-8 w-full max-w-6xl">
            {/* Decorative elements and heading container */}
            <div className="relative w-auto flex items-center h-60 lg:h-auto">
              <div className="lg:block absolute w-6 h-6 z-10" style={{ left: '-26px', top: '150px' }}>
                <img 
                  src={waveGoodbyeIcon1} 
                  alt="Decorative wave"
                  className="w-full h-full object-contain"
                />
              </div>
  
              <div className="lg:block absolute w-32 h-32 z-10" style={{ right: '-400px', top: '60px' }}>
                <img 
                  src={waveGoodbyeIcon2} 
                  alt="Decorative element"
                  className="w-full h-full object-contain"
                />
              </div>
  
              {/* Main heading - vertically centered */}
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground text-center lg:text-left lg:whitespace-nowrap flex-shrink-0">
                Wave goodbye to
              </h2>
            </div>

            {/* Animated text container - Responsive */}
            <div className="relative flex-1 w-full max-w-[600px] lg:min-w-[400px]">
              {/* Dark overlay top */}
              <div className="absolute inset-x-0 top-0 h-16 bg-[rgb(30,30,30)] mix-blend-saturation z-10"></div>
              
              {/* Animated text area - Responsive */}
              <div 
                className="relative h-60 sm:h-60 overflow-hidden"
                style={{
                  mask: 'linear-gradient(0deg, rgba(0,0,0,0) -6%, rgb(0,0,0) 48%, rgba(0,0,0,0) 100%)'
                }}
              >
                <div className="flex flex-col items-start gap-2 animate-scroll-vertical">
                  {[...waveGoodbyeItems, ...waveGoodbyeItems].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 py-4 w-full">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap">
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
              <div className="absolute inset-x-0 bottom-0 h-32 bg-[rgb(30,30,30)] mix-blend-saturation z-10"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="relative w-full max-w-[1240px] mx-auto mt-36">
            {/* Top decorative line - positioned to intersect with stats */}
            <div 
              className="absolute w-full"
              style={{
                aspectRatio: '23.846153846153847 / 1',
                bottom: '143px',
                flex: 'none',
                height: 'var(--framer-aspect-ratio-supported, 47px)',
                left: 0,
                overflow: 'hidden',
                right: 0,
                zIndex: 1
              }}
            >
              <div className="absolute inset-0">
                <img 
                  decoding="auto"
                  width="1240" 
                  height="54"
                  sizes="min(100vw - 80px, 1240px)"
                  src={waveGoodbyeUserIcon}
                  alt=""
                  className="block w-full h-full object-cover"
                  style={{ 
                    borderRadius: 'inherit', 
                    objectPosition: 'center', 
                    objectFit: 'cover' 
                  }}
                />
              </div>
            </div>

            {/* Decorative line behind stats - positioned to overlay with top shadow */}
            <div className="absolute w-full" style={{bottom: '139px', height: '10px', zIndex: 2}}>
              <img 
                decoding="auto" 
                width="1240" 
                height="10" 
                sizes="min(100vw - 80px, 1240px)" 
                srcSet={`${wavePattern} 512w, ${wavePattern} 1024w, ${wavePattern} 1240w`} 
                src={wavePattern}
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Container - Responsive */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-evenly items-center gap-8 sm:gap-12 md:gap-16 relative z-10">
              {/* Team Collaborations */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-7 h-7 rounded border border-white" style={{ transform: 'rotate(-9deg)' }}>
                    <img 
                      src={userAvatar1}
                      alt="Avatar"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-7 h-7 rounded border border-white">
                    <img 
                      src={userAvatar2}
                      alt="Avatar" 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-7 h-7 rounded border border-white" style={{ transform: 'rotate(9deg)' }}>
                    <img 
                      src={userAvatar3}
                      alt="Avatar"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-foreground">300K+</div>
                  <div className="text-sm sm:text-base text-muted-foreground">Team Collaborations</div>
                </div>
              </div>

              {/* Tasks Completed */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full pointer-events-none z-0">
                    <img 
                      decoding="auto" 
                      width="265" 
                      height="264" 
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
                    <div className="p-3 rounded-full bg-gradient-to-b from-[rgb(76,76,76)] to-[rgb(17,17,17)]">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-foreground">500K+</div>
                  <div className="text-sm sm:text-base text-muted-foreground">Tasks Completed</div>
                </div>
              </div>

              {/* Projects Managed */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full pointer-events-none z-0">
                    <img 
                      decoding="auto" 
                      width="265" 
                      height="264" 
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
                    <div className="p-3 rounded-full bg-gradient-to-b from-[rgb(76,76,76)] to-[rgb(17,17,17)]">
                      <Briefcase className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-foreground">15M+</div>
                  <div className="text-sm sm:text-base text-muted-foreground">Projects Managed</div>
                </div>
              </div>

              {/* Successful Integrations */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full pointer-events-none z-0">
                    <img 
                      decoding="auto" 
                      width="265" 
                      height="264" 
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
                    <div className="p-3 rounded-full bg-gradient-to-b from-[rgb(76,76,76)] to-[rgb(17,17,17)]">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-foreground">150K+</div>
                  <div className="text-sm sm:text-base text-muted-foreground">Successful Integrations</div>
                </div>
              </div>
            </div>

            {/* Bottom decorative element */}
            <div className="relative w-[1200px] h-[10px] mx-auto mt-8">
              <div className="absolute inset-0" style={{ borderRadius: 'inherit' }}>
                <img 
                  decoding="auto"
                  width="1240" 
                  height="10"
                  sizes="1200px"
                  srcSet={`${wavePattern} 512w, ${wavePattern} 1024w, ${wavePattern} 1240w`}
                  src={wavePattern}
                  alt=""
                  style={{ 
                    display: 'block',
                    width: '100%', 
                    height: '100%', 
                    borderRadius: 'inherit', 
                    objectPosition: 'center', 
                    objectFit: 'cover' 
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaveGoodbyeSection;