import React from "react";
import { render, screen } from "@testing-library/react";
import Feature from "../components/Feature";
import { featureText } from "../static/StaticText"; 
import '@testing-library/jest-dom';
import AOS from 'aos';

jest.mock('react-scroll', () => ({
  Link: ({ children }) => children,
}));

jest.mock('aos', () => ({
  init: jest.fn(),
}));

jest.mock("../images/Feature1.webp", () => "Feature1.webp");
jest.mock("../images/Feature2.webp", () => "Feature2.webp");
jest.mock("../images/Feature3.webp", () => "Feature3.webp");

describe("Feature Component", () => {
  beforeEach(() => {
    AOS.init.mockClear();
  });

  test("renders heading and subheading correctly", () => {
    render(<Feature />);
    
    const headingElement = screen.getByRole("heading", { name: featureText.heading });
    const subheadingElement = screen.getByText(featureText.subheading);
    
    expect(headingElement).toBeInTheDocument();
    expect(subheadingElement).toBeInTheDocument();
  });

  test("renders all features with correct titles and images", () => {
    render(<Feature />);
    
    featureText.features.forEach((feature) => {
      const featureTitle = screen.getByText(feature.title);
      const featureImage = screen.getByAltText(feature.title);
      
      expect(featureTitle).toBeInTheDocument();
      expect(featureImage).toHaveAttribute('src', expect.stringContaining(feature.imageSrc));
    });
  });

  test("AOS is initialized on component mount", () => {
    render(<Feature />);
    
    expect(AOS.init).toHaveBeenCalled();
  });
});
