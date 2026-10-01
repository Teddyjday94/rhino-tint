import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import HomeBusinessPage from "@/app/home-business/page";
test("property page includes one H1 and residential/commercial content", () => {
  const { container } = render(<HomeBusinessPage/>);
  expect(container.querySelectorAll("h1")).toHaveLength(1);
  expect(screen.getByText("Property film")).toBeInTheDocument();
  expect(screen.getByText("Commercial glass")).toBeInTheDocument();
  expect(screen.getByText("Property estimate")).toBeInTheDocument();
});
