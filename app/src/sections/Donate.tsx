import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, CheckCircle, Wallet, BookOpen, Users, School } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Donate = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const donationAmounts = [500, 1000, 2500, 5000];

  const impactExamples = [
    {
      amount: 500,
      icon: BookOpen,
      description: 'Provides study materials for 5 children for a month',
    },
    {
      amount: 1000,
      icon: Users,
      description: 'Supports one volunteer mentor for a month',
    },
    {
      amount: 2500,
      icon: School,
      description: 'Funds a complete workshop for 30 students',
    },
    {
      amount: 5000,
      icon: Wallet,
      description: 'Sets up a mini library in a partner school',
    },
  ];

  const handleDonate = () => {
    if (selectedAmount) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedAmount(null);
      }, 5000);
    }
  };

  return (
    <section
      id="donate"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-muted/30"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div ref={contentRef} className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-coral-500 font-medium text-sm uppercase tracking-wider">
              Support Our Cause
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
              Make a Donation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your contribution directly impacts the lives of children in
              under-resourced schools. 100% of donations go to our programs.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white dark:bg-black p-12 rounded-3xl shadow-soft text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Thank You for Your Generosity!</h3>
              <p className="text-muted-foreground mb-6">
                Your donation of ₹{selectedAmount} will make a real difference.
                We will send you a confirmation email shortly.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setSelectedAmount(null);
                }}
                variant="outline"
                className="border-coral-500 text-coral-500 hover:bg-coral-50"
              >
                Make Another Donation
              </Button>
            </div>
          ) : (
            <>
              {/* Donation Amounts */}
              <div className="bg-white dark:bg-black p-8 lg:p-10 rounded-3xl shadow-soft mb-8">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Select an Amount (₹)
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        selectedAmount === amount
                          ? 'border-coral-500 bg-coral-50 dark:bg-coral-950'
                          : 'border-border hover:border-coral-300'
                      }`}
                    >
                      <span className="text-2xl font-bold">₹{amount}</span>
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="flex gap-4 mb-8">
                  <div className="flex-1 relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      ₹
                    </span>
                    <input
                      type="number"
                      placeholder="Custom amount"
                      className="w-full p-4 pl-10 rounded-xl border-2 border-border focus:border-coral-500 outline-none transition-colors"
                      onChange={(e) => setSelectedAmount(Number(e.target.value))}
                    />
                  </div>
                  <Button
                    onClick={handleDonate}
                    disabled={!selectedAmount}
                    className="bg-coral-500 hover:bg-coral-600 text-white px-8 disabled:opacity-50"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  Secure payment processing. All donations are tax-deductible under
                  Section 80G.
                </p>
              </div>

              {/* Impact Section */}
              <div className="grid sm:grid-cols-2 gap-4">
                {impactExamples.map((example, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white dark:bg-black rounded-xl shadow-soft"
                  >
                    <div className="w-12 h-12 bg-coral-100 dark:bg-coral-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <example.icon className="w-6 h-6 text-coral-500" />
                    </div>
                    <div>
                      <span className="font-bold text-coral-500">₹{example.amount}</span>
                      <p className="text-sm text-muted-foreground">
                        {example.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Transparency Note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              We believe in complete transparency. Download our annual reports to
              see how your donations are used.
            </p>
            <Button variant="outline" className="border-coral-500 text-coral-500">
              Download Annual Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
