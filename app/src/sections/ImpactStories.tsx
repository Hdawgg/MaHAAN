import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const ImpactStories = () => {
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <span className="text-coral-500 font-medium text-sm uppercase tracking-wider">
            Stories of Change
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
            Impact Stories
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Real stories of transformation from the children, teachers, and communities
            we have touched.
          </p>

          {/* Coming Soon Card */}
          <div className="bg-gradient-to-br from-coral-50 to-coral-100 dark:from-coral-950/30 dark:to-coral-900/20 rounded-3xl p-12 lg:p-16">
            <div className="w-20 h-20 bg-white dark:bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
              <BookOpen className="w-10 h-10 text-coral-500" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Stories Coming Soon</h3>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              We are currently documenting the incredible journeys of the children
              and communities we serve. Check back soon for inspiring stories of
              transformation and hope.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
              <Clock className="w-4 h-4" />
              <span>Expected launch: March 2025</span>
            </div>

            <Button
              variant="outline"
              className="border-coral-500 text-coral-500 hover:bg-coral-50 dark:hover:bg-coral-950"
            >
              Subscribe for Updates
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Placeholder Story Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 opacity-50">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-muted rounded-2xl p-6 h-64 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-coral-200 dark:bg-coral-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-coral-500" />
                  </div>
                  <p className="text-sm text-muted-foreground">Story {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
