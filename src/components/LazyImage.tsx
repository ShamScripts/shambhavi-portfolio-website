import { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  imgClassName?: string;
}

/**
 * Image that shows a shimmer skeleton while loading,
 * then fades in with a blur-up effect once loaded.
 */
export function LazyImage({ src, alt, className = "", style, imgClassName = "" }: LazyImageProps) {
  const [loaded,  setLoaded]  = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Shimmer skeleton — visible until image loads */}
      {!loaded && !errored && (
        <div className="img-skeleton absolute inset-0 rounded-[inherit]" aria-hidden />
      )}

      {!errored ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-full transition-all duration-500 ${imgClassName} ${
            loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-[6px] scale-[1.03]"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center rounded-[inherit] bg-[rgba(17,19,26,0.8)] text-[10px] text-[var(--muted)] opacity-50">
          {alt}
        </div>
      )}
    </div>
  );
}
