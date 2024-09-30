import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';  
import ErrorMessage from "../components/ErrorMessage";
import { errorMessageText } from "../static/StaticText";

describe("ErrorMessage component", () => {
    it("renders the heading, description, and button correctly", () => {
        render(<ErrorMessage />);

        const headingElement = screen.getByRole("heading", { level: 1 });
        expect(headingElement).toHaveTextContent(errorMessageText.heading);

        const descriptionElement = screen.getByText(errorMessageText.description);
        expect(descriptionElement).toBeInTheDocument();

        const buttonElement = screen.getByRole("link", { name: errorMessageText.buttonText });
        expect(buttonElement).toBeInTheDocument();

        expect(buttonElement).toHaveAttribute("href", errorMessageText.buttonLink);
    });

    it("applies correct styles", () => {
        render(<ErrorMessage />);

        const buttonElement = screen.getByRole("link", { name: errorMessageText.buttonText });
        expect(buttonElement).toHaveClass("rounded bg-button_light dark:bg-button_dark hover:bg-[#998EFE]/60 px-4 py-2 font-semibold text-white");
    });
});
