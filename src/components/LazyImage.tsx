import { motion } from 'framer-motion';
import { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function LazyImage({ src, alt, className = '' }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-mln-dark ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-mln-dark to-mln-black" />
      )}
      {error ? (
        <div className="flex h-full min-h-[200px] items-center justify-center bg-gradient-to-br from-mln-dark via-mln-black to-mln-red/20">
          <span className="font-display text-4xl text-mln-gold/40">MLN</span>
        </div>
      ) : (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 1.05 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
