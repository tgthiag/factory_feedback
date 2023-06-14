import React from "react";
import { useTranslation } from "react-i18next";

const QuestionsList = () => {
   const { t } = useTranslation();

   const questionsList = [
      {
         id: 0,
         item: t("qt1")
      },
      {
         id: 1,
         item: t("qt2")
      },
      {
         id: 2,
         item: t("qt3")
      },
      {
         id: 3,
         item: t("qt4")
      },
      {
         id: 4,
         item: t("qt5")
      }
   ];

   // Rest of the component code...

   return questionsList; // or any other JSX content if needed
};

export default QuestionsList;
