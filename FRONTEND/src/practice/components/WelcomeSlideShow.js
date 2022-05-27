import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./WelcomeSlideShow.css";
const slideImages = [
  {
    url: `${process.env.REACT_APP_ASSET_URL}/images/Xray.jpg`,
    caption: "Best in Class service",
    focal: [50, 25],
  },
  {
    url: `${process.env.REACT_APP_ASSET_URL}/images/Local.jpg`,
    caption: "Locally Owned",
    focal: [50, 40],
  },
  {
    url: `${process.env.REACT_APP_ASSET_URL}/images/Family.jpg`,
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
