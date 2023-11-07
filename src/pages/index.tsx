import Layout from '@layout/layout'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from "next/link";

export const getStaticProps = async ({ locale }:any) => ({
    props: {
        ...await serverSideTranslations(locale),
    },
})


export default function Home() {
    //translations from common.json
    const {t} = useTranslation('common');
    const {t: homeT} = useTranslation('home');
    const changeLanguage = (language: string) => {
        window.location.replace("/" + language)
    }
    return (
        <div className="App">
            <div>
                <p>{t("USE_BUTTONS_BELOW")}</p>

                <p>{homeT("HELLO_WORLD")}                                                </p>
                <div>
                    <button onClick={() => changeLanguage("en")}>English</button>
                    <button onClick={() => changeLanguage("vi")}>VN</button>
                </div>
           
                <hr/>
                <Link href="/about">
                    {t("GO_TO_ABOUT_US")}
                </Link>
            </div>

            <p>
              {t("DESCRIPTION")}
            </p>


        </div>
    )
}
