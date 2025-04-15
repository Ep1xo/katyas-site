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
    </>
  );
}

export default App;
