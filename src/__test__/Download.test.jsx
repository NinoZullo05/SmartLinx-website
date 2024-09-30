import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Download from '../components/Download'; // Adjust the import path as needed

// Mock the AOS library
jest.mock('aos', () => ({
  init: jest.fn(),
}));

// Use the actual downloadText from StaticText
const downloadText = {
  heading: 'Download the official application of SmartLinx',
  description: 'Click here to download the official APK:',
  buttonText: 'Download APK',
  fileLink: '/APKs/SmartLinx v1.2.3.apk',
};

// Mock the StaticText module
jest.mock('../static/StaticText', () => ({
  downloadText: downloadText
}));

// Mock the downloadImage
jest.mock('../images/Download.webp', () => 'test-image.webp');

// Mock the LazyImage component
jest.mock('../components/LazyImage', () => {
  return function DummyLazyImage(props) {
    return <img {...props} />;
  }
});

describe('Download Component', () => {
  beforeEach(() => {
    // Mock window.location.href
    delete window.location;
    window.location = { href: '' };
  });

  test('renders without crashing', () => {
    render(<Download />);
    expect(screen.getByText(/Download the official application of/)).toBeInTheDocument();
  });

  test('displays correct text content', () => {
    render(<Download />);
    expect(screen.getByText('Smart')).toBeInTheDocument();
    expect(screen.getByText('Linx')).toBeInTheDocument();
    expect(screen.getByText('Click here to download the official APK:')).toBeInTheDocument();
    expect(screen.getByText('Download APK')).toBeInTheDocument();
  });

  test('renders LazyImage component', () => {
    render(<Download />);
    const image = screen.getByAltText('Download');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.webp');
  });

  test('handles download button click', () => {
    render(<Download />);
    const downloadButton = screen.getByText('Download APK');
    fireEvent.click(downloadButton);
    expect(window.location.href).toBe('/APKs/SmartLinx v1.2.3.apk');
  });

  test('applies AOS attributes', () => {
    render(<Download />);
    expect(screen.getByText('Click here to download the official APK:')).toHaveAttribute('data-aos', 'zoom-in-up');
    expect(screen.getByText('Download APK')).toHaveAttribute('data-aos', 'zoom-out-up');
    expect(screen.getByAltText('Download')).toHaveAttribute('data-aos', 'zoom-in-left');
  });
});