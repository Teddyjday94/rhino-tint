"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => gsap.fromTo(el,{ y: 28, opacity: 0 },{ y: 0, opacity: 1, duration: .8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }),el);
    return () => ctx.revert();
  },[]);
  return <div ref={ref} className={className}>{children}</div>;
}
