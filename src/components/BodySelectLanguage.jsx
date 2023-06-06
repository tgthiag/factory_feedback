import React from 'react';
import imgSrc1 from './../assets/image1.png';
import imgSrc2 from './../assets/image2.png';
import imgSrc3 from './../assets/image3.png';
import ImageButton from './ImageButton'

function BodySelectLanguage(){
    return(
        <div style={{display: 'flex', justifyContent: 'center',height: '50vh', alignItems:"center"}}>
        <ImageButton src={imgSrc1} alt="Image 1" />
        <ImageButton src={imgSrc2} alt="Image 2" />
        <ImageButton src={imgSrc3} alt="Image 3" />
      </div>
    )
}
export default BodySelectLanguage;