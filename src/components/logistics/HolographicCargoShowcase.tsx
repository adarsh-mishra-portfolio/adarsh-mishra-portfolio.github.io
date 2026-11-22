import React, { useState, useEffect } from 'react';
import { getAssetUrl } from '../../utils/asset';

interface Slide {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  hudCode: string;
}

const CARGO_SLIDES: Slide[] = [
  {
    image: getAssetUrl('assets/images/cargo-ship.jpg'),
    badge: 'PORT & VESSEL OPERATIONS',
    title: 'International Logistics Hub',
    subtitle: 'Ocean Freight • 20ft & 40ft FCL/LCL Container Transit',
    hudCode: 'JNPT / MUNDRA PORT • LAT 18.9499° N, LONG 72.9525° E',
  },
  {
    image: getAssetUrl('assets/images/cargo-plane.jpg'),
    badge: 'AIR CARGO EXPEDITION',
    title: 'Air Freight Cargo Terminal',
    subtitle: 'Air Waybill (AWB) • Time-Critical Customs Clearance',
    hudCode: 'IATA CARGO HUB • PRIORITY FLIGHT ROUTING',
  },
  {
    image: getAssetUrl('assets/images/freight-train.jpg'),
    badge: 'INLAND DRY PORT LOGISTICS',
    title: 'Intermodal Rail Freight',
    subtitle: 'Inland Container Depot (ICD) • Rail Wagon Dispatch',
    hudCode: 'HINTERLAND CORRIDOR • DRY PORT TO SEAPORT',
  },
  {
    image: getAssetUrl('assets/images/port-terminal.jpg'),
    badge: 'TERMINAL CRANE OPERATIONS',
    title: 'Deepwater Container Port',
    subtitle: 'Gantry Quay Cranes • Container Yard & CFS Stuffing',
    hudCode: 'BERTH ALLOCATION • DEMURRAGE MITIGATION',
  },
  {
    image: getAssetUrl('assets/images/logistics-warehouse.jpg'),
    badge: 'SUPPLY CHAIN GOVERNANCE',
    title: 'Customs Bonded Warehouse',
    subtitle: 'Cargo Consolidation • DGFT & Statutory Compliance',
    hudCode: 'IDPMS BANK RECONCILIATION • 100% REGULATORY AUDIT',
  },
];

export const HolographicCargoShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CARGO_SLIDES.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative h-64 sm:h-72 overflow-hidden bg-[#071C33] group cursor-pointer"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images Crossfade */}
      {CARGO_SLIDES.map((slide, idx) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-out ${
              idx === currentIndex ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071C33] via-[#071C33]/45 to-transparent" />
        </div>
      ))}

      {/* Holographic Radar Grid & Scanline Effect */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-30">
        {/* Subtle holographic cyan scanline sweep */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent animate-scanline" />
        {/* Subtle grid lines */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* Holographic HUD Corner Markers */}
      <div className="absolute top-2.5 left-3 z-30 pointer-events-none text-[10px] font-mono text-[#38BDF8]/70 flex items-center gap-1.5">
        <span className="inline-block w-2 h-2 border-t-2 border-l-2 border-[#38BDF8]" />
        <span className="tracking-widest uppercase text-[9px]">CARGO-HUD // LIVE</span>
      </div>
      <div className="absolute top-2.5 right-3 z-30 pointer-events-none text-[10px] font-mono text-[#38BDF8]/70 flex items-center gap-1.5">
        <span className="inline-block w-2 h-2 border-t-2 border-r-2 border-[#38BDF8]" />
      </div>

      {/* Floating Status Pill (Top Right) */}
      <div className="absolute top-3.5 right-3.5 z-30 bg-[#0B2545]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#1E4D7A] flex items-center gap-2 text-[11px] font-mono text-[#38BDF8] shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
        <span className="font-semibold text-white tracking-wide">
          {CARGO_SLIDES[currentIndex].badge}
        </span>
      </div>

      {/* Holographic Content Box (Bottom) */}
      <div className="absolute bottom-3 left-4 right-4 z-30 flex flex-col justify-end">
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#F07832] text-white shadow-sm">
            Cross-Border Trade
          </span>
          <span className="text-[10px] font-mono text-[#38BDF8] hidden sm:inline bg-[#071C33]/70 px-2 py-0.5 rounded border border-[#1E4D7A]">
            {CARGO_SLIDES[currentIndex].hudCode}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md">
          {CARGO_SLIDES[currentIndex].title}
        </h3>
        <p className="text-xs text-[#CBD5E1] line-clamp-1 drop-shadow-sm">
          {CARGO_SLIDES[currentIndex].subtitle}
        </p>

        {/* Bullet Points Navigation (NO Numbers, Strictly Bullets as requested) */}
        <div className="flex items-center gap-2 mt-2.5">
          {CARGO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              aria-label={`Go to cargo slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex
                  ? 'w-6 bg-[#F07832] shadow-sm shadow-[#F07832]/50'
                  : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
