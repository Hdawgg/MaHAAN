import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Activities = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-muted/30"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div ref={contentRef} className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-coral-500 font-medium text-sm uppercase tracking-wider">
              Events & Activities
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
              Activities Calendar
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our upcoming events, workshops, and volunteer activities.
            </p>
          </div>

          {/* Coming Soon */}
          <div className="mb-16">
            <div className="bg-white dark:bg-black rounded-3xl p-12 lg:p-16 shadow-soft text-center">
              <div className="w-20 h-20 bg-coral-100 dark:bg-coral-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-coral-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Activities Coming Soon</h3>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                We are currently planning our first events and workshops. 
                Subscribe to our newsletter to be notified when activities are scheduled.
              </p>
              <Button
                variant="outline"
                className="border-coral-500 text-coral-500 hover:bg-coral-50 dark:hover:bg-coral-950"
              >
                Subscribe for Updates
              </Button>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest events and activities.
            </p>
            <Button
              variant="outline"
              className="border-coral-500 text-coral-500 hover:bg-coral-50 dark:hover:bg-coral-950"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
