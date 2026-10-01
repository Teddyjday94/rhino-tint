import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import HomePage from "@/app/page";
test("home page has one clear H1 and core sections", () => {
  const { container } = render(<HomePage/>);
  expect(container.querySelectorAll("h1")).toHaveLength(1);
  expect(screen.getByRole("heading",{level:1})).toHaveTextContent("Tint built");
  expect(screen.getByText("Rhino in motion")).toBeInTheDocument();
  expect(screen.getByText("Start a quote")).toBeInTheDocument();
});
