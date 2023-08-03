import Style from '../styles/booster.module.css'
import StyleGlobal from '../styles/global/global.module.css'
export default function Booster(){
    return (
        <section className={Style.parent}> 
            <h1 className="text-3xl text-center">Boost your links today</h1>
            <button className={StyleGlobal['button-rounded-green']}>Get Started</button>
        </section>

    )
}