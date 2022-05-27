import react from "react";
import React from "react";
import StaffItem from "./StaffItem";
import "./StaffList.css";

const StaffList = () => {
  return (
    <React.Fragment>
      <h1 className="staff-list__title">Our Staff</h1>
      <ul className="staff-list">
        <StaffItem
          name="Dr. Bellamy"
          position="Dentist"
          comment="Dr. Bellamy has extensive experience in general and cosmetic dentistry and maintains the most state-of-the-art dental equipment right in his office. Patients appreciate the fast and pain-free procedures offered at Monument Dental. As a family-oriented dental practice, they offer a wide variety of restorative and cosmetic dental services, including dental implants, veneers, , crowns, root canals, extractions and more."
          imageUrl={`${process.env.REACT_APP_ASSET_URL}/images/MarcusB.jpg`}
        />
        <StaffItem
          name="Hannah"
          position="Office Manager"
          comment="Hello my name is Hannah Rivers and I've just moved to Colorado Springs, after living in Northern Virginia for 12 years, in late December. I was an Assistant Manager for 4 years at my previous dental office, and prior to that was the Insurance coordinator for another office. I have worked with all fields of Dentistry, including: endodontics, periodontics, orthodontics, oral surgery, as well as general dentistry. While insurance can be tedious and confusing, I have made it a priority of mine to help translate the language of 'insurance' to best maximize patients benefits, and explain the way they work. I am excited to grow relationships and work with Dr. Bellamy to provide a smooth sailing experience from start to finish. When I am not at the office, you would find me with my 2 dogs and significant other, somewhere exploring this amazing state we get to call 'home'."
          imageUrl={`${process.env.REACT_APP_ASSET_URL}/images/HannahR.jpeg`}
        />
        <StaffItem
          name="Jennifer"
          position="Hygienist"
          comment="Jennifer graduated from Pueblo Community College with
          an Associate of Applied Science Degree of Dental Hygiene in May 2008.She was the sole recipient of the 2008 Southeastern Colorado Dental Society Periodontal Award- for demonstrating clinical excellence in treatment of periodontally involved patients.
         
         Jennifer is passionate about using her dental hygiene
          training to volunteer. She participated in a dental mission trip to South Africa in 2009 and has volunteered at Colorado Mission of Mercy.She looks forward to future overseas dental mission trips.
         
         Jennifer regularly attends continuing education courses
          and is a member of the Colorado Springs Dental Hygiene Seattle Study Club.
         
         In her free time Jennifer loves to spend time with her
          family and friends.  Her husband Jonathan and daughter Lilly are her favorite people and when they are not working or in school you will find them camping, playing pickleball or at the beach.  "
          imageUrl={`${process.env.REACT_APP_ASSET_URL}/images/JenniferB.jpg`}
        />
        <StaffItem
          name="Mary Jo"
          position="Hygienist"
          comment="Mary Jo Giudice, a 1976 graduate of the University of South Dakota Dept. of Dental Hygiene.  With over 45 years of experience, Mary Jo’s professional goal is to provide the care and knowledge, to her patients, necessary for having healthy teeth and gums."
          imageUrl={`${process.env.REACT_APP_ASSET_URL}/images/MaryJ.jpeg`}
        />
        <StaffItem
          name="Danielle"
          position="Hygienist"
          comment="	After high school, Danielle served in the Navy on the USS John C. Stennis as an aviation boatswain’s mate aircraft handler. She worked on the flight deck for four years assisting with flight operations. Once her enlistment was over, she completed the dental hygiene program at Montgomery County Community College in Pennsylvania where she was born and raised. She graduated in 2013 with an Associate of Applied Science degree in Dental Hygiene. She was the inaugural recipient of the Tierra L. Dobry Foundation scholarship and graduated with honors.  In 2021, Danielle finished her degree online and received a Bachelor of Science in Dental Hygiene from Oregon Institute of Technology. 
        Danielle is a member of the American Dental Hygienists’ Association as well as the Colorado Dental Hygienists’ Association. She recently became certified in placing interim therapeutic restorations and silver diamine fluoride and is looking forward to helping the geriatric community receive much needed dental hygiene care. One of her favorite things about working for Dr. Bellamy is his genuine and caring personality. He truly cares about every one of his patients and treats them like family. 
        In her free time, Danielle loves spending time with her husband and daughter as much as possible. They love to go camping, hiking, ride bikes, and basically anything that allows them to be outside to enjoy our beautiful Colorado weather."
          imageUrl={`${process.env.REACT_APP_ASSET_URL}/images/DanielleR.jpg`}
        />
        <StaffItem
          name="Felicia"
          position="Dental Assistant"
          comment="Felicia a Colorado native has been in the dental field for 12 years. She enjoys hiking, gardening and spending time with family. "
          imageUrl={`${process.env.REACT_APP_ASSET_URL}/images/FaliciaO.jpg`}
        />
      </ul>
    </React.Fragment>
  );
};

export default StaffList;
