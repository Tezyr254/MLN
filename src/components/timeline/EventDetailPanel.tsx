import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Globe2, ScrollText, Star, X } from 'lucide-react';
import type { TimelineEvent } from '../../types';
import { LazyImage } from '../LazyImage';

interface EventDetailPanelProps {
  event: TimelineEvent | null;
  onClose: () => void;
}

export function EventDetailPanel({ event, onClose }: EventDetailPanelProps) {
  return (
    <AnimatePresence>
      {event && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-detail-title"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-4 z-50 mx-auto flex max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-2xl border border-mln-gold/20 bg-mln-dark shadow-2xl shadow-black/50 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-mln-black/60 p-2 text-mln-white/70 backdrop-blur-sm transition-colors hover:bg-mln-black hover:text-mln-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-mln-gold"
              aria-label="Đóng chi tiết sự kiện"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-y-auto scrollbar-hide">
              <div className="relative h-56 md:h-72 lg:h-80">
                <LazyImage
                  src={event.image}
                  alt={event.imageAlt}
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mln-dark via-mln-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="mb-2 flex items-center gap-2 text-mln-gold">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <span className="text-sm font-medium tracking-widest">{event.year}</span>
                  </div>
                  <h2
                    id="event-detail-title"
                    className="font-display text-2xl font-bold text-mln-white md:text-4xl"
                  >
                    {event.title}
                  </h2>
                </div>
              </div>

              <div className="space-y-8 p-6 md:p-8">
                <section>
                  <div className="mb-3 flex items-center gap-2 text-mln-gold">
                    <ScrollText className="h-5 w-5" aria-hidden="true" />
                    <h3 className="text-sm font-semibold uppercase tracking-widest">
                      Tổng Quan Lịch Sử
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-mln-white/80 md:text-lg">
                    {event.overview}
                  </p>
                </section>

                <section>
                  <div className="mb-3 flex items-center gap-2 text-mln-gold">
                    <Star className="h-5 w-5" aria-hidden="true" />
                    <h3 className="text-sm font-semibold uppercase tracking-widest">
                      Ý Nghĩa Lịch Sử
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-mln-white/70">
                    {event.significance}
                  </p>
                </section>

                <section>
                  <div className="mb-3 flex items-center gap-2 text-mln-gold">
                    <Globe2 className="h-5 w-5" aria-hidden="true" />
                    <h3 className="text-sm font-semibold uppercase tracking-widest">Tác Động</h3>
                  </div>
                  <p className="text-base leading-relaxed text-mln-white/70">{event.impact}</p>
                </section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
