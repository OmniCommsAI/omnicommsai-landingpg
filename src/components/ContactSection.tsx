import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30 mb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us for inquiries, support, or feedback. We're here to assist you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
              <div className="flex items-start">
                <div className="relative h-12 w-12 mr-4 mt-1">
                  {/* Gradient Border */}
                  <div
                    className="absolute inset-0 rounded-xl p-0.5"
                    style={{
                      background: 'linear-gradient(90deg, rgb(255, 47, 47) 0%, rgb(239, 123, 22) 35.8783%, rgb(138, 67, 225) 69.922%, rgb(213, 17, 253) 100%)'
                    }}
                  >
                    {/* Icon Container */}
                    <div 
                      className="rounded-xl h-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(180deg, #4c4c4c 0%, rgb(17, 17, 17) 100%)'
                      }}
                    >
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground">hello@omnicomms.ai</p>
                <a href="mailto:hello@omnicomms.ai" className="text-primary hover:text-primary-dark transition-colors">
                  Send us an email →
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="relative h-12 w-12 mr-4 mt-1">
                {/* Gradient Border */}
                <div
                  className="absolute inset-0 rounded-xl p-0.5"
                  style={{
                    background: 'linear-gradient(90deg, rgb(255, 47, 47) 0%, rgb(239, 123, 22) 35.8783%, rgb(138, 67, 225) 69.922%, rgb(213, 17, 253) 100%)'
                  }}
                >
                  {/* Icon Container */}
                  <div 
                    className="rounded-xl h-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(180deg, #4c4c4c 0%, rgb(17, 17, 17) 100%)'
                    }}
                  >
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <a href="tel:+15551234567" className="text-primary hover:text-primary-dark transition-colors">
                  Call our team →
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="relative h-12 w-12 mr-4 mt-1">
                {/* Gradient Border */}
                <div
                  className="absolute inset-0 rounded-xl p-0.5"
                  style={{
                    background: 'linear-gradient(90deg, rgb(255, 47, 47) 0%, rgb(239, 123, 22) 35.8783%, rgb(138, 67, 225) 69.922%, rgb(213, 17, 253) 100%)'
                  }}
                >
                  {/* Icon Container */}
                  <div 
                    className="rounded-xl h-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(180deg, #4c4c4c 0%, rgb(17, 17, 17) 100%)'
                    }}
                  >
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Office</h3>
                <p className="text-muted-foreground">
                  123 Innovation Drive<br />
                  San Francisco, CA 94105
                </p>
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                  Get directions →
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-primary rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Why Choose OmniComms AI?</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Response Time</span>
                  <span className="font-semibold">&lt; 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Customer Satisfaction</span>
                  <span className="font-semibold">99.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Time</span>
                  <span className="font-semibold">&lt; 15 minutes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            {/* Gradient Border */}
            <div
              className="absolute inset-0 rounded-3xl p-0.5"
              style={{
                background: 'linear-gradient(90deg, rgb(255, 47, 47) 0%, rgb(239, 123, 22) 35.8783%, rgb(138, 67, 225) 69.922%, rgb(213, 17, 253) 100%)'
              }}
            >
              {/* Form Container */}
              <div className="bg-card rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us your query</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input placeholder="your.email@company.com" type="email" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input placeholder="How can we help you?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your requirements..."
                      rows={6}
                    />
                  </div>

                  <Button className="btn-hero w-full group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Your Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;