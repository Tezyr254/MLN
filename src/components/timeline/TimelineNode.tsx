import { motion } from 'framer-motion';
import type { TimelineEvent } from '../../types';

interface TimelineNodeProps {
  event: TimelineEvent;
  isActive: boolean;
  isVertical: boolean;
  onSelect: (event: TimelineEvent) => void;
  index: number;
}

export function TimelineNode({ event, isActive, isVertical, onSelect, index }: TimelineNodeProps) {
  const labelAbove = !isVertical && index % 2 === 1;

  if (isVertical) {
    return (
      <motion.button
        type="button"
        onClick={() => onSelect(event)}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
        aria-label={`${event.year}: ${event.title}. Nhấp để xem chi tiết.`}
        aria-pressed={isActive}
        className="group relative flex w-full max-w-lg flex-row items-start gap-5 px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mln-gold"
      >
        <div className="relative z-10 shrink-0 pt-1">
          <motion.div
            animate={{
              boxShadow: isActive
                ? '0 0 30px rgba(212, 175, 55, 0.6)'
                : '0 0 0px rgba(212, 175, 55, 0)',
            }}
            className={`flex h-5 w-5 items-center justify-center rounded-full border-2 md:h-6 md:w-6 ${
              isActive
                ? 'border-mln-gold bg-mln-gold'
                : 'border-mln-gold/60 bg-mln-black group-hover:border-mln-gold group-hover:bg-mln-gold/30'
            }`}
          >
            <div className={`h-2 w-2 rounded-full ${isActive ? 'bg-mln-black' : 'bg-mln-gold/50'}`} />
          </motion.div>
        </div>

        <div className="min-w-0 flex-1 text-left">
          <span className="mb-1 block text-sm font-semibold text-mln-gold">{event.year}</span>
          <h3
            className={`font-display text-base font-semibold leading-snug transition-colors md:text-lg ${
              isActive ? 'text-mln-gold' : 'text-mln-white/80 group-hover:text-mln-gold'
            }`}
          >
            {event.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mln-white/50">{event.shortDescription}</p>
        </div>
      </motion.button>
    );
  }

  const labelBlock = (
    <div className="w-[200px] shrink-0 text-center md:w-[220px]">
      <span className="mb-1 block text-xs font-semibold text-mln-gold md:text-sm">{event.year}</span>
      <h3
        className={`font-display text-sm font-semibold leading-snug transition-colors md:text-[15px] ${
          isActive ? 'text-mln-gold' : 'text-mln-white/80 group-hover:text-mln-gold'
        }`}
      >
        {event.title}
      </h3>
    </div>
  );

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(event)}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      aria-label={`${event.year}: ${event.title}. Nhấp để xem chi tiết.`}
      aria-pressed={isActive}
      className="group relative flex flex-col items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mln-gold"
    >
      {labelAbove && <div className="mb-4">{labelBlock}</div>}

      <motion.div
        animate={{
          boxShadow: isActive
            ? '0 0 30px rgba(212, 175, 55, 0.6)'
            : '0 0 0px rgba(212, 175, 55, 0)',
        }}
        className={`relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 md:h-6 md:w-6 ${
          isActive
            ? 'border-mln-gold bg-mln-gold'
            : 'border-mln-gold/60 bg-mln-black group-hover:border-mln-gold group-hover:bg-mln-gold/30'
        }`}
      >
        <div className={`h-2 w-2 rounded-full ${isActive ? 'bg-mln-black' : 'bg-mln-gold/50'}`} />
      </motion.div>

      {!labelAbove && <div className="mt-4">{labelBlock}</div>}
    </motion.button>
  );
}
