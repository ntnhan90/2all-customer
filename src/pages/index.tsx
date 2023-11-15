import Layout from '@layouts/layout'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from "next/link";
import Footer from '@components/footer';
import Banner from '@components/landingPage/banner';

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
        <Layout >
            <Banner />

            <Footer />
        </Layout>
    )
}
