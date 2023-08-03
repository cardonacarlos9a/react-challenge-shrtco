import Styles from '../styles/header.module.css'
import StylesGlobal from '../styles/global/global.module.css'

export default function Header(){
    

    return (<header className={Styles.parent}>
            <img className={Styles.imageMobile} src="/illustration-working.svg" alt="Your SVG" width='100' height='300'/>
            <section className={`${Styles['left-header-section']}`}>
                
                    <h1 className="text-3xl">More than just</h1>
                    <h1 className="text-3xl">shorter links</h1>
                    <h4>Build your brand's recognition and get detailed insights on how your
                        links are performing
                    </h4>
                    <div className={Styles.getStartedButton}>
                        <button className={`${Styles.getStarted} ${StylesGlobal['button-rounded-green']}`}>Get Started</button>
                    </div>
            </section>
            <img className={Styles.imageDestop} src="/illustration-working.svg" alt="Your SVG" width='100' height='300'/>

        </header>

    )
}