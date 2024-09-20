import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Header({
  size = 'h3',
  children,
  className,
  ...rest
}: {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  className?: string;
  children: ReactNode;
}) {
  const sizeMap = {
    h1: 'text-5xl',
    h2: 'text-4xl',
    h3: 'text-3xl',
    h4: 'text-2xl',
    h5: 'text-xl',
  };

  return (
    <div className={twMerge('font-bold', sizeMap[size], className)} {...rest}>
      {children}
    </div>
  );
}
