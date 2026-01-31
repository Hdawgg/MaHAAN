import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Users, School, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Title animation
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1 }
      );

      // Subtitle animation
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      );

      // CTA buttons animation
      tl.fromTo(
        ctaRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        '-=0.4'
      );

      // Images animation
      tl.fromTo(
        imagesRef.current?.children || [],
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15 },
        '-=0.6'
      );

      // Stats animation
      tl.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '-=0.4'
      );

      // Floating animation for images
      gsap.to(imagesRef.current?.children || [], {
        y: -10,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.5,
          from: 'random',
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-50 via-white to-coral-50 dark:from-coral-950/20 dark:via-black dark:to-coral-950/20" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-coral-200/30 dark:bg-coral-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-coral-100/40 dark:bg-coral-900/20 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-100 dark:bg-coral-900/30 rounded-full">
              <span className="w-2 h-2 bg-coral-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-coral-700 dark:text-coral-300">
                Making Education Accessible
              </span>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              Quality{' '}
              <span className="text-gradient">Education</span>{' '}
              for Every Child
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg lg:text-xl text-muted-foreground max-w-xl"
            >
              We bridge the gap between potential and opportunity. Join us in
              transforming under-resourced schools into dynamic learning spaces
              through mentorship and volunteer support.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('#volunteer')}
                className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-6 text-lg group"
              >
                Become a Volunteer
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#about')}
                className="border-2 border-coral-500 text-coral-500 hover:bg-coral-50 dark:hover:bg-coral-950 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-coral-500 mb-1">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-2xl lg:text-3xl font-bold">0</span>
                </div>
                <p className="text-sm text-muted-foreground">Children Mentored</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-coral-500 mb-1">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl lg:text-3xl font-bold">5</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Volunteers</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-coral-500 mb-1">
                  <School className="w-5 h-5" />
                  <span className="text-2xl lg:text-3xl font-bold">0</span>
                </div>
                <p className="text-sm text-muted-foreground">Partner Schools</p>
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div ref={imagesRef} className="relative hidden lg:block">
            <div className="relative h-[600px]">
              {/* Main Image */}
              <div className="absolute top-0 left-0 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl z-10">
                <img
                  src="/hero-1.jpg"
                  alt="Student learning"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Image */}
              <div className="absolute top-20 right-0 w-72 h-80 rounded-2xl overflow-hidden shadow-2xl z-20">
                <img
                  src="/hero-2.jpg"
                  alt="Children studying together"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tertiary Image */}
              <div className="absolute bottom-0 left-20 w-64 h-72 rounded-2xl overflow-hidden shadow-2xl z-30">
                <img
                  src="/hero-3.jpg"
                  alt="Teacher helping student"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 right-20 w-20 h-20 bg-coral-500 rounded-full flex items-center justify-center z-40 shadow-glow">
                <Heart className="w-10 h-10 text-white fill-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
