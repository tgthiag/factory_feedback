import React, { useState } from 'react';
import Title from '../components/title';
import RadioButtonGroup from '../components/Radiogroup';
import { questionsList } from '../data/questions';
import { Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DataQuestions from '../data/DataQuestions';
import {getDate, yearMonth, getYear, getMonth} from "../functions/getDate";
import { useLocation } from 'react-router-dom';
import firebaseApp from '../services/firebaseRealtimeDb';
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const { t } = useTranslation();
  const [checklistValues, setCheckValues] = useState([]);
  const [comment, setComment] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const idioma = searchParams.get('param1');
  const plant = searchParams.get('param2');
  const database = getDatabase();

  const handleChange = ({ value, index }) => {
    setCheckValues(prevChecklistValues => {
      const updatedValues = [...prevChecklistValues];
      updatedValues[index] = value;
      return updatedValues;
    });
  };

  const submitData = () => {
    const date = getDate()
    if (checklistValues.length !== 5) {
      console.log('Por favor, selecione todas as opções..');
      return;
    }
    const planta = plant === "0" ? "macedo" : "cumbica";
    const databaseRef = ref(database, `feedback/${planta}/${getYear()}/${getMonth()}`); //0 = Macedo, 1 = cumbica
    const itensToSubmit = new DataQuestions(...checklistValues, comment, date, planta, idioma);

    push(databaseRef, itensToSubmit)
      .then((newRef) => {
        const newId = newRef.key;
        navigate(`/thanks`);
      })
      .catch((error) => {
        console.error("Error writing to Firebase: ", error);
      });
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <div>
        <Title string={"Feedback"} />
        {questionsList.map((item, index) => (
          <div key={index}>
            <p style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>{item.item}</p>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <p style={{color:"rgba(0, 0, 0, 0.25)", fontSize: 10, fontWeight:"bold", margin:3}}>1</p>
              <RadioButtonGroup onValueChange={(value) => { handleChange({ value, index }) }} sx={{ justifyContent: "center", justifySelf: "center" }} />
              <p style={{color:"rgba(0, 0, 0, 0.25)", fontSize: 10, fontWeight:"bold", margin:3}}>10</p>
            </div>
          </div>
        ))}
      </div>

      <p style={{ color: "black", fontWeight: "bold", fontSize: 24, marginTop: 25 }}>{"Comentários:"}</p>
      <div style={{ display: "flex", flexDirection: "column", width: "50%", justifyContent: "center", margin: "auto" }}>
        <TextField multiline value={comment} onChange={handleCommentChange} />
        <Button sx={{ mt: 2 }} color="secondary" variant="outlined" onClick={submitData}>
          {t("finish")}
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
