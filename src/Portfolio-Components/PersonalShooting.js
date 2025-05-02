import React from "react";

const PersonalShooting = () => {

  return (
    <div className="photos-flex-5">
      <div className="all-photos">
        <img src={`${process.env.PUBLIC_URL}/images/all/Alice_orange_first_place.JPG`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Alice_blue.JPG`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Alice_pink.JPG`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Alice_white.JPG`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Alice_black.JPG`}/>
      </div>
    </div>
  )  
}

export default PersonalShooting;