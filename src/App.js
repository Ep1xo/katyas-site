import {React, useState} from 'react';
import ContactWindow from "./ContactWindow";

function App() {
  const [showContactWindow, setShowContactWindow] = useState(false);

  const openContactWindow = () => setShowContactWindow(true);
  const closeContactWindow = () => setShowContactWindow(false);

  return (
    <>
      <header>
        <div className="navigation">
          <button>Головна</button>
          <button>Портфоліо</button>
          <button>Послуги</button>
          <button>FAQ</button>
        </div>
        <div className="contacts">
          <button onClick={openContactWindow}>Контакти</button>
          <a href="https://www.instagram.com/katerinn.video?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target= "_blank"><img src="/icons/instagram.svg"/></a>
        </div>
        <ContactWindow show={showContactWindow} onClose={closeContactWindow} />
      </header>

      <ContactWindow show={showContactWindow} onClose={closeContactWindow} />

      <div className="welcome-block">
        <div>
          <h1>Фотографиня <span style={{color:"rgb(233, 171, 49)"}}>Катерина</span></h1>
          <h2>Світло. Справжність. Ти.</h2>
        </div>
        <div><img style={{height:"600px", borderRadius:"30px", marginLeft:"vw"}} src="/images/all/Katerinn_MAIN_PHOTO.jpg"/></div>
      </div>

      <div className='service-block' draggable="false">
        <h1 style={{fontSize: '52px'}}>ПОСЛУГИ</h1>
        <div className="margin-text">
          <p style={{fontSize: '27px'}}>
            Зупиняю час 
            <span style={{color: '#4b4b4b'}}> в об'єктиві</span>. Ознайомтеся з моїми
            <span style={{color: '#4b4b4b'}}> фотопослугами:</span>
          </p>

          <div style={{display:'flex'}}>
            <p className='tag'><p className='tag-icon'/>
            Портретні зйомки</p>
            <p className='tag'><p className='tag-icon'/>
            Фотографування подій</p>
            <p className='tag'><p className='tag-icon'/>
            Креативні фотопроєкти</p>
            <p className='tag'><p className='tag-icon'/>
            Ретушування зображень</p>
          </div>
          <div style={{display:'flex'}}>
            <p className='tag'><p className='tag-icon'/>
            Студійні зйомки</p>
            <p className='tag'><p className='tag-icon'/>
            Сімейні фотосесії</p>
          </div>

          <p style={{fontSize:"27px"}}>
            Напишіть мені, щоб дізнатися більше про мою роботу або <span style={{color:"#4b4b4b", cursor:"pointer"}} onClick={openContactWindow}>забронюйте зйомку.</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
