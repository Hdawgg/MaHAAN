import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, School, BookOpen, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Impact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stat cards
      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Counter animation for each stat
      const counters = document.querySelectorAll('.stat-counter');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        gsap.fromTo(
          { value: 0 },
          { value: target },
          {
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: counter,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            onUpdate: function () {
              const val = Math.floor(this.targets()[0].value);
              counter.textContent = val.toLocaleString();
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: BookOpen,
      value: 0,
      suffix: '',
      label: 'Children Mentored',
      description: 'Direct impact on students across partner schools',
    },
    {
      icon: Users,
      value: 5,
      suffix: '',
      label: 'Active Volunteers',
      description: 'Dedicated mentors from the student community',
    },
    {
      icon: School,
      value: 0,
      suffix: '',
      label: 'Partner Schools',
      description: 'Under-resourced schools receiving support',
    },
    {
      icon: TrendingUp,
      value: 0,
      suffix: '%',
      label: 'Success Rate',
      description: 'Students showing improvement in academics',
    },
  ];

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-coral-500/5 to-transparent" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-coral-500 font-medium text-sm uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
            Making a Difference
          </h2>
          <p className="text-lg text-muted-foreground">
            Numbers that reflect our commitment to transforming education and
            creating lasting change in communities.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-black p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-coral-100 dark:bg-coral-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7 text-coral-500" />
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className="stat-counter text-4xl lg:text-5xl font-bold text-coral-500"
                  data-target={stat.value}
                >
                  0
                </span>
                <span className="text-2xl lg:text-3xl font-bold text-coral-500">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-coral-500/5 rounded-bl-full" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-2">Reduced Student-Teacher Ratio</h4>
            <p className="text-muted-foreground text-sm">
              From 1:50 to 1:15 in supported classrooms
            </p>
          </div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-2">Increased Engagement</h4>
            <p className="text-muted-foreground text-sm">
              80% improvement in student participation
            </p>
          </div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-2">Teacher Satisfaction</h4>
            <p className="text-muted-foreground text-sm">
              100% of teachers report reduced workload stress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
