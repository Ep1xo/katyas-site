import React from "react";

const StreetStyle = () => {

  return (
    <div className="photos-flex-5">
      <div className="all-photos">
        <img src={`${process.env.PUBLIC_URL}/images/all/Miron_1.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Miron_2.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Miron_3.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/liza_1.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/liza_2.jpg`}/>
      </div>
    </div>
  )  
}

export default StreetStyle;