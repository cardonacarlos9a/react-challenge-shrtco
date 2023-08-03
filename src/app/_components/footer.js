import Style from '../styles/footer.module.css'
import StylesGlobal from '../styles/global/global.module.css'
export default function(){
    return (
        <footer className={Style.parent}>
                <h1 className='text-4xl'>Shortly</h1>
                <h1 className='text-1xl'>Features</h1>
                <h1 className='text-2xl'>Link Shortening</h1>
                <h1 className='text-2xl'>Branded Links</h1>
                <h1 className='text-2xl'>Analytics</h1>
            <section className={Style.socialMedia}>
                <img src='/icon-facebook.svg'></img>
                <img src='/icon-twitter.svg'></img>
                <img src='/icon-pinterest.svg'></img>
                <img src='/icon-instagram.svg'></img>
            </section>

        </footer>
    )
}