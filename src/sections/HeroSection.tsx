import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { ParticleBackground } from '../components/ParticleBackground';
import { Button } from '../components/ui/Button';

interface HeroSectionProps {
  onBeginJourney: () => void;
}

export function HeroSection({ onBeginJourney }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Chào mừng đến với MLN"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-map-texture" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-mln-black via-mln-black/90 to-mln-black"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(ellipse at 30% 50%, rgba(193, 18, 31, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 30%, rgba(212, 175, 55, 0.1) 0%, transparent 40%)`,
          }}
          aria-hidden="true"
        />
        <ParticleBackground count={50} />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-mln-gold/80">
            Trải nghiệm lịch sử sống động
          </p>
          <h1 className="font-display text-7xl font-bold tracking-tight text-mln-white sm:text-8xl md:text-9xl">
            <span className="bg-gradient-to-b from-mln-white to-mln-white/70 bg-clip-text text-transparent">
              MLN
            </span>
          </h1>
          <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-mln-gold to-transparent" />
          <p className="mx-auto max-w-xl text-lg font-light leading-relaxed text-mln-white/70 md:text-xl">
            Hành trình khám phá lịch sử Việt Nam hiện đại.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
        >
          <Button
            size="lg"
            onClick={onBeginJourney}
            aria-label="Bắt đầu hành trình khám phá dòng thời gian"
          >
            Bắt Đầu Hành Trình
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-mln-white/30"
        >
          <span className="text-xs uppercase tracking-widest">Cuộn</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
