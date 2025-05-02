import React from "react";

const StreetStyle = () => {

  return (
    <div className="photos-flex-5">
      <div className="all-photos">
        <img src={`${process.env.PUBLIC_URL}/images/all/Miron_1.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Miron_2.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Miron_3.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Nika_color.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Nika_WB.jpg`}/>
      </div>
    </div>
  )  
}

export default StreetStyle;