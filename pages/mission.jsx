import Layout from "../components/Layout"
import about from "../styles/About.module.css"
import section from '../styles/Section.module.css'
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";

import en from '../locales/en';
import es from '../locales/es';

export default function Mission() {

    const router = useRouter();
    const {locale} = router;
    const t = locale == 'en'? en : es

    return (
        <Layout
            title={`${t.mission} | Real Vision Enterprise`}
        >

            <div className={section.mainsections}>
                <div className={about.about}>
                    <div className={about.aboutcontent}>
                        <div className={about.abouttext}>
                            <h2> {t.mission}</h2>
                            <p>
                                {t.p3}
                            </p>
                            <p>
                                {t.p4}
                            </p>
                        </div>
                    </div>
                    <div className={about.missionimgpng}>
                        <img src="/img/mission-img.png" alt="" />
                    </div>
                </div>

            </div>
        </Layout>
    )
}