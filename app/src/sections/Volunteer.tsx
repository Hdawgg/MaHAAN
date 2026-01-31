import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, CheckCircle, User, Mail, Phone, BookOpen, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

gsap.registerPlugin(ScrollTrigger);

const Volunteer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="volunteer"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-500/5 via-transparent to-coral-500/5" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="text-coral-500 font-medium text-sm uppercase tracking-wider">
                Get Involved
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
                Become a Volunteer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join our community of passionate mentors and make a real difference
                in a child's life. Your time and skills can transform someone's
                future.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-coral-100 dark:bg-coral-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-coral-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Flexible Commitment</h4>
                  <p className="text-muted-foreground text-sm">
                    Volunteer as little as 2 hours per week. We work around your schedule.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-coral-100 dark:bg-coral-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-coral-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Training Provided</h4>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive orientation and ongoing support throughout your journey.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-coral-100 dark:bg-coral-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-coral-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Certificate & Recognition</h4>
                  <p className="text-muted-foreground text-sm">
                    Receive a certificate of appreciation and recognition for your contribution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white dark:bg-black p-8 lg:p-10 rounded-3xl shadow-soft">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                <p className="text-muted-foreground">
                  We have received your application. Our team will contact you soon.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Volunteer Application</h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mentorship">One-on-One Mentorship</SelectItem>
                      <SelectItem value="workshops">Group Workshops</SelectItem>
                      <SelectItem value="resources">Resource Distribution</SelectItem>
                      <SelectItem value="teacher-support">Teacher Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Why do you want to volunteer?</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your motivation..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-coral-500 hover:bg-coral-600 text-white py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
