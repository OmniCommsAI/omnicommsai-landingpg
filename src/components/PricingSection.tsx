import { Check, Folder, Crown, Building, ToggleLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic',
      price: '$10',
      description: 'Perfect for small teams and startups.',
      icon: Folder,
      features: [
        'Task Management',
        'AI Summary',
        'Progress Tracking',
        'Smart Labels'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$25',
      description: 'Ideal for growing teams and projects.',
      icon: Crown,
      features: [
        'Everything in Basic +',
        'Team Collaboration',
        'Bulk Actions',
        '2-way Translation',
        'Advanced Reporting',
        'Customizable Dashboards',
        'Priority Support'
      ],
      cta: 'Start 7-day free trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$39',
      description: 'Built for large organizations needs.',
      icon: Building,
      features: [
        'Everything in Basic +',
        'SAML sso',
        'Dedicated Account Manager',
        'Enterprise Integrations',
        'Data Analytics',
        'Security Enhancements',
        'Custom Workflows'
      ],
      cta: 'Start 7-day free trial',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-beige-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="text-foreground text-sm font-medium">Pricing & Plans</span>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Affordable Pricing Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible, transparent pricing to support your team's productivity and growth at every stage.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 mb-8 shadow-sm">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isYearly 
                  ? 'bg-foreground text-background shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setIsYearly(false)}
            >
              Billed Monthly
            </button>
            <div className="relative mx-2">
              <ToggleLeft 
                className={`h-6 w-6 text-foreground transition-transform duration-300 ${
                  isYearly ? 'rotate-180' : ''
                }`}
              />
            </div>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isYearly 
                  ? 'bg-foreground text-background shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setIsYearly(true)}
            >
              Billed yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={plan.name}
                className={`relative animate-fade-in-up overflow-hidden rounded-[20px]`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-beige rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-foreground" />
                    </div>
                    
                    {/* Content */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {plan.description}
                      </p>
                      
                      {/* Price */}
                      <div className="flex items-baseline mb-6">
                        <span className="text-5xl font-bold text-foreground">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground ml-2">
                          per member / month
                        </span>
                      </div>
                      
                      {/* CTA Button */}
                      <Button className="w-full">
                        {plan.cta}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Features Section */}
                  <div className="bg-beige px-8 py-6">
                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-foreground mr-3 flex-shrink-0" />
                          <span className="text-foreground font-medium text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Gradient accent for Pro plan */}
                {plan.popular && (
                  <>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 via-purple-600 to-pink-600 rounded-b-2xl"></div>
                    <div className="absolute bottom-1 left-1 right-1 h-1 bg-beige rounded-b-2xl"></div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Startup Program */}
        <div className="text-center">
          <div className="inline-block bg-beige rounded-xl border border-beige-dark p-6 text-left max-w-md mx-auto">
            <div className="text-sm text-foreground">
              <span className="text-muted-foreground">We just launched our startup program - </span>
              <span className="font-semibold text-foreground">get 6 months free.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;