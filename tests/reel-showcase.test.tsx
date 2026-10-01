import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { ReelShowcase } from "@/components/reels/reel-showcase";
import { REELS } from "@/data/reels";
describe("ReelShowcase", () => {
  test("keeps embeds lightweight until user activates one", async () => {
    render(<ReelShowcase/>);
    expect(screen.queryByTitle(REELS[0].label)).not.toBeInTheDocument();
    expect(screen.getByRole("link",{name:"Open on Facebook"})).toHaveAttribute("href",REELS[0].url);
    await userEvent.click(screen.getByRole("button",{name:"Play selected reel"}));
    expect(screen.getByTitle(REELS[0].label)).toBeInTheDocument();
  });
  test("all six approved reels are selectable", () => {
    render(<ReelShowcase/>);
    expect(screen.getAllByRole("button").filter(b => /^0[1-6]$/.test(b.textContent || "")).length).toBe(6);
  });
});
