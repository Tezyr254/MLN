import { motion } from 'framer-motion';
import { TIMELINE_END, TIMELINE_START } from '../../data/events';

interface TimelineProgressProps {
  progress: number;
  isVertical?: boolean;
}

export function TimelineProgress({ progress, isVertical = false }: TimelineProgressProps) {
  const clampedProgress = Math.max(0, Math.min(1, progress));

  return (
    <div
      className={`fixed z-40 ${isVertical ? 'left-4 top-1/2 -translate-y-1/2' : 'bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md px-6'}`}
      role="progressbar"
      aria-valuenow={Math.round(clampedProgress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Tiến độ dòng thời gian từ ${TIMELINE_START} đến ${TIMELINE_END}`}
    >
      {isVertical ? (
        <div className="flex h-48 flex-col items-center gap-2">
          <span className="text-xs text-mln-gold/70">{TIMELINE_END}</span>
          <div className="relative h-full w-1 overflow-hidden rounded-full bg-mln-dark">
            <motion.div
              className="absolute bottom-0 w-full rounded-full bg-gradient-to-t from-mln-red to-mln-gold"
              style={{ height: `${clampedProgress * 100}%` }}
              layout
            />
          </div>
          <span className="text-xs text-mln-gold/70">{TIMELINE_START}</span>
        </div>
      ) : (
        <div className="rounded-full border border-mln-gold/20 bg-mln-black/80 px-4 py-3 backdrop-blur-md">
          <div className="mb-2 flex justify-between text-xs text-mln-white/50">
            <span>{TIMELINE_START}</span>
            <span>{TIMELINE_END}</span>
          </div>
          <div className="relative h-1 overflow-hidden rounded-full bg-mln-dark">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-mln-gold via-mln-red to-mln-gold"
              style={{ width: `${clampedProgress * 100}%` }}
              layout
            />
          </div>
        </div>
      )}
    </div>
  );
}
