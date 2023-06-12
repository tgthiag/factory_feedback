import React, { useState } from 'react';
import Title from '../components/title';
import RadioButtonGroup from '../components/Radiogroup';
import { questionsList } from '../data/questions';
import { Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DataQuestions from '../data/DataQuestions';


function HomePage() {
  const { t } = useTranslation();
  const [checklistValues, setCheckValues] = useState([]);
  const [comment, setComment] = useState('');

  const handleChange = ({ value, index }) => {
    setCheckValues(prevChecklistValues => {
      const updatedValues = [...prevChecklistValues];
      updatedValues[index] = value;
      return updatedValues;
    });
  };

  const submitData = () => {
    console.log(checklistValues);
    console.log(comment);
    const itensToSubmit = new DataQuestions(...checklistValues, comment);
    console.log(itensToSubmit);
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
              <RadioButtonGroup onValueChange={(value) => { handleChange({ value, index }) }} sx={{ justifyContent: "center", justifySelf: "center" }} />
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
