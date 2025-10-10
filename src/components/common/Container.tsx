import React from 'react';

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-2xl animate-fade-in-blur ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}