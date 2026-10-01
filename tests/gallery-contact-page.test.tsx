import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import GalleryContactPage from "@/app/gallery-contact/page";
test("gallery contact page has one H1 and conversion content", () => {
  const { container } = render(<GalleryContactPage/>);
  expect(container.querySelectorAll("h1")).toHaveLength(1);
  expect(screen.getByText("Project gallery")).toBeInTheDocument();
  expect(screen.getByText("Visit Rhino")).toBeInTheDocument();
});
