'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function useHeroIntro() {
  const hasRun = useRef(false);

  useEffect(() => {
    // Skip if already played in this session
    if (hasRun.current) return;
    if (typeof window === 'undefined') return;

    hasRun.current = true;

    const heroElement = document.querySelector('[data-intro-hero]');
    const contentElements = document.querySelectorAll('[data-intro-content]');
    
    // Select all other sections to hide during intro
    const navbar = document.querySelector('nav');
    const pageContent = document.querySelector('[data-page-content]');
    
    if (!heroElement || contentElements.length === 0) return;

    // Force show hero first so we can measure its position
    const style = document.createElement('style');
    style.id = 'intro-override';
    style.textContent = `
      [data-intro-hero] { display: flex !important; opacity: 0; }
      [data-intro-content] { display: block !important; opacity: 0; }
      nav { display: block !important; opacity: 0; }
      [data-page-content] { display: block !important; opacity: 0; }
    `;
    document.head.appendChild(style);

    // Force layout recalculation
    (heroElement as HTMLElement).offsetHeight;

    // Get the hero's natural position in the layout
    const heroRect = heroElement.getBoundingClientRect();
    
    // Calculate center of viewport
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;
    
    // Calculate hero's center
    const heroCenterX = heroRect.left + heroRect.width / 2;
    const heroCenterY = heroRect.top + heroRect.height / 2;
    
    // Calculate offset from natural position to center
    const offsetX = viewportCenterX - heroCenterX;
    const offsetY = viewportCenterY - heroCenterY;

    // Set initial states - hero starts at center, then opacity 0
    gsap.set(heroElement, {
      x: offsetX,
      y: offsetY,
      scale: 0.85,
      opacity: 0,
    });

    gsap.set(contentElements, {
      opacity: 0,
      y: 20,
    });

    // Hide navbar and other sections initially
    if (navbar) {
      gsap.set(navbar, { opacity: 0, display: 'block' });
    }
    if (pageContent) {
      gsap.set(pageContent, { opacity: 0, display: 'block' });
    }

    // Create timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Ensure everything stays visible after animation
        const finalStyle = document.createElement('style');
        finalStyle.textContent = `
          nav, [data-page-content], [data-intro-hero], [data-intro-content] {
            opacity: 1 !important;
            pointer-events: auto !important;
          }
        `;
        document.head.appendChild(finalStyle);
      }
    });

    // Step 1: Fade in and scale up (while still centered)
    tl.to(heroElement, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.4, // Hold for a moment
    });

    // Step 2: Move from center to natural position
    tl.to(heroElement, {
      x: 0,
      y: 0,
      duration: 1.1,
      ease: 'power3.inOut',
    }, '+=0.2'); // Small pause after fade in

    // Step 3: Fade + slide in content sections with stagger
    tl.to(
      contentElements,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      },
      '-=0.3' // Start slightly before move completes
    );

    // Step 4: Fade in navbar and other sections
    if (navbar) {
      tl.to(navbar, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.2');
    }
    
    if (pageContent) {
      tl.to(pageContent, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3');
    }

  }, []);
}
