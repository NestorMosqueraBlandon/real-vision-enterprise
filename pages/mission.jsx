import Layout from "../components/Layout"
import about from "../styles/About.module.css"
import section from '../styles/Section.module.css'

export default function Mission() {
    return (
        <Layout
            title="Mission | Real Vision Enterprise"
        >

            <div className={section.mainsections}>
                <div className={about.about}>
                    <div className={about.aboutcontent}>
                        <div className={about.abouttext}>
                            <h2>MISSION</h2>
                            <p>
                                Technology and electronic devices significantly reduce human effort, but they are not without risks. They can be the source of a new bad grazing habit or significant damage to the environment, where the user does not have a context of quantity of the exact causes which leads to greater dependency.
                            </p>
                            <p>

                             Our ambition is to provide approved solutions that allow people to go beyond dependency and eliminate the impact of environmental damage that technology can cause.                            </p>
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
