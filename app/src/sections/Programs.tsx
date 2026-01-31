import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Package, HeartHandshake, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const programs = [
    {
      icon: BookOpen,
      title: 'Group Workshops',
      description:
        'Interactive learning sessions that foster collaboration and peer-to-peer learning. Students engage in activities that build critical thinking skills.',
      image: '/program-2.jpg',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Package,
      title: 'Resource Distribution',
      description:
        'Providing essential learning materials including books, stationery, and digital resources to under-resourced schools and students.',
      image: '/program-3.jpg',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: HeartHandshake,
      title: 'Teacher Support',
      description:
        'Working alongside existing teachers to lighten their load, not replace them. We provide additional hands and fresh perspectives in the classroom.',
      image: '/program-4.jpg',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-muted/30"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-coral-500 font-medium text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a range of initiatives designed to support under-resourced
            schools and provide quality education to every child.
          </p>
        </div>

        {/* Programs Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-black rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-20`} />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 dark:bg-black/90 backdrop-blur rounded-xl flex items-center justify-center">
                  <program.icon className="w-6 h-6 text-coral-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-coral-500 transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-coral-500 hover:text-coral-600 hover:bg-transparent group/btn"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
