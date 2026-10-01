"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function ParallaxMedia({ children, strength = 6 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => gsap.to(el,{ yPercent: strength, ease:"none", scrollTrigger:{ trigger:el, scrub:true, start:"top bottom", end:"bottom top" } }),el);
    return () => ctx.revert();
  },[strength]);
  return <div ref={ref}>{children}</div>;
}
