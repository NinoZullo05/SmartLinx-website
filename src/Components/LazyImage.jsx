import React from "react";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";

/**
 * A LazyImage component that lazy loads images for optimized performance.
 * 
 * This component uses the `react-lazyload` library to defer loading of images 
 * until they are near the viewport, improving page load speed and performance.
 * 
 * @component
 * @param {string} src - The URL of the image to be displayed.
 * @param {string} alt - Alternative text for the image for accessibility.
 * @param {number|string} [width] - Optional width of the image.
 * @param {number|string} [height] - Optional height of the image.
 * @example
 * <LazyImage src="/path/to/image.jpg" alt="Example image" width={400} height={300} />
 */
const LazyImage = ({ src, alt, width, height }) => {
  return (
    <LazyLoad height={height} offset={100}>
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
    </LazyLoad>
  );
};

LazyImage.propTypes = {
  /** Image source URL */
  src: PropTypes.string.isRequired,
  /** Alternative text for the image */
  alt: PropTypes.string.isRequired,
  /** Image width, can be a number or a string (e.g., '100%') */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Image height, can be a number or a string (e.g., '100%') */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default LazyImage;
