import React from "react";

const LoveStory = () => {

  return (
    <div className="photos-flex-4">
      <div className="all-photos">
        <img src={`${process.env.PUBLIC_URL}/images/all/Couple_1.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Couple_2.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Couple_3.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Couple_4.jpg`}/>
      </div>
    </div>
  )  
}

export default LoveStory;