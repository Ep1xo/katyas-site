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

      <div className="welcome-block">
        <div>
          <h1>Фотографиня <span style={{color:"rgb(233, 171, 49)"}}>Катерина</span></h1>
          <h2>Світло. Справжність. Ти.</h2>
        </div>
        <div><img style={{height:"600px", borderRadius:"30px", marginLeft:"vw"}} src="/images/all/Katerinn_MAIN_PHOTO.jpg"/></div>
      </div>

      <div className="services-block">
        <h1>ПОСЛУГИ</h1>
        <div>
          dsfffffffffffffffffffff
        </div>
        <div>
          dsfffffffffffffffffffff
        </div>
        <div>
          dsfffffffffffffffffffff
        </div>
        <div>
          dsfffffffffffffffffffff
        </div>
        <div>
          dsfffffffffffffffffffff
        </div>
        <div>
          dsfffffffffffffffffffff
        </div>

        <div>
          dsfffffffffffffffffffff
        </div>
        <div>
          dsfffffffffffffffffffff
        </div>
                <div>
          dsfffffffffffffffffffff
        </div>
        videov

        videov
        video        <div>
          dsfffffffffffffffffffff
        </div>
        <div>
          dsfffffffffffffffffffff
        </div>
        <div>
          dsfffffffffffffffffffff
        </div>
      </div>
    </>
  );
}

export default App;
