import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  highlight,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 md:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 bg-[#0E335C]/80 text-[#38BDF8] border border-[#1E4D7A] shadow-sm">
          {badgeIcon && <span className="text-[#F07832]">{badgeIcon}</span>}
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3.5">
        {title}{' '}
        {highlight && (
          <span className="text-[#F07832] no-underline">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg leading-relaxed text-[#CBD5E1]">
          {subtitle}
        </p>
      )}

      <div
        className={cn(
          'flex items-center gap-1.5 mt-4',
          align === 'center' ? 'justify-center' : 'justify-start'
        )}
      >
        <span className="w-10 h-1 bg-[#F07832] rounded-full" />
        <span className="w-2.5 h-1 bg-[#38BDF8] rounded-full" />
      </div>
    </div>
  );
};
