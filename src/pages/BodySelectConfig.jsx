import React, { useState } from 'react';
import imgSrc1 from './../assets/image1.png';
import imgSrc2 from './../assets/image2.png';
import imgSrc3 from './../assets/image3.png';
import ImageButtonLangage from './../components/ImageButton';
import TextButtonPlant from './../components/textButton';
import { useTranslation } from 'react-i18next';
import i18n from './../services/translation';
import { Button, ThemeProvider } from '@mui/material';
import { myTheme } from '../functions/buttonTheme';
import { useNavigate } from 'react-router-dom';
import Title from '../components/title';
import Popup from '../components/Popup';

function BodySelectConfig() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(1);
  const [selectedText, setSelectedText] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const imageButtons = [
    { src: imgSrc1, alt: 'Image 1' },
    { src: imgSrc2, alt: 'Image 2' },
    { src: imgSrc3, alt: 'Image 3' },
  ];
  const textButtons = [
    { text: "Macedo" },
    { text: "Cumbica" },
  ];

  const handleOpenPopup = (text) => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleClickImage = (index) => {
    console.log(`Image button clicked at index ${index}`);
    if (index === 0) {
      i18n.changeLanguage('pt');
    } else if (index === 1) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
    setSelectedImage(index);
  };

  const nextPage = () => {
    const params = {
      param1: selectedImage,
      param2: selectedText
    };
    if(selectedText !== null){
    navigate(`/home_page?${new URLSearchParams(params).toString()}`);
  }else{
    handleOpenPopup()
  }
  };

  const handleClickText = (index) => {
    console.log(`bt button clicked at index ${index}`);
    setSelectedText(index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div>
      <Title string={t("welcome")}/>
      {/* <p style={{ color: 'black', fontWeight: "bold" }}>{t('lang')}:</p> */}
        {imageButtons.map((imageButton, index) => (
          <ImageButtonLangage
            select={selectedImage === index ? true : false}
            key={index}
            src={imageButton.src}
            alt={imageButton.alt}
            onClick={() => handleClickImage(index)}
          />
        ))}
      </div>
      <Popup open={openPopup} onClose={handleClosePopup} text={"Please select the Saint-Gobain plant you are visiting now"} />

      <p style={{ color: 'black', fontWeight: "bold", fontSize: 24 }}>{t('plant')}:</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {textButtons.map((item, index) => (
          <TextButtonPlant
            select={selectedText === index ? true : false}
            key={index}
            text={item.text}
            onClick={() => handleClickText(index)}
          />
        ))}
      </div>
      <ThemeProvider theme={myTheme}>
        <Button sx={{ mt: 5, padding: "2%", borderRadius: 5, fontWeight: "800", fontSize: 18 }} color="secondary" variant="outlined" onClick={nextPage}>
          {t("next")}
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default BodySelectConfig;
