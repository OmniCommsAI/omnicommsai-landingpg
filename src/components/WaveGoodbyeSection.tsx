const WaveGoodbyeSection = () => {
  const problems = [
    'scattered communications',
    'missed customer messages',
    'inefficient workflows', 
    'manual data entry',
    'poor response times',
    'disorganized channels',
    'lack of insights',
    'team silos',
    'inconsistent messaging',
    'communication bottlenecks',
    'lost conversations',
    'manual routing',
  ];

  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Wave goodbye to
          </h2>
        </div>
        
        {/* Scrolling problems */}
        <div className="relative">
          <div className="flex animate-scroll-horizontal space-x-8 py-4">
            {/* First set */}
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 text-2xl md:text-3xl font-bold text-muted-foreground/60 line-through"
              >
                {problem}
              </div>
            ))}
            
            {/* Duplicate for seamless loop */}
            {problems.map((problem, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="flex-shrink-0 text-2xl md:text-3xl font-bold text-muted-foreground/60 line-through"
              >
                {problem}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform chaos into clarity with OmniComms AI's intelligent communication platform
          </p>
          <div className="mt-8">
            <button className="btn-hero">
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaveGoodbyeSection;