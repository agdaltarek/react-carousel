import React, { useState } from "react";
import { DataCarousel } from "./DataCarousel";
import "./carousel.css";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="container">
      {DataCarousel.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="article">
                <div className="articleImageContainer">
                  <img
                    src={slide.image}
                    alt="article"
                    className="articleImage"
                  />
                </div>
                <div className="articlePreview">
                  <div className="articleTitle">
                    <h1>{slide.title}</h1>
                  </div>
                  <div className="articleText">
                    <p>{slide.content}</p>
                    <span className="readMore">
                      <a href="#">Read More...</a>
                    </span>
                  </div>
                </div>
                <div className="skipButtonArea">
                  <div className="overlay"></div>
                  <i
                    class="fas fa-chevron-right chevron"
                    onClick={nextSlide}
                  ></i>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carousel;
