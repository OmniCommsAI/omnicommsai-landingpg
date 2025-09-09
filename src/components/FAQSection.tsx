import { Plus } from 'lucide-react';
import { useState } from 'react';

const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const faqData = [
    {
      question: "What is Prismo?",
      answer: "Prismo is a comprehensive project management platform designed to streamline workflows, enhance team collaboration, and boost productivity across all types of projects.",
      category: "left"
    },
    {
      question: "How does Prismo improve productivity?",
      answer: "Prismo automates repetitive tasks, provides real-time collaboration tools, and offers intelligent insights that help teams work more efficiently and make data-driven decisions.",
      category: "left"
    },
    {
      question: "Is Prismo easy to use?",
      answer: "Yes, Prismo is designed with user experience in mind. It features an intuitive interface, guided onboarding, and comprehensive documentation to get your team up and running quickly.",
      category: "left"
    },
    {
      question: "Can I integrate Prismo with other tools?",
      answer: "Absolutely! Prismo offers seamless integrations with popular tools like Slack, Google Workspace, Microsoft Teams, Jira, and many more to fit into your existing workflow.",
      category: "left"
    },
    {
      question: "Is Prismo suitable for small teams?",
      answer: "Yes, Prismo scales from small teams to enterprise organizations. We offer flexible pricing plans and features that adapt to your team size and needs.",
      category: "left"
    },
    {
      question: "How can I track team progress?",
      answer: "Prismo provides comprehensive dashboards, real-time progress tracking, customizable reports, and automated status updates to keep everyone informed about project progress.",
      category: "right"
    },
    {
      question: "Can I manage multiple projects at once?",
      answer: "Yes, Prismo's multi-project dashboard allows you to oversee multiple projects simultaneously, with cross-project resource allocation and portfolio-level reporting.",
      category: "right"
    },
    {
      question: "Does Prismo offer task automation?",
      answer: "Yes, Prismo includes powerful automation features like workflow triggers, recurring task creation, automatic notifications, and rule-based task assignments.",
      category: "right"
    },
    {
      question: "Is there a mobile version of Prismo?",
      answer: "Yes, Prismo offers full-featured mobile apps for iOS and Android, allowing you to manage projects, communicate with team members, and track progress on the go.",
      category: "right"
    },
    {
      question: "How secure is Prismo?",
      answer: "Prismo employs enterprise-grade security including 256-bit SSL encryption, two-factor authentication, regular security audits, and compliance with SOC 2 and GDPR standards.",
      category: "right"
    }
  ];

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const leftFAQs = faqData.filter(faq => faq.category === "left");
  const rightFAQs = faqData.filter(faq => faq.category === "right");

  return (
    <section className="py-16 px-4" id="faq">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white shadow-sm border mb-6">
            <span className="text-sm font-medium text-foreground">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Column */}
          <div className="space-y-0">
            {leftFAQs.map((faq, index) => {
              const isExpanded = expandedItems.has(index);
              return (
                <div key={index} className="border-t border-border bg-muted/50">
                  <button 
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    onClick={() => toggleExpanded(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="text-lg font-semibold text-foreground pr-4">
                        {faq.question}
                      </h5>
                      <div className={`flex-shrink-0 w-6 h-6 bg-foreground rounded-lg relative transition-transform duration-200 ${isExpanded ? 'rotate-45' : ''}`}>
                        <Plus className="w-4 h-4 text-background absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {rightFAQs.map((faq, index) => {
              const actualIndex = leftFAQs.length + index; // Offset by left column length
              const isExpanded = expandedItems.has(actualIndex);
              return (
                <div key={actualIndex} className="border-t border-border bg-muted/50">
                  <button 
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                    onClick={() => toggleExpanded(actualIndex)}
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="text-lg font-semibold text-foreground pr-4">
                        {faq.question}
                      </h5>
                      <div className={`flex-shrink-0 w-6 h-6 bg-foreground rounded-lg relative transition-transform duration-200 ${isExpanded ? 'rotate-45' : ''}`}>
                        <Plus className="w-4 h-4 text-background absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h5 className="text-xl font-semibold text-foreground mb-4">
            Have Questions? We're Here to Help!
          </h5>
          <p className="text-muted-foreground mb-8">
            Reach out to our support team for any queries or assistance.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;