import React, { useState } from "react";

function SmartImage({ src, alt, className = "", width, height, style }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${loaded ? "" : "img-blur"}`}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      width={width}
      height={height}
      style={style}
    />
  );
}

export default React.memo(SmartImage);


