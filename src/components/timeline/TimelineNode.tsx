import { motion } from 'framer-motion';
import type { TimelineEvent } from '../../types';
import { LazyImage } from '../LazyImage';

interface TimelineNodeProps {
  event: TimelineEvent;
  isActive: boolean;
  isVertical: boolean;
  onSelect: (event: TimelineEvent) => void;
  index: number;
}

function EventCard({ event, isActive }: { event: TimelineEvent; isActive: boolean }) {
  return (
    <div
      className={`w-[260px] overflow-hidden rounded-xl border bg-mln-black/90 shadow-xl backdrop-blur-md transition-all md:w-[280px] ${
        isActive
          ? 'border-mln-gold/50 shadow-mln-gold/10'
          : 'border-mln-gold/15 group-hover:border-mln-gold/35'
      }`}
    >
      <LazyImage
        src={event.image}
        alt={event.imageAlt}
        className="h-28 w-full md:h-32"
      />
      <div className="p-3 md:p-3.5">
        <span className="text-xs font-bold tracking-wide text-mln-gold">{event.year}</span>
        <h3
          className={`mt-1 font-display text-sm font-semibold leading-snug md:text-[15px] ${
            isActive ? 'text-mln-gold' : 'text-mln-white/90'
          }`}
        >
          {event.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-mln-white/55 md:text-[13px]">
          {event.timelineDetail}
        </p>
      </div>
    </div>
  );
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
        className="group relative w-full max-w-xl pl-12 pr-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mln-gold md:pl-16"
      >
        <div className="absolute left-4 top-8 z-10 -translate-x-1/2 md:left-8">
          <motion.div
            animate={{
              boxShadow: isActive
                ? '0 0 30px rgba(212, 175, 55, 0.6)'
                : '0 0 0px rgba(212, 175, 55, 0)',
            }}
            className={`flex h-5 w-5 items-center justify-center rounded-full border-2 md:h-6 md:w-6 ${
              isActive
                ? 'border-mln-gold bg-mln-gold'
                : 'border-mln-gold/60 bg-mln-black group-hover:border-mln-gold'
            }`}
          >
            <div className={`h-2 w-2 rounded-full ${isActive ? 'bg-mln-black' : 'bg-mln-gold/50'}`} />
          </motion.div>
        </div>

        <div
          className={`overflow-hidden rounded-xl border bg-mln-black/80 shadow-lg transition-colors ${
            isActive ? 'border-mln-gold/40' : 'border-mln-gold/10 group-hover:border-mln-gold/25'
          }`}
        >
          <LazyImage src={event.image} alt={event.imageAlt} className="h-40 w-full" />
          <div className="p-4">
            <span className="text-sm font-bold text-mln-gold">{event.year}</span>
            <h3
              className={`mt-1 font-display text-lg font-semibold ${
                isActive ? 'text-mln-gold' : 'text-mln-white'
              }`}
            >
              {event.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mln-white/60">{event.timelineDetail}</p>
          </div>
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(event)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.02 }}
      aria-label={`${event.year}: ${event.title}. Nhấp để xem chi tiết.`}
      aria-pressed={isActive}
      className="group relative flex flex-col items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mln-gold"
    >
      {labelAbove && <div className="mb-2"><EventCard event={event} isActive={isActive} /></div>}

      <motion.div
        animate={{
          boxShadow: isActive
            ? '0 0 30px rgba(212, 175, 55, 0.6)'
            : '0 0 0px rgba(212, 175, 55, 0)',
        }}
        className={`relative z-10 my-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
          isActive
            ? 'border-mln-gold bg-mln-gold'
            : 'border-mln-gold/60 bg-mln-black group-hover:border-mln-gold group-hover:bg-mln-gold/20'
        }`}
      >
        <div className={`h-2.5 w-2.5 rounded-full ${isActive ? 'bg-mln-black' : 'bg-mln-gold/50'}`} />
      </motion.div>

      {!labelAbove && <div className="mt-2"><EventCard event={event} isActive={isActive} /></div>}
    </motion.button>
  );
}
