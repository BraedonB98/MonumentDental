import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./WelcomeSlideShow.css";
const slideImages = [
  {
    url: `./Images/Xray.jpg`,
    caption: "Best in Class service",
    focal: [50, 25],
  },
  {
    url: `./Images/Local.jpg`,
    caption: "Locally Owned",
    focal: [25, 40],
  },
  {
    url: `./Images/Family.jpg`,
    caption: "Family Ran",
    focal: [50, 15],
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
              style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundPosition: `${slideImage.focal[0]}% ${slideImage.focal[1]}%`,
              }}
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
