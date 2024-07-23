import React from "react";
import LazyLoad from "react-lazyload";

export default function LazyImage({ src, alt, width, height }) {
    return (
        <LazyLoad height={height} offset={100}>
            <img src={src} alt={alt} width={width} height={height} loading="lazy" />
        </LazyLoad>
    );
}
