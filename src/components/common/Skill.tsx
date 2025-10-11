import Link from 'next/link';
import React from 'react';

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <Link
      href={href ?? ''}
      target="_blank"
      className="inline-flex items-center text-sm bg-white/10 hover:bg-white/15 border border-white/20 py-1.5 px-3 rounded-md self-end text-white transition-colors duration-200"
    >
      <div className="size-4 flex-shrink-0">{children}</div>
      <p className="ml-1.5 text-xs font-medium">{name}</p>
    </Link>
  );
}