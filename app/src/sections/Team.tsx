import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Mail, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const foundersRef = useRef<HTMLDivElement>(null);
  const advisorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Founders animation
      gsap.fromTo(
        foundersRef.current?.children || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: foundersRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Advisor animation
      gsap.fromTo(
        advisorRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: advisorRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const founders = [
    {
      name: 'Moiz Arsiwala',
      role: 'Co-Founder',
      bio: 'B.Tech Computer Science & Business Systems',
      image: '/founder-1.jpg',
      linkedin: '#',
      email: 'moiz@mahaan.org',
    },
    {
      name: 'Harmeet Bhatia',
      role: 'Co-Founder',
      bio: 'B.Tech Computer Science & Business Systems',
      image: '/founder-2.jpg',
      linkedin: '#',
      email: 'harmeet@mahaan.org',
    },
    {
      name: 'Atharva Borreddi',
      role: 'Co-Founder',
      bio: 'B.Tech Computer Science & Business Systems',
      image: '/founder-3.jpg',
      linkedin: '#',
      email: 'atharva@mahaan.org',
    },
    {
      name: 'Aditiya Anchan',
      role: 'Co-Founder',
      bio: 'B.Tech Computer Science & Business Systems',
      image: '/founder-4.jpg',
      linkedin: '#',
      email: 'aditiya@mahaan.org',
    },
    {
      name: 'Netal Gupta',
      role: 'Co-Founder',
      bio: 'B.Tech Computer Science & Business Systems',
      image: '/founder-5.jpg',
      linkedin: '#',
      email: 'netal@mahaan.org',
    },
  ];

  const advisor = {
    name: 'Prof. Suwarna Suryawanshi',
    role: 'Faculty Advisor',
    bio: 'Professor and Mentor guiding MaHAAN\'s mission and vision',
    image: '/advisor-1.jpg',
    linkedin: '#',
    email: 'suwarna.maam@university.edu',
  };

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-muted/30"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-coral-500 font-medium text-sm uppercase tracking-wider">
            Our People
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Passionate students dedicated to making quality education accessible
            to every child.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
            Founders
          </h3>
          <div
            ref={foundersRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {founders.map((founder, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-black rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Social links on hover */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={founder.linkedin}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-coral-500 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${founder.email}`}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-coral-500 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <h4 className="font-bold text-lg">{founder.name}</h4>
                  <p className="text-coral-500 text-sm font-medium mb-2">
                    {founder.role}
                  </p>
                  <p className="text-muted-foreground text-xs flex items-center justify-center gap-1">
                    <GraduationCap className="w-3 h-3" />
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisor Section */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
            Faculty Advisor
          </h3>
          <div
            ref={advisorRef}
            className="max-w-md mx-auto"
          >
            <div className="group bg-white dark:bg-black rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Social links on hover */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={advisor.linkedin}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-coral-500 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${advisor.email}`}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-coral-500 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h4 className="font-bold text-xl">{advisor.name}</h4>
                <p className="text-coral-500 text-sm font-medium mb-2">
                  {advisor.role}
                </p>
                <p className="text-muted-foreground text-sm">{advisor.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
