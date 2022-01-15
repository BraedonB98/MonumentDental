import React from "react";


const WelcomeIntro = () => {
    const d = new Date();
    const getOpenTime = () =>{
        const year = d.getFullYear();
        return (year-2002);
    }
    return (
        <React.Fragment>
        <h1>Welcome To Monument Dental</h1>
        <p>For nearly {getOpenTime()} years, Marcus Bellamy DMD and his team have been providing exceptional restorative and cosmetic dental care services to the community of Monument, CO and surrounding areas</p><br/>

        <p>The team at Monument Dental is committed to providing exceptional dental care to patients of all ages.  By providing everything from basic preventative dental care to the most complex cosmetic procedures, Dr. Bellamy has become one of the preferred providers in the Monument area. </p><br/>
 
        <p>Dr. Bellamy has extensive experience in general and cosmetic dentistry and maintains the most state-of-the-art dental equipment right in his office.  Patients appreciate the fast and pain-free procedures offered at Monument Dental. As a family-oriented dental practice, they offer a wide variety of restorative and cosmetic dental services, including dental implants, veneers, , crowns, root canals, extractions and more.</p><br/>

        <p>Through participation in continuing education courses, Dr. Bellamy ensures that his patients will always receive the most cutting-edge treatments possible.</p><br/>
        </React.Fragment>
    )
}

export default WelcomeIntro