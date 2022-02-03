import React, { useState } from "react";
import ActiveImage from "./ActiveImage";

const sliderData = [
  {
    id: 1,
    image: "image-product-1.jpg",
    imageThumbnail: "image-product-1-thumbnail.jpg",
  },
  {
    id: 2,
    image: "image-product-2.jpg",
    imageThumbnail: "image-product-2-thumbnail.jpg",
  },
  {
    id: 3,
    image: "image-product-3.jpg",
    imageThumbnail: "image-product-3-thumbnail.jpg",
  },
  {
    id: 4,
    image: "image-product-4.jpg",
    imageThumbnail: "image-product-4-thumbnail.jpg",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [currentImage, setCurrentImage] = useState(sliderData[0]);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current == length - 1 ? 0 : current + 1);
    setCurrentImage(sliderData[current]);
  };

  const prevSlide = () => {
    setCurrent(current == 0 ? length - 1 : current - 1);
    setCurrentImage(sliderData[current]);
  };

  const changeImage = (e) => {
    const choosenImage = e.target.getAttribute("value");
    setCurrentImage(sliderData[choosenImage]);
  };

  return (
    <section className="slide">
      <div className="previous" onClick={prevSlide}>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className="next" onClick={nextSlide}>
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className="slide-image">
        <div className="image">
          <ActiveImage imageObj={currentImage} />
        </div>
      </div>
      <div className="thumbnail">
        {sliderData.map((slide, index) => {
          return (
            <div key={slide.id} onClick={changeImage}>
              <img
                className="image-thumbnail"
                key={slide.id}
                src={"images/" + slide.imageThumbnail}
                alt={slide.imageThumbnail}
                value={index}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Carousel;
