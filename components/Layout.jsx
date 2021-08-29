import Head from "next/head"
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'
import header from '../styles/Header.module.css'
import footer from '../styles/Footer.module.css'
import Sidemenu from "./Sidemenu"

export default function Layout({ children, title, description, scroll }) {

    return (
        <div className={styles.body}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />

                <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

            </Head>
            <header className={header.header}>
                <div className={header.headerpivot}></div>
                <Link href="/">
                    <a>
                        <div className={header.logo}>
                            <Image className={header.img} src="/img/logo192.png" alt="Real Vision Enterprise Logo" height={100} width={100} />
                        </div>
                    </a>
                </Link>
                <div className={header.menu}>
                    <div className={header.menubaruno}></div>
                    <div className={header.menubardos}></div>
                </div>
            </header>

            <main className={scroll? styles.sectionsholderscroll : styles.sectionsholder}>
                {children}
            </main>
            <Sidemenu />

            <footer className={footer.footer}>
                <div className={footer.copyrights}>
                    <div className={footer.dots}>
                        <i className='bx bx-dots-horizontal-rounded' ></i>
                        <i className='bx bx-dots-horizontal-rounded' ></i>
                    </div>
                    <div className={footer.copyrightstypingp}>
                        <p>Rve <span className={footer.footerall}><span className={footer.footerbar}>/</span> All rights reserved</span></p>
                    </div>
                </div>
                <div className={footer.socials}>
                    <p className={footer.socialsP}>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            In
                        </a>
                        <span>/</span>
                        <a href="">Tw</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}


Layout.defaultProps = {
    title: "Real Vision Enterprise - Applications, Hardware, Software & Gaming",
    description: "Real vision enterprise provides a large selection of robust and modern technological solutions. We also offer daily technology news and events.",

}