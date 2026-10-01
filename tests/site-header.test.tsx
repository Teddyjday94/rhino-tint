import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SiteHeader } from "@/components/brand/site-header";
import { Reveal } from "@/components/motion/reveal";
import { BUSINESS } from "@/data/business";
describe("site shell", () => {
  test("navigation exposes all four routes and call action", () => {
    render(<SiteHeader/>);
    for (const name of ["Home","Automotive","Home & Business","Gallery & Contact"]) expect(screen.getAllByRole("link",{name}).length).toBeGreaterThan(0);
    expect(screen.getByRole("link",{name:"Call"})).toHaveAttribute("href",BUSINESS.phoneHref);
  });
  test("reveal content stays rendered when reduced motion is requested", () => {
    vi.stubGlobal("matchMedia", () => ({ matches:true, media:"(prefers-reduced-motion: reduce)", addEventListener(){},removeEventListener(){},addListener(){},removeListener(){},dispatchEvent(){return false},onchange:null }));
    render(<Reveal><p>Always visible</p></Reveal>);
    expect(screen.getByText("Always visible")).toBeVisible();
    vi.unstubAllGlobals();
  });
});
