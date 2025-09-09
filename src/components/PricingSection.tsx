import { Check, Zap, Crown, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for small teams getting started.',
      icon: Zap,
      features: [
        'Unified messaging across 3 channels',
        'Basic AI automation',
        'Team collaboration tools',
        'Standard analytics',
        'Email support',
        '1,000 messages/month'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional', 
      price: '$79',
      description: 'Ideal for growing businesses and teams.',
      icon: Crown,
      features: [
        'Everything in Starter +',
        'Unlimited channels & integrations',
        'Advanced AI & automation',
        'Custom workflows',
        'Priority support',
        '10,000 messages/month',
        'Advanced analytics & reporting',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      description: 'Built for large organizations.',
      icon: Rocket,
      features: [
        'Everything in Professional +',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security & compliance',
        'Unlimited messages',
        '24/7 phone support',
        'White-label options',
        'Custom AI training'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan to transform your communications. All plans include a 14-day free trial.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-muted rounded-full p-1 mb-8">
            <button className="px-6 py-2 rounded-full bg-background text-foreground font-medium shadow-sm">
              Monthly
            </button>
            <button className="px-6 py-2 text-muted-foreground font-medium">
              Annual (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={plan.name}
                className={`relative card-elevated ${plan.popular ? 'ring-2 ring-primary scale-105' : ''} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${plan.popular ? 'bg-gradient-primary text-white' : 'bg-muted text-muted-foreground'} mb-6`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      per month
                    </span>
                  </div>
                  
                  <Button 
                    className={plan.popular ? 'btn-hero w-full' : 'btn-outline-hero w-full'}
                  >
                    {plan.cta}
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need a custom solution?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              We offer tailored enterprise solutions with custom integrations, dedicated support, and volume pricing.
            </p>
            <Button className="bg-white text-primary hover:bg-white/90">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;