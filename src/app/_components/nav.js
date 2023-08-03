import Link from 'next/link'
import Styles from '../styles/nav.module.css'
import StylesGlobal from '../styles/global/global.module.css'
import { useState } from 'react';


export default function Nav(){
    const [showDrawer, setShowDrawer] = useState(false)
    const hrStyle = {
        width: '70%',
      };
      const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
      };
    return (

    <nav className={Styles.parent}>
        
        <section className={Styles.title}>
            <Link className="text-2xl" href="/">Shortly</Link>
            <section className={Styles.desktopNav}>
                <div className={Styles['features-pricing-resources']}>
                    <Link href="/">Features</Link>
                    <Link href="/">Pricing</Link>
                    <Link href="/">Resources</Link>
                </div>
                <div className={Styles.loginSignup}> 
                    <Link href="/">Login</Link>
                    <Link className={`${StylesGlobal['button-rounded-green']} ${Styles['signup-button']}`} href="/">Sign Up</Link>
                </div>
            </section>
            <div className={`${Styles.hamburguer} space-y-2`} onClick={toggleDrawer}>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
        </section>
        <br></br>
        { showDrawer ? 
        <section className={`${Styles.drawer}`}>
            <Link href="/">Features</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Resources</Link>
            <hr style={hrStyle}/>
            <Link href="/">Login</Link>
            
            <Link className={`${StylesGlobal['button-rounded-green']} ${Styles['signup-button']}`} href="/">Sign Up</Link>
        </section>: ''}
    </nav>)
}