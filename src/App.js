import React, { useState, useRef } from 'react';
import ContactWindow from "./ContactWindow";
import AllGallery from './Portfolio-Components/AllGallery';
import PersonalShooting from './Portfolio-Components/PersonalShooting';
import StreetStyle from './Portfolio-Components/StreetStyle';
import LoveStory from './Portfolio-Components/LoveStory';
import Pregnant from './Portfolio-Components/Pregnant';


function App() {
  const [showContactWindow, setShowContactWindow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const renderComponent = () => {
    switch(selectedCategory){
      case 'All':
        return <AllGallery/>;
      case 'PersonalShooting':
        return <PersonalShooting/>;
      case 'StreetStyle':
        return <StreetStyle/>;
      case 'LoveStory':
        return <LoveStory/>;
      case 'Pregnant':
        return <Pregnant/>;
      default:
        return <AllGallery/>;
    }
  };

  const openContactWindow = () => setShowContactWindow(true);
  const closeContactWindow = () => setShowContactWindow(false);

  return (
    <>
      <header>
        <div className="navigation">
          <button>Головна</button>
          <button>Послуги</button>
          <button>Портфоліо</button>
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
          <h1>Фотографиня <span className='Katerina'>Катерина</span></h1>
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
            Напишіть мені, щоб дізнатися більше про мою роботу або <span className="portfolio-hover" onClick={openContactWindow}>забронюйте зйомку.</span>
          </p>
        </div>
      </div>

      <div className="portfolio-block">
        <h1>Портфоліо</h1>

        
        <div style={{display:"flex", justifyContent:"center", marginBottom:"20px"}}>
          <p className={`tag ${selectedCategory === 'All' ? 'selected' : ''}`} onClick={() => setSelectedCategory('All')}>
            All photos
          </p>
          <p className={`tag ${selectedCategory === 'LoveStory' ? 'selected' : ''}`} onClick={() => setSelectedCategory('LoveStory')}>
            Love story
          </p>
          <p className={`tag ${selectedCategory === 'Pregnant' ? 'selected' : ''}`} onClick={() => setSelectedCategory('Pregnant')}>
            Pregnant
          </p>
          <p className={`tag ${selectedCategory === 'StreetStyle' ? 'selected' : ''}`} onClick={() => setSelectedCategory('StreetStyle')}>
            Street style
          </p>
          <p className={`tag ${selectedCategory === 'PersonalShooting' ? 'selected' : ''}`} onClick={() => setSelectedCategory('PersonalShooting')}>
            Personal shooting
          </p>
        </div>

        <div>
          {renderComponent()}
        </div>
      </div>

      <div>
        вопрос и стрелка
        при нажатии блок расширяется и там ответ, работает только один блок за раз
      </div>

      <div className='bottom-part'>
        <p>© 2025 Katerinn Video. Усі права застережено.</p>
      </div>
    </>
  );
}

export default App;
