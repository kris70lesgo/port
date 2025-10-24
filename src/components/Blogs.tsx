'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './common/Container';

// Blog data - replace with your actual blog posts
const blogs = [
  {
    title: 'How to Set Up VS Code for DSA and CP (C++ Users)',
    slug: '/blog/vscode-dsa-cpp-setup',
    image: '/blog/vscode-setup.png', // Add your blog preview images here
  },
  {
    title: 'C++ STL Complete Guide for Competitive Programming',
    slug: '/blog/cpp-stl-guide',
    image: '/blog/cpp-stl.png',
  },
  {
    title: 'How to Build a Modern Blog Website with Next.js and MDX',
    slug: '/blog/nextjs-mdx.png',
    image: '/blog/nextjs-mdx.png',
  },
];

export default function Blogs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Container className="mt-0">
      <div className="mb-6">
        <p className="text-gray-500 text-sm">
          Here are some <span className="text-white">blogs</span> I&apos;ve written
        </p>
      </div>

      <div className="space-y-3">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={blog.slug}
            className="group relative block w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            {/* Hover Preview Image */}
            <div
              className="absolute z-50 pointer-events-none transition-opacity duration-300"
              style={{
                left: `${mousePosition.x + 20}px`,
                top: `${mousePosition.y - 100}px`,
                opacity: hoveredIndex === index ? 1 : 0,
              }}
            >
              <div className="relative w-64 h-36 rounded-lg overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-normal text-white group-hover:text-gray-300 transition-colors">
                {blog.title}
              </h3>
              <svg
                className="size-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
