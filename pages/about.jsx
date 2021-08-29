import Layout from "../components/Layout"
import about from "../styles/About.module.css"
import section from '../styles/Section.module.css'

export default function About() {
    return (
        <Layout
            title="About | Real Vision Enterprise"
        >
            <div className={section.mainsections}>

                <div className={about.about}>
                    <div className={about.aboutcontent}>
                        <div className={about.abouttext}>
                            <h2>ABOUT</h2>
                            <p>Across CO, America, North America, and Europe there are nearly 200 million people. More than 60 percent of people prefer to rely on technology to solve problems. However, they reject current alternatives to do just that.</p>
                            <p >
                            We believe that there is an opportunity to create a new category of technologically approved products that is much closer to experience based on, to the satisfaction of people, with an environmental standard free of elements that harm human beings.
                            </p>
                            <div className="newsletter">
                                <div className={about.newsletterbtn}>
                                    <span className="newsletter-btn-text">Join our Newsletter <i className='bx bx-chevron-right'></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
