import Title from "../components/title";
import { useTranslation } from "react-i18next";

function CongratsPage(){
    const {t} = useTranslation();
    return(
        <div>
            <Title string={t('thanks')}/>
            <p style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>{t('thanks2')}</p>
        </div>
    )
};

export default CongratsPage;