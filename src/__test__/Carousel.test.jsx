import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from '../components/Carousel'; 

// Mock the images and carouselText
jest.mock('../images/test1.webp', () => 'test1.webp');
jest.mock('../images/test2.webp', () => 'test2.webp');
jest.mock('../images/test3.webp', () => 'test3.webp');
jest.mock('../static/StaticText', () => ({
  carouselText: [
    { heading: 'Heading 1', description: 'Description 1' },
    { heading: 'Heading 2', description: 'Description 2' },
    { heading: 'Heading 3', description: 'Description 3' },
  ],
}));

// Mock react-lazyload
jest.mock('react-lazyload', () => ({ children }) => children);

// Mock react-icons
jest.mock('react-icons/ai', () => ({
  AiOutlineRight: () => <span>Next</span>,
  AiOutlineLeft: () => <span>Previous</span>,
}));

describe('Carousel Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders without crashing', () => {
    render(<Carousel />);
    expect(screen.getByAltText(/Slide/)).toBeInTheDocument();
  });

  test('displays correct initial content', () => {
    render(<Carousel />);
    expect(screen.getByText('Heading 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
  });

  test('changes slide when next button is clicked', () => {
    render(<Carousel />);
    const nextButton = screen.getByText('Next');
    
    act(() => {
      nextButton.click();
      jest.advanceTimersByTime(300);
    });

    expect(screen.getByText('Heading 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  test('changes slide when previous button is clicked', () => {
    render(<Carousel />);
    const prevButton = screen.getByText('Previous');
    
    act(() => {
      prevButton.click();
      jest.advanceTimersByTime(300);
    });

    expect(screen.getByText('Heading 3')).toBeInTheDocument();
    expect(screen.getByText('Description 3')).toBeInTheDocument();
  });

  test('auto-slides after 8 seconds', () => {
    render(<Carousel />);
    
    act(() => {
      jest.advanceTimersByTime(8300); // 8000ms for auto-slide + 300ms for fade effect
    });

    expect(screen.getByText('Heading 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  test('uses lazy loading for images', () => {
    render(<Carousel />);
    const image = screen.getByAltText(/Slide/);
    expect(image).toHaveAttribute('loading', 'lazy');
  });
});