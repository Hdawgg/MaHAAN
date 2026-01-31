import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: 'What is MaHAAN and what do you do?',
      answer:
        'MaHAAN is a student-led NGO that bridges the gap between resource-rich student communities and under-resourced public schools. We mobilize volunteers to provide mentorship, reduce student-to-teacher ratios, and transform isolated learning environments into dynamic, interactive spaces.',
    },
    {
      question: 'How can I become a volunteer?',
      answer:
        'You can sign up through our volunteer form on this website. We welcome students and professionals who are passionate about education. After signing up, you will go through a brief orientation and training session before being matched with a school or student.',
    },
    {
      question: 'What is the time commitment for volunteers?',
      answer:
        'We offer flexible volunteering options. You can commit as little as 2 hours per week for one-on-one mentorship, or participate in weekend workshops and special events. We work with your schedule to find the best fit.',
    },
    {
      question: 'Which schools do you work with?',
      answer:
        'We partner with government schools and under-resourced private schools in and around our university area. Our focus is on schools with single teachers or limited teaching staff where our volunteers can make the most impact.',
    },
    {
      question: 'How are donations used?',
      answer:
        '100% of donations go directly to our programs. This includes purchasing educational materials, organizing workshops, transportation for volunteers, and setting up digital learning resources. We maintain complete transparency with regular impact reports.',
    },
    {
      question: 'Can schools request support from MaHAAN?',
      answer:
        'Absolutely! Schools can reach out to us through our contact form or email. We evaluate each request based on need, location, and our current volunteer capacity to ensure we can provide meaningful support.',
    },
    {
      question: 'Do you provide training for volunteers?',
      answer:
        'Yes, all volunteers undergo an orientation program that covers teaching methodologies, child psychology basics, and classroom management. We also provide ongoing support and resources throughout your volunteering journey.',
    },
    {
      question: 'How can corporations partner with MaHAAN?',
      answer:
        'We offer corporate partnership programs including employee volunteering days, sponsorship of specific programs, and CSR initiatives. Contact us to discuss how your organization can make a meaningful impact.',
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-muted/30"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-coral-500 font-medium text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about MaHAAN, volunteering, and our
            programs.
          </p>
        </div>

        {/* FAQ Content */}
        <div ref={contentRef} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-black rounded-xl px-6 border-none shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-coral-500 transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We are here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-coral-500 font-medium hover:underline"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
