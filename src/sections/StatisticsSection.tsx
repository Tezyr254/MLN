import { motion } from 'framer-motion';
import { statistics } from '../data/statistics';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

function StatCard({
  label,
  value,
  suffix = '',
  prefix = '',
}: {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const { ref, count } = useAnimatedCounter(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-mln-gold/10 bg-mln-dark/80 p-8 text-center backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-mln-red/5 to-transparent" />
      <div className="relative">
        <p
          className="font-display text-5xl font-bold text-mln-gold md:text-6xl"
          aria-label={`${prefix}${value}${suffix} ${label}`}
        >
          <span aria-hidden="true">
            {prefix}
            {count}
            {suffix}
          </span>
        </p>
        <p className="mt-3 text-sm font-medium uppercase tracking-widest text-mln-white/50">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export function StatisticsSection() {
  return (
    <section
      id="statistics"
      className="relative bg-mln-black py-24 md:py-32"
      aria-labelledby="statistics-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-mln-gold">
            Con Số Lịch Sử
          </p>
          <h2
            id="statistics-heading"
            className="font-display text-3xl font-bold text-mln-white md:text-5xl"
          >
            Hy Sinh Của Một Dân Tộc
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {statistics.map((stat) => (
            <StatCard
              key={stat.id}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
