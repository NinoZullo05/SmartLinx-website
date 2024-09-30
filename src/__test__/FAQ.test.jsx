import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import FAQ from "../components/FAQ";
import { faqText } from "../static/StaticText";

// Mock AOS
jest.mock('aos', () => ({
  init: jest.fn(),
}));

describe("FAQ component", () => {
  beforeEach(() => {
    render(<FAQ />);
  });

  it("renders the heading, subheading, and description correctly", () => {
    // Verify that the heading is displayed correctly
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveTextContent(faqText.heading);

    // Verify that the subheading is displayed correctly
    const subheadingElement = screen.getByRole("heading", { level: 2 });
    expect(subheadingElement).toHaveTextContent(faqText.subheading);

    // Verify that the description is displayed correctly
    const descriptionElement = screen.getByText(faqText.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders the search input with placeholder correctly", () => {
    // Verify that the input field is present
    const inputElement = screen.getByPlaceholderText(faqText.searchPlaceholder);
    expect(inputElement).toBeInTheDocument();
  });



});