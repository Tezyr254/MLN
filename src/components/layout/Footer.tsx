import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-mln-gold/10 bg-mln-black py-12"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-6 text-center md:px-12">
        <p className="font-display text-2xl font-bold text-mln-gold">MLN</p>
        <p className="mt-2 text-sm text-mln-white/40">
          Hành trình khám phá lịch sử Việt Nam hiện đại
        </p>
        <p className="mt-6 text-xs text-mln-white/25">
          &copy; {new Date().getFullYear()} MLN. Trải nghiệm lịch sử giáo dục.
        </p>
      </div>
    </motion.footer>
  );
}
