import React, { useState } from 'react';
import Title from './../components/title';
import RadioButtonGroup from '../components/Radiogroup';
import { questionsList } from '../data/questions';
import { Button, TextField, ThemeProvider } from '@mui/material';
import { myTheme } from '../functions/buttonTheme';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();
  const [checklistValues, setCheckValues] = useState([]);
  
  const handleChange = ({value, index}) => {
    console.log(value, index)
  };
  return (
    <div>
      <div>
        <Title string={"Feedback"} />
        {questionsList.map((item, index) =>
          <div>
            <p style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>{item.item}</p>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <RadioButtonGroup onValueChange={(value) => {handleChange(value, index)}}  sx={{ justifyContent: "center", justifySelf: "center" }} />
            </div>
          </div>
        )}
      </div>
 
        <p style={{ color: "black", fontWeight: "bold", fontSize: 24, marginTop: 25 }}>{"Comentários:"}</p>
        <div style={{display: "flex",flexDirection: "column", width:"50%", justifyContent:"center", margin: "auto"}}>
        <TextField multiline/>
        <Button sx={{ mt: 2 }} color="secondary" variant="outlined" onClick={() => ""}>
          {t("finish")}
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
