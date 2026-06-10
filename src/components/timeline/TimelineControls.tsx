import { motion } from 'framer-motion';
import { Home, Minus, Plus, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';

interface TimelineControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onScrollToTop?: () => void;
  scale: number;
  minScale: number;
  maxScale: number;
}

export function TimelineControls({
  onZoomIn,
  onZoomOut,
  onReset,
  onScrollToTop,
  scale,
  minScale,
  maxScale,
}: TimelineControlsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="absolute right-4 top-4 z-30 flex flex-col gap-2 md:right-8 md:top-8"
      role="toolbar"
      aria-label="Điều khiển dòng thời gian"
    >
      <Button
        variant="secondary"
        size="sm"
        onClick={onZoomIn}
        disabled={scale >= maxScale}
        aria-label="Phóng to dòng thời gian"
        className="!rounded-xl !p-3"
      >
        <Plus className="h-4 w-4" />
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={onZoomOut}
        disabled={scale <= minScale}
        aria-label="Thu nhỏ dòng thời gian"
        className="!rounded-xl !p-3"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={onReset}
        aria-label="Đặt lại chế độ xem"
        className="!rounded-xl !p-3"
      >
        <RotateCcw className="h-4 w-4" />
      </Button>
      {onScrollToTop && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onScrollToTop}
          aria-label="Về trang chủ"
          className="!rounded-xl !p-3"
        >
          <Home className="h-4 w-4" />
        </Button>
      )}
      <span className="text-center text-xs text-mln-white/40" aria-live="polite">
        {Math.round(scale * 100)}%
      </span>
    </motion.div>
  );
}
