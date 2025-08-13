import React from "react";
import "../styles/infiniteCarousel.css";

export default function Carousel({ data, Card, speed = 30 }) {
  // Duplicate data to make it loop smoothly
  const loopData = [...data, ...data];

  return (
    <div className="pt-5 pb-16 space-y-5 overflow-hidden">
      <h2 className="text-[var(--color-secondary)] text-3xl font-bold text-center">
          Meet Our Speakers
        </h2>
      <div
        className="carousel-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {loopData.map((item, index) => (
          <div className="carousel-item h-75" key={index}>
            <Card speaker={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
