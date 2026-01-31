import { Heart, ArrowUp, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    organization: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Programs', href: '#programs' },
      { label: 'Impact', href: '#impact' },
    ],
    getInvolved: [
      { label: 'Volunteer', href: '#volunteer' },
      { label: 'Donate', href: '#donate' },
      { label: 'Partner with Us', href: '#partners' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Annual Report', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: 'mailto:contact@mahaan.org', label: 'Email' },
  ];

  return (
    <footer className="relative w-full bg-black text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold text-coral-500 mb-6">
              <Heart className="w-8 h-8 fill-coral-500" />
              <span>MaHAAN</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Bridging the gap between potential and opportunity. Join us in making
              quality education accessible to every child in India.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Organization</h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-coral-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-coral-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-coral-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} MaHAAN. All rights reserved. Made with{' '}
            <Heart className="w-4 h-4 inline text-coral-500 fill-coral-500" /> for education.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-coral-500 rounded-full flex items-center justify-center hover:bg-coral-600 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
