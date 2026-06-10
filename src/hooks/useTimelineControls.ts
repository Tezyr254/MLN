import { useCallback, useEffect, useRef, useState } from 'react';
import type { TimelineEvent } from '../types';
import { TIMELINE_END, TIMELINE_START } from '../data/events';

const MIN_SCALE = 0.5;
const MAX_SCALE = 2.5;
const DEFAULT_SCALE = 1;

interface UseTimelineControlsOptions {
  isVertical: boolean;
  trackLength: number;
  containerSize: number;
}

export function useTimelineControls({
  isVertical,
  trackLength,
  containerSize,
}: UseTimelineControlsOptions) {
  const [offset, setOffset] = useState(0);
  const [scale, setScale] = useState(DEFAULT_SCALE);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ pointer: 0, offset: 0 });

  const clampOffset = useCallback(
    (value: number, currentScale: number = scale) => {
      const scaledLength = trackLength * currentScale;
      const maxOffset = 0;
      const minOffset = Math.min(0, containerSize - scaledLength - 80);
      return Math.max(minOffset, Math.min(maxOffset, value));
    },
    [trackLength, containerSize, scale],
  );

  const zoomIn = useCallback(() => {
    setScale((prev) => {
      const next = Math.min(MAX_SCALE, prev + 0.25);
      setOffset((o) => clampOffset(o, next));
      return next;
    });
  }, [clampOffset]);

  const zoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(MIN_SCALE, prev - 0.25);
      setOffset((o) => clampOffset(o, next));
      return next;
    });
  }, [clampOffset]);

  const resetView = useCallback(() => {
    setScale(DEFAULT_SCALE);
    setOffset(0);
    setSelectedEvent(null);
  }, []);

  const getEventPosition = useCallback(
    (year: number) => {
      const ratio = (year - TIMELINE_START) / (TIMELINE_END - TIMELINE_START);
      return ratio * trackLength;
    },
    [trackLength],
  );

  const focusEvent = useCallback(
    (event: TimelineEvent) => {
      setSelectedEvent(event);
      const position = getEventPosition(event.year);
      const targetScale = Math.min(MAX_SCALE, Math.max(1.4, scale));
      const center = containerSize / 2;
      const newOffset = clampOffset(center - position * targetScale, targetScale);
      setScale(targetScale);
      setOffset(newOffset);
    },
    [getEventPosition, containerSize, clampOffset, scale],
  );

  const closeEvent = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  const handlePointerDown = useCallback(
    (clientPos: number) => {
      if (selectedEvent) return;
      setIsDragging(true);
      dragStart.current = { pointer: clientPos, offset };
    },
    [offset, selectedEvent],
  );

  const handlePointerMove = useCallback(
    (clientPos: number) => {
      if (!isDragging) return;
      const delta = clientPos - dragStart.current.pointer;
      setOffset(clampOffset(dragStart.current.offset + delta));
    },
    [isDragging, clampOffset],
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback(
    (delta: number) => {
      if (selectedEvent) return;
      setOffset((o) => clampOffset(o - delta));
    },
    [clampOffset, selectedEvent],
  );

  useEffect(() => {
    setOffset((o) => clampOffset(o));
  }, [containerSize, trackLength, clampOffset]);

  return {
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
    isVertical,
  };
}
