import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Heart, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
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

      // Images animation
      gsap.fromTo(
        imagesRef.current?.children || [],
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imagesRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'An India where every child, regardless of geography or economic status, has access to a support system that extends beyond the textbook.',
    },
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To support single teacher and under-resourced schools by mobilizing committed volunteers, transforming isolated learning environments into dynamic spaces.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description:
        'We honor existing teachers as allies, not replacements. We believe talent is distributed equally, but opportunity is not.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <div ref={imagesRef} className="relative order-2 lg:order-1">
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Main Image */}
              <div className="absolute top-0 left-0 w-72 lg:w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about-1.jpg"
                  alt="Student smiling"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Image */}
              <div className="absolute bottom-0 right-0 w-56 lg:w-64 h-64 lg:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-black">
                <img
                  src="/about-2.jpg"
                  alt="Child writing"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats Card */}
              <div className="absolute top-1/2 right-0 lg:right-10 transform -translate-y-1/2 bg-white dark:bg-black p-6 rounded-2xl shadow-xl z-10">
                <div className="text-4xl font-bold text-coral-500 mb-1">0</div>
                <p className="text-sm text-muted-foreground">Schools Partnered</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-coral-500 font-medium text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold mt-3">
                Our Story
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              MaHAAN was born from a simple observation: talent is evenly distributed,
              but opportunity is not. We exist to change that equation. Started by a
              group of passionate B.Tech students, we aim to bridge the gap between
              the resource-rich student community and the resource-strained public
              schooling system.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our name reflects our mission - to be a beacon of hope (Mahaan means
              "great" or "noble" in Sanskrit) for children who deserve quality
              education regardless of their circumstances.
            </p>

            {/* Values Grid */}
            <div className="grid gap-6 pt-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-coral-100 dark:bg-coral-900/30 rounded-xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-coral-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      {value.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-coral-500" />
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
