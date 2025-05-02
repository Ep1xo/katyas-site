import React from "react";

const Pregnant = () => {

  return (
    <div className="photos-flex">
      <div className="all-photos">
        <img src={`${process.env.PUBLIC_URL}/images/all/Kat_Sis_1.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Kat_Sis_2.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Kat_Sis_3.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Kat_Sis_4.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Kat_Sis_5.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Kat_Sis_6.jpg`}/>
      </div>
    </div>
  )  
}

export default Pregnant;