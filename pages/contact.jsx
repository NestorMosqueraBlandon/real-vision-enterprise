import Layout from '../components/Layout'
import styles from '../styles/Contact.module.css'
import { useRouter } from 'next/router'

import es from '../locales/es';
import en from '../locales/en';


export default function Contact() {

        
    const router = useRouter();
    const {locale} = router;
    const t = locale == 'en'? en : es


    return (
        <Layout
            title= {`${t.contact} | Real Vision Enterprise`}
        >
            <div className={styles.contact}>
                <h2>CONTACT</h2>
                <div className={styles.fem}>
                    <a href="mailto:hi@rvegeneral.com">
                        <p>hi@rvegeneral.com</p>
                    </a>
                </div>
                <div className={styles.fn}>
                    <a href="">
                        <p>+57 3148335345</p>
                    </a>
                </div>
                <div className={styles.fa}>
                    <a href="">
                        <p>
                            Medellin, Colombia
                        </p>
                    </a>
                </div>
            </div>
        </Layout>
    )
}
