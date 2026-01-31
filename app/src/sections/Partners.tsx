import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Handshake, Heart, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
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

  const partnerTypes = [
    {
      icon: GraduationCap,
      title: 'Schools',
      description:
        'Partner schools that welcome our volunteers and work with us to improve student outcomes.',
      action: 'Partner Your School',
    },
    {
      icon: Building2,
      title: 'Corporations',
      description:
        'Companies supporting our mission through CSR initiatives, employee volunteering, and sponsorships.',
      action: 'Corporate Partnership',
    },
    {
      icon: Heart,
      title: 'Donors',
      description:
        'Individual and institutional donors who fund our programs and help us reach more children.',
      action: 'Become a Donor',
    },
    {
      icon: Handshake,
      title: 'NGOs',
      description:
        'Collaborating organizations working towards similar goals in education and child development.',
      action: 'Collaborate',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-muted/30"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-coral-500 font-medium text-sm uppercase tracking-wider">
            Partners & Supporters
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
            Join Our Network
          </h2>
          <p className="text-lg text-muted-foreground">
            We are building a community of schools, corporations, and individuals
            committed to educational equity.
          </p>
        </div>

        {/* Partner Types */}
        <div
          ref={contentRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {partnerTypes.map((type, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-black p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-coral-100 dark:bg-coral-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <type.icon className="w-8 h-8 text-coral-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">{type.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">
                {type.description}
              </p>
              <Button
                variant="ghost"
                className="text-coral-500 hover:text-coral-600 hover:bg-coral-50 dark:hover:bg-coral-950"
              >
                {type.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Current Partners Placeholder */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
            Our Growing Network
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
            <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
              <Building2 className="w-8 h-8" />
            </div>
            <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
              <Heart className="w-8 h-8" />
            </div>
            <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
              <Handshake className="w-8 h-8" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Partner logos will be displayed here as we expand our network.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
