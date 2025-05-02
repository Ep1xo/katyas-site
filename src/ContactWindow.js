import {React, useState} from 'react';

const ContactWindow = ({ onClose, show }) => {
  
  if (!show) {
    return null;
  }

  return (
    <div className="back">
      <div className="window">
        <div className="top-part">
          <h1>Контакти</h1>
          <img onClick={onClose} src ={`${process.env.PUBLIC_URL}/icons/close.png`} style={{cursor: 'pointer'}}/>
        </div>
        <div className="bottom-part">
          <h3>Записатися на зйомку, чи дізнатися більше про сам процес чи мене можете в Інстаграмі!</h3>
          <a href= "https://www.instagram.com/katerinn.video?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target = "_blank"><img src={`${process.env.PUBLIC_URL}/icons/instagram.svg`}/></a>
        </div>
      </div>
    </div>
  );
};

export default ContactWindow;