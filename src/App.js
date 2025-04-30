import React, { useState, useRef } from 'react';
import ContactWindow from "./ContactWindow";
import AllGallery from './Portfolio-Components/AllGallery';
import PersonalShooting from './Portfolio-Components/PersonalShooting';
import StreetStyle from './Portfolio-Components/StreetStyle';
import LoveStory from './Portfolio-Components/LoveStory';
import Pregnant from './Portfolio-Components/Pregnant';
import FaqBlock from './FaqBlock';

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

  const [scroll, setScroll] = useState(0);

  const upButton = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  const toBlock = (height) => {
    window.scrollTo({top: height, left: 0, behavior: 'smooth'})
  }

  return (
    <div>
      <header>
        <div className="navigation">
          <button onClick={upButton}>Головна</button>
          <button onClick={(e) => toBlock(e.target.getAttribute('height'))} height="800">Послуги</button>
          <button onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1350">Портфоліо</button>
          <button onClick={(e) => toBlock(e.target.getAttribute('height'))} height="2300">Гарантії</button>
          <button onClick={(e) => toBlock(e.target.getAttribute('height'))} height="3040">FAQ</button>
        </div>
        <div className="contacts">
          <button onClick={openContactWindow}>Контакти</button>
        </div>
      </header>

      <ContactWindow show={showContactWindow} onClose={closeContactWindow} />

      <div className="welcome-block">
        <div className='main-info'>
          <h1>Фотографиня <span className='Katerina'>Катерина</span></h1>
          <h2>Світло. Справжність. Ти.</h2>
        </div>
        <div><img className='main-photo' src="/images/all/Katerinn_MAIN_PHOTO.jpg"/></div>
      </div>

      <div className='service-block' draggable="false">
        <h1 style={{fontSize: '52px'}}>ПОСЛУГИ</h1>
        <div className="margin-text">
          <p>
            Зупиняю час в об'єктиві. Ознайомтеся з моїми фотопослугами:
          </p>

            <div className='tag'>
              <div className='tag-icon'></div>
              <span>Портретні зйомки</span>
            </div><div className='tag'>
              <div className='tag-icon'></div>
              <span>Фотографування подій</span>
            </div><div className='tag'>
              <div className='tag-icon'></div>
              <span>Креативні фотопроєкти</span>
            </div>
            <div className='tag'>
              <div className='tag-icon'></div>
              <span>Ретушування зображень</span>
            </div><div className='tag'>
              <div className='tag-icon'></div>
              <span>Студійні зйомки</span>
            </div><div className='tag'>
              <div className='tag-icon'></div>
              <span>Сімейні фотосесії</span>
            </div>

          <p>
            Напишіть мені, щоб дізнатися більше про мою роботу або <span className="portfolio-hover" onClick={openContactWindow}>забронюйте зйомку.</span>
          </p>
        </div>
      </div>

      <div className="portfolio-block">
        <h1>ПОРТФОЛІО</h1>

        
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

        <div className='abrakadabra'>
          {renderComponent()}
        </div>
      </div>

      <div className='guaranties-block'>
        <h1>ГАРАНТІЇ</h1>

        <div className='guarantie'>
          <img src='/icons/checklist.png'/>
          <p>Якість — професійна обробка та відбір найкращих кадрів.</p>
        </div>
        <div className='guarantie'>
          <img src='/icons/checklist.png'/>
          <p>Терміни — фото вчасно, або знижка.</p>
        </div>
        <div className='guarantie'>
          <img src='/icons/checklist.png'/>
          <p>Конфіденційність — без публікації без вашої згоди.</p>
        </div>
        <div className='guarantie'>
          <img src='/icons/checklist.png'/>
          <p>Прозорість — чіткий договір і зрозумілі умови.</p>
        </div>
        <div className='guarantie'>
          <img src='/icons/checklist.png'/>
          <p>Підтримка на всіх етапах — від підготовки до фінальних фото.
          </p>
        </div>
        <div className='guarantie'>
          <img src='/icons/checklist.png'/>
          <p>Індивідуальний підхід — зйомка під ваш стиль та запит.</p>
        </div>
      </div>

      <div className='faq-block'>
        <h1>FAQ</h1>
        <div className='faq'>
          <div>
            <div className='question-element-opener'>
            <FaqBlock question="Як забронювати фотосесію?" answer="Зв'яжіться зі мною через форму на сайті або в соцмережах підберемо зручну дату." />
            </div>
            <div className='question-element'>
              <FaqBlock question="Де відбуваються зйомки?" answer="На вулиці, у студії чи за домовленістю все обговоримо заздалегідь." />
            </div>
            <div className='question-element'>
              <FaqBlock question="Ви обробляєте фотографії?" answer="Так, всі знімки проходять корекцію кольору і легку ретуш." />
            </div>
            <div className='question-element'>
              <FaqBlock question="Що робити, якщо буде йти дощ/погана погода?" answer="Перенесемо зйомку або підберемо альтернативну локацію." />
            </div>
            <div className='question-element'>
              <FaqBlock question="Чи можна прийти з другом/сім'єю/домашньою твариною?" answer="Звісно! Чим тепліше компанія, тим живіше кадри." />
            </div>
            <div className='question-element'>
              <FaqBlock question="Ви публікуєте фото клієнтів у портфоліо?" answer="Тільки за вашою згодою. Конфіденційність важлива." />
            </div>
            <div className='question-element-closer'>
              <FaqBlock question="Яка вартість фотосесії?" answer="Залежить від формату. Але найчастіше вона договірна." />
            </div>
          </div>
        </div>
      </div>

      <div className='bottom-part'>
        <p>© 2025 Katerinn Video. Усі права застережено.</p>
      </div>
    </div>
  );
}

export default App;
