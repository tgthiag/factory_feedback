import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "plant": "Plant",
      "next" : "Next",
      "lang": "Language",
      "welcome" : "Welcome",
      "finish" : "Finish",
      "wich_business": "Which business do you belong to?",
      "sga": "Saint-Gobain\nAbrasives",
      "sg": "Saint-Gobain\n(Other Businesses)",
      "external": "External\nVisitor",
      "qt1": "Visit planning and scheduling",
      "qt2": "Leading of visit",
      "qt3": "About safety",
      "qt4": "Cleaning and organization (5S)",
      "qt5":"How do we rank among the other factories you are familiar with?",
      "comments": "Comments:",

    }
  },
  //=====================================================================
  pt: {
    translation: {
      "plant": "Planta de produção",
      "next" : "Avançar",
      "lang": "Idioma",
      "welcome" : "Bem vindo!",
      "finish" : "Finalizar",
      "wich_business": "A qual negócio você pertence?",
      "sga": "Saint-Gobain\nAbrasivos",
      "sg": "Saint-Gobain\n(Outros Negócios)",
      "external": "Visitante\nExterno",
      "qt1": "Planejamento e agendamento da visita",
      "qt2": "Condução da visita",
      "qt3": "Segurança",
      "qt4": "Cleaning and organization (5S)",
      "qt5":"Como estamos em relação às outras fábricas que você conhece?",
      "comments": "Comentários:",
    }
  },
  //=====================================================================
  es: {
    translation: {
      "plant": "Planta de producción",
      "next" : "Avance",
      "lang": "Lenguaje",
      "welcome" : "¡Bienvenido!",
      "finish" : "Finalizar",
      "wich_business": "¿A qué negocio pertenece?",
      "sga": "Saint-Gobain\nAbrasivos",
      "sg" : "Saint-Gobain\n(Otros negocios)",
      "external": "Visitante\nExterno",
      "qt1": "Planificación y programación de la visita",
      "qt2": "Conducción de la visita",
      "qt3": "Seguridad",
      "qt4": "Limpieza y organizacion (5S)",
      "qt5":"¿Cómo estamos en relación con las otras fábricas que conoces?",
      "comments": "Comentarios:",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;