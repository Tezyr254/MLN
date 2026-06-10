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
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(event)}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      aria-label={`${event.year}: ${event.title}. Nhấp để xem chi tiết.`}
      aria-pressed={isActive}
      className={`group relative flex shrink-0 flex-col items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mln-gold ${
        isVertical ? 'flex-row gap-6 w-full max-w-lg' : ''
      }`}
    >
      <div className={`relative ${isVertical ? 'order-1' : ''}`}>
        <motion.div
          animate={{
            boxShadow: isActive
              ? '0 0 30px rgba(212, 175, 55, 0.6)'
              : '0 0 0px rgba(212, 175, 55, 0)',
          }}
          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors md:h-6 md:w-6 ${
            isActive
              ? 'border-mln-gold bg-mln-gold'
              : 'border-mln-gold/60 bg-mln-black group-hover:border-mln-gold group-hover:bg-mln-gold/30'
          }`}
        >
          <div className={`h-2 w-2 rounded-full ${isActive ? 'bg-mln-black' : 'bg-mln-gold/50'}`} />
        </motion.div>
        {!isVertical && (
          <motion.div
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-mln-gold/80 md:text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {event.year}
          </motion.div>
        )}
      </div>

      <div
        className={`${isVertical ? 'order-2 flex-1 text-left' : 'absolute top-10 mt-4 w-48 text-center md:top-12 md:w-56'}`}
      >
        {isVertical && (
          <span className="mb-1 block text-sm font-semibold text-mln-gold">{event.year}</span>
        )}
        <h3
          className={`font-display text-sm font-semibold leading-tight transition-colors md:text-base ${
            isActive ? 'text-mln-gold' : 'text-mln-white/80 group-hover:text-mln-gold'
          }`}
        >
          {event.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-mln-white/50 line-clamp-2 md:text-sm">
          {event.shortDescription}
        </p>
      </div>
    </motion.button>
  );
}
