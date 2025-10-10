import React from 'react';
import localFont from 'next/font/local';

const dotoBold = localFont({
  src: '../../../public/Doto-Bold.ttf',
  weight: '700',
  variable: '--font-doto',
});

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

export default function SectionHeading({
  subHeading,
  heading,
}: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <p className="text-gray-500 font-mono text-xs mb-1">{subHeading}</p>
      <h2 className={`${dotoBold.className} text-3xl text-white`}>{heading}</h2>
    </div>
  );
}