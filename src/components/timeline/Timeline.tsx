import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { timelineEvents, TIMELINE_END, TIMELINE_START } from '../../data/events';
import { useIsMobile } from '../../hooks/useMediaQuery';
import { useTimelineControls } from '../../hooks/useTimelineControls';
import type { TimelineEvent } from '../../types';
import { EventDetailPanel } from './EventDetailPanel';
import { TimelineControls } from './TimelineControls';
import { TimelineNode } from './TimelineNode';
import { TimelineProgress } from './TimelineProgress';

interface TimelineProps {
  onScrollToHero?: () => void;
}

const HORIZONTAL_TRACK_LENGTH = 3200;
const VERTICAL_NODE_SPACING = 280;

export function Timeline({ onScrollToHero }: TimelineProps) {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState(0);

  const trackLength = isMobile
    ? timelineEvents.length * VERTICAL_NODE_SPACING
    : HORIZONTAL_TRACK_LENGTH;

  const controls = useTimelineControls({
    isVertical: isMobile,
    trackLength,
    containerSize: containerSize || (typeof window !== 'undefined' ? window.innerWidth : 1200),
  });

  const {
    offset,
    scale,
    selectedEvent,
    isDragging,
    zoomIn,
    zoomOut,
    resetView,
    focusEvent,
    closeEvent,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleWheel,
    getEventPosition,
    MIN_SCALE,
    MAX_SCALE,
  } = controls;

  const parallaxX = useMotionValue(0);
  const parallaxBg = useTransform(parallaxX, (v) => v * 0.15);

  useEffect(() => {
    parallaxX.set(offset);
  }, [offset, parallaxX]);

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize(isMobile ? rect.height : rect.width);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [isMobile]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedEvent) {
        closeEvent();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent, closeEvent]);

  const progress = isMobile
    ? Math.abs(offset) / Math.max(1, trackLength * scale - containerSize)
  : Math.abs(offset) / Math.max(1, trackLength * scale - containerSize);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (isMobile) return;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      handlePointerDown(e.clientX);
    },
    [handlePointerDown, isMobile],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (isMobile) return;
      handlePointerMove(e.clientX);
    },
    [handlePointerMove, isMobile],
  );

  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      if (isMobile) return;
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      handleWheel(delta);
    },
    [handleWheel, isMobile],
  );

  const handleSelectEvent = (event: TimelineEvent) => {
    if (!isMobile) {
      focusEvent(event);
    } else {
      focusEvent(event);
    }
  };

  return (
    <section
      id="timeline"
      className="relative min-h-screen bg-mln-black"
      aria-label="Dòng thời gian lịch sử từ 1945 đến 1975"
    >
      <div className="pointer-events-none absolute inset-0 bg-map-texture opacity-50" aria-hidden="true" />
      <motion.div
        style={{ x: isMobile ? 0 : parallaxBg }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-mln-red/5 via-transparent to-mln-gold/5"
        aria-hidden="true"
      />

      <div className="relative px-6 pb-8 pt-24 md:px-12 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-mln-gold">
            Dòng Thời Gian Tương Tác
          </p>
          <h2 className="font-display text-3xl font-bold text-mln-white md:text-5xl">
            Ba Thập Kỷ Kháng Chiến
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-mln-white/60">
            {isMobile
              ? 'Cuộn qua các cột mốc lịch sử Việt Nam hiện đại. Chạm vào sự kiện để khám phá.'
              : 'Kéo, cuộn hoặc phóng to để khám phá. Nhấp vào sự kiện để đọc câu chuyện.'}
          </p>
        </motion.div>

        {!isMobile && (
          <TimelineControls
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
            onReset={resetView}
            onScrollToTop={onScrollToHero}
            scale={scale}
            minScale={MIN_SCALE}
            maxScale={MAX_SCALE}
          />
        )}

        <TimelineProgress progress={progress} isVertical={isMobile} />

        <div
          ref={containerRef}
          className={`relative overflow-hidden rounded-2xl border border-mln-gold/10 bg-mln-dark/50 backdrop-blur-sm ${
            isMobile ? 'h-auto max-h-none overflow-visible' : 'h-[60vh] min-h-[400px] cursor-grab active:cursor-grabbing'
          } ${selectedEvent && !isMobile ? 'brightness-50 transition-all duration-500' : ''}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onWheel={onWheel}
          role="region"
          aria-label={`Dòng thời gian từ ${TIMELINE_START} đến ${TIMELINE_END}`}
        >
          {isMobile ? (
            <div className="flex flex-col items-center gap-0 py-12">
              <div className="absolute left-1/2 top-12 bottom-12 w-px -translate-x-1/2 bg-gradient-to-b from-mln-gold/20 via-mln-gold/60 to-mln-gold/20" />
              {timelineEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="relative py-8"
                  style={{ minHeight: VERTICAL_NODE_SPACING }}
                >
                  <TimelineNode
                    event={event}
                    isActive={selectedEvent?.id === event.id}
                    isVertical
                    onSelect={handleSelectEvent}
                    index={index}
                  />
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              className="absolute left-0 top-1/2 h-full w-full origin-left"
              style={{
                x: offset,
                scale,
                y: '-50%',
              }}
              animate={isDragging ? undefined : { transition: { type: 'spring', stiffness: 300, damping: 35 } }}
            >
              <div
                className="absolute top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-mln-gold/60 to-transparent"
                style={{ width: trackLength, left: 0 }}
              />

              <div className="absolute top-1/2 flex -translate-y-1/2 items-center" style={{ width: trackLength }}>
                {timelineEvents.map((event, index) => {
                  const position = getEventPosition(event.year);
                  return (
                    <div
                      key={event.id}
                      className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: position }}
                    >
                      <TimelineNode
                        event={event}
                        isActive={selectedEvent?.id === event.id}
                        isVertical={false}
                        onSelect={handleSelectEvent}
                        index={index}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="absolute bottom-8 flex justify-between text-xs text-mln-white/30" style={{ width: trackLength }}>
                <span>{TIMELINE_START}</span>
                <span>{TIMELINE_END}</span>
              </div>
            </motion.div>
          )}
        </div>

        {!isMobile && (
          <p className="mt-4 text-center text-xs text-mln-white/30">
            Dùng con lăn chuột hoặc trackpad để cuộn · Kéo để di chuyển · Nhấp sự kiện để xem chi tiết
          </p>
        )}
      </div>

      <EventDetailPanel event={selectedEvent} onClose={closeEvent} />
    </section>
  );
}
