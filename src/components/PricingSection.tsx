import { Check, Zap, Crown, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$10',
      period: 'per member / month',
      description: 'Perfect for small teams and startups.',
      icon: '🪐', // Geometric red shape
      iconColor: 'text-red-500',
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
      period: 'per member / month',
      description: 'Ideal for growing teams and projects.',
      icon: '🟠', // Geometric orange shape
      iconColor: 'text-orange-500',
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
      period: 'per member / month',
      description: 'Built for large organizations needs.',
      icon: '✦', // Geometric purple shape
      iconColor: 'text-purple-500',
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
    <section id="pricing" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Billing Toggle */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-muted rounded-full p-1">
            <button className="px-6 py-2 rounded-full bg-foreground text-background font-medium text-sm">
              Billed Monthly
            </button>
            <button className="px-6 py-2 text-muted-foreground font-medium text-sm">
              Billed yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            return (
              <div 
                key={plan.name}
                className={`relative bg-white rounded-2xl p-8 ${plan.popular ? 'border-2 border-red-400' : 'border border-gray-200'} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`text-4xl ${plan.iconColor}`}>
                      {plan.icon}
                    </div>
                  </div>
                  
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  
                  {/* CTA Button */}
                  <Button className="w-full mb-8">
                    {plan.cta}
                  </Button>
                </div>
                
                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;