import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { QuoteForm } from "@/components/quote/quote-form";
describe("QuoteForm", () => {
  test("switches between vehicle and property fields without stale requirements", async () => {
    render(<QuoteForm/>);
    expect(screen.getByLabelText("Year")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Home"));
    expect(screen.queryByLabelText("Year")).not.toBeInTheDocument();
    expect(screen.getByLabelText("Property type")).toBeInTheDocument();
  });
  test("shows accessible validation and accepts a valid property mockup submission", async () => {
    render(<QuoteForm initialService="residential"/>);
    await userEvent.click(screen.getByRole("button",{name:"Prepare Quote Request"}));
    expect(screen.getByText("Enter your name.")).toHaveAttribute("role","alert");
    await userEvent.type(screen.getByLabelText("Name"),"Taylor");
    await userEvent.type(screen.getByLabelText("Phone"),"225-555-0199");
    await userEvent.type(screen.getByLabelText("Email"),"taylor@example.com");
    await userEvent.selectOptions(screen.getByLabelText("Property type"),"Home");
    await userEvent.type(screen.getByLabelText("Approx. windows"),"8");
    await userEvent.selectOptions(screen.getByLabelText("Main goal"),"Heat control");
    await userEvent.click(screen.getByRole("button",{name:"Prepare Quote Request"}));
    expect(screen.getByRole("status")).toHaveTextContent("Quote request ready");
  });
});
