import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./WelcomeSlideShow.css";
const slideImages = [
  {
    url: "./images/Xray.jpg",
    caption: "Best in Class service",
  },
  {
    url: "./images/Local.jpg",
    caption: "Locally Owned",
  },
  {
    url: "./images/Family.jpg",
    caption: "Family Ran",
  },
];

const WelcomeSlideShow = () => {
  return (
    <div className="WelcomeSlideShow__slide-container">
      <Slide cssClass="WelcomeSlideShow__slide">
        {slideImages.map((slideImage, index) => (
          <div className="WelcomeSlideShow__each-slide" key={index}>
            <div
              className="WelcomeSlideShow__image"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default WelcomeSlideShow;
