import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#timeline', label: 'Dòng thời gian' },
  { href: '#figures', label: 'Nhân vật' },
  { href: '#statistics', label: 'Thống kê' },
  { href: '#legacy', label: 'Di sản' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 100], ['rgba(11, 11, 11, 0)', 'rgba(11, 11, 11, 0.9)']);
  const borderColor = useTransform(scrollY, [0, 100], ['rgba(212, 175, 55, 0)', 'rgba(212, 175, 55, 0.2)']);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header className="fixed left-0 right-0 top-0 z-50" role="banner">
      <motion.div
        style={{ backgroundColor, borderBottomColor: borderColor }}
        className="border-b border-transparent backdrop-blur-md"
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12"
          aria-label="Điều hướng chính"
        >
          <a
            href="#hero"
            className="font-display text-xl font-bold tracking-wider text-mln-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mln-gold"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
          >
            MLN
          </a>

          <ul className="hidden items-center gap-8 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-medium text-mln-white/60 transition-colors hover:text-mln-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mln-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="rounded-lg p-2 text-mln-white/70 transition-colors hover:text-mln-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-mln-gold/10 bg-mln-black/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-mln-white/70 transition-colors hover:bg-mln-gold/10 hover:text-mln-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </motion.header>
  );
}
