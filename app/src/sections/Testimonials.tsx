import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-coral-500 font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
            What They Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from teachers, volunteers, and community members about their
            experience with MaHAAN.
          </p>
        </div>

        {/* Testimonial Carousel - Coming Soon */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-black rounded-3xl shadow-soft p-12 lg:p-16 text-center">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Coming Soon Content */}
            <div className="pt-4">
              <div className="w-20 h-20 bg-coral-100 dark:bg-coral-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-coral-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Testimonials Coming Soon</h3>
              <p className="text-muted-foreground max-w-lg mx-auto">
                We are just getting started! Check back soon to hear from teachers, 
                volunteers, and community members about their experience with MaHAAN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
