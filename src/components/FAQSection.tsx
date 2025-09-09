import { Plus } from 'lucide-react';

const FAQSection = () => {
  const faqData = [
    {
      question: "What is Prismo?",
      category: "left"
    },
    {
      question: "How does Prismo improve productivity?",
      category: "left"
    },
    {
      question: "Is Prismo easy to use?",
      category: "left"
    },
    {
      question: "Can I integrate Prismo with other tools?",
      category: "left"
    },
    {
      question: "Is Prismo suitable for small teams?",
      category: "left"
    },
    {
      question: "How can I track team progress?",
      category: "right"
    },
    {
      question: "Can I manage multiple projects at once?",
      category: "right"
    },
    {
      question: "Does Prismo offer task automation?",
      category: "right"
    },
    {
      question: "Is there a mobile version of Prismo?",
      category: "right"
    },
    {
      question: "How secure is Prismo?",
      category: "right"
    }
  ];

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
            {leftFAQs.map((faq, index) => (
              <div key={index} className="border-t border-border bg-muted/50 p-6">
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h5>
                  <div className="flex-shrink-0 w-6 h-6 bg-foreground rounded-lg relative">
                    <Plus className="w-4 h-4 text-background absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {rightFAQs.map((faq, index) => (
              <div key={index} className="border-t border-border bg-muted/50 p-6">
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h5>
                  <div className="flex-shrink-0 w-6 h-6 bg-foreground rounded-lg relative">
                    <Plus className="w-4 h-4 text-background absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
            ))}
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