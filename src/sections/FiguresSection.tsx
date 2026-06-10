import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { historicalFigures } from '../data/figures';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FiguresSection() {
  return (
    <section
      id="figures"
      className="relative bg-mln-dark py-24 md:py-32"
      aria-labelledby="figures-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-mln-black via-transparent to-mln-black opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-mln-gold">
            Lãnh Đạo &amp; Nhà Lý Luận
          </p>
          <h2
            id="figures-heading"
            className="font-display text-3xl font-bold text-mln-white md:text-5xl"
          >
            Nhân Vật Lịch Sử
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-mln-white/60">
            Những kiến trúc sư của độc lập — người đã dẫn dắt dân tộc qua hàng thập kỷ đấu tranh.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {historicalFigures.map((figure) => (
            <motion.article
              key={figure.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl border border-mln-gold/10 bg-mln-black/60 p-6 backdrop-blur-sm transition-colors hover:border-mln-gold/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mln-gold/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-mln-gold/20 to-mln-red/20 font-display text-2xl font-bold text-mln-gold">
                  {figure.name.charAt(0)}
                </div>
                <h3 className="font-display text-xl font-semibold text-mln-white">
                  {figure.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-mln-gold">{figure.role}</p>
                <p className="mt-1 text-xs text-mln-white/40">{figure.years}</p>
                <p className="mt-4 text-sm leading-relaxed text-mln-white/60">
                  {figure.biography}
                </p>
                {figure.quote && (
                  <blockquote className="mt-4 border-l-2 border-mln-gold/40 pl-4">
                    <Quote className="mb-2 h-4 w-4 text-mln-gold/50" aria-hidden="true" />
                    <p className="text-sm italic text-mln-white/50">&ldquo;{figure.quote}&rdquo;</p>
                  </blockquote>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
