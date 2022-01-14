import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './WelcomeSlideShow.css'
const slideImages = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://files.worldwildlife.org/wwfcmsprod/images/Mountains_New_Hero_Image/story_full_width/5c6n24n4pm_mountains_hero.jpg',
    caption: 'Slide 3'
  },
];

const WelcomeSlideShow = () => {
    return (
      <div className="WelcomeSlideShow__slide-container">
        <Slide cssClass = "WelcomeSlideShow__slide">
         {slideImages.map((slideImage, index)=> (
            <div className="WelcomeSlideShow__each-slide" key={index}>
              <div className="WelcomeSlideShow__image"style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default WelcomeSlideShow;