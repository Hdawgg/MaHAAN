import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Users, School, Award, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        timelineRef.current?.children || [],
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
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

  const milestones = [
    {
      icon: Rocket,
      title: 'The Beginning',
      date: 'January 2025',
      description:
        'MaHAAN was founded by five B.Tech students with a shared vision to make quality education accessible to every child.',
      status: 'completed',
    },
    {
      icon: Users,
      title: 'Building the Team',
      date: 'February 2025',
      description:
        'Our founding team of 5 passionate students came together to plan and structure our initiatives.',
      status: 'in-progress',
    },
    {
      icon: School,
      title: 'Establishing Partnerships',
      date: 'March 2025',
      description:
        'Connecting with existing NGOs and schools to begin our mentorship programs.',
      status: 'upcoming',
    },
    {
      icon: Target,
      title: 'Expanding Reach',
      date: 'June 2025',
      description:
        'Aim to partner with 10 schools and mentor 500+ children through our volunteer network.',
      status: 'upcoming',
    },
    {
      icon: Award,
      title: 'Scaling Impact',
      date: 'December 2025',
      description:
        'Target to reach 2000+ children across 25 schools with a volunteer base of 100+ mentors.',
      status: 'upcoming',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-coral-500 font-medium text-sm uppercase tracking-wider">
            Our Journey
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
            Timeline
          </h2>
          <p className="text-lg text-muted-foreground">
            From a classroom idea to a movement for educational equity - our
            journey so far.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coral-500 via-coral-300 to-coral-100" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative flex gap-6 lg:gap-10 items-start"
              >
                {/* Icon */}
                <div
                  className={`relative z-10 flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center ${
                    milestone.status === 'completed'
                      ? 'bg-coral-500'
                      : milestone.status === 'in-progress'
                      ? 'bg-coral-300'
                      : 'bg-coral-100'
                  }`}
                >
                  <milestone.icon
                    className={`w-6 h-6 lg:w-8 lg:h-8 ${
                      milestone.status === 'completed'
                        ? 'text-white'
                        : 'text-coral-700'
                    }`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex-1 p-6 rounded-2xl ${
                    milestone.status === 'completed'
                      ? 'bg-white dark:bg-black shadow-soft'
                      : milestone.status === 'in-progress'
                      ? 'bg-coral-50 dark:bg-coral-950/30 border-2 border-coral-200'
                      : 'bg-muted/50'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full ${
                        milestone.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : milestone.status === 'in-progress'
                          ? 'bg-coral-100 text-coral-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {milestone.status === 'completed'
                        ? 'Completed'
                        : milestone.status === 'in-progress'
                        ? 'In Progress'
                        : 'Upcoming'}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {milestone.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
