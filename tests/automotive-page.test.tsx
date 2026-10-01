import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import AutomotivePage from "@/app/automotive/page";
test("automotive page includes one H1, benefits, process, and vehicle quote", () => {
  const { container } = render(<AutomotivePage/>);
  expect(container.querySelectorAll("h1")).toHaveLength(1);
  expect(screen.getByText("Why tint")).toBeInTheDocument();
  expect(screen.getByText("The process")).toBeInTheDocument();
  expect(screen.getByText("Vehicle quote")).toBeInTheDocument();
});
