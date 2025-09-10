import { Star, Quote } from 'lucide-react';
import testimonialAvatars from '@/assets/testimonial-avatars.png';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "OmniComms AI has completely transformed how our customer service team operates. We've seen a 300% improvement in response times and our customers love the seamless experience.",
      author: "Sarah Johnson",
      role: "Customer Success Director",
      company: "TechFlow Solutions",
      rating: 5,
      avatar: testimonialAvatars
    },
    {
      quote: "The AI-powered automation has been a game-changer. Our team can now focus on high-value conversations while routine inquiries are handled intelligently by the system.",
      author: "Michael Chen", 
      role: "Operations Manager",
      company: "GrowthTech Inc",
      rating: 5,
      avatar: testimonialAvatars
    },
    {
      quote: "Integration was seamless and the results were immediate. Our communication efficiency increased by 250% in the first month alone. Highly recommend OmniComms AI.",
      author: "Emily Rodriguez",
      role: "Head of Customer Experience", 
      company: "InnovateNow",
      rating: 5,
      avatar: testimonialAvatars
    },
    {
      quote: "Finally, a solution that brings all our communication channels together. The analytics and insights have helped us understand our customers like never before.",
      author: "David Kim",
      role: "CEO",
      company: "NextGen Dynamics",
      rating: 5,
      avatar: testimonialAvatars
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how businesses worldwide are transforming their communications with OmniComms AI
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">5X</div>
            <div className="text-sm text-muted-foreground">Response Speed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">80%</div>
            <div className="text-sm text-muted-foreground">Time Saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">AI Availability</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="card-elevated animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary mb-6" />
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="icon-gradient-container h-12 w-12 mr-4">
                  <div className="icon-gradient-border-circle">
                    <div className="icon-gradient-inner-circle text-white font-semibold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;