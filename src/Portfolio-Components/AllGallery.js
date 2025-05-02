import React from "react";

const AllGallery = () => {

  return (
    <div className="photos-flex">
      <div className="all-photos">
        <img src={`${process.env.PUBLIC_URL}/images/all/Alice_orange_first_place.JPG`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Alice_blue.JPG`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Alice_pink.JPG`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Alice_white.JPG`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Alice_black.JPG`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Couple_1.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Couple_2.jpg`}/>

        <img src={`${process.env.PUBLIC_URL}/images/all/Couple_4.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Kat_Sis_1.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Kat_Sis_2.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Kat_Sis_3.jpg`}/>

        <img src={`${process.env.PUBLIC_URL}/images/all/Kat_Sis_5.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Kat_Sis_6.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Miron_1.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Miron_2.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Miron_3.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Nika_color.jpg`}/>
        <img src={`${process.env.PUBLIC_URL}/images/all/Nika_WB.jpg`}/>
      </div>
    </div>
  )  
}

export default AllGallery;