import Style from '../styles/statistics.module.css'
const Statistics = ()=>{
return (
    <section className={Style.parent}>
        <div>
            <h1 className='text-3xl text-center'>Advanced Statistics</h1>
            <h1 className='content-center text-center'>Track how your links are performing across the web with our advanced 
                statistics dashboard
            </h1>
        </div>
            <div className={Style.cardsGroup}>
                <div className={Style.cardWrapper}>
                    <div className={Style.card}>
                            <div className={Style.icon}>  
                                <img src='/icon-brand-recognition.svg'></img>
                            </div>
                        <h1><b>Brand Recognition</b></h1>
                        <h3>Boost your brand recognition with each click.</h3>
                    </div>
                </div>
                <div class={Style.verticalLine}>
                </div>
                <div className={Style.cardWrapper}>
                    <div className={Style.card}>
                            <div className={Style.icon}>  
                                <img src='/icon-detailed-records.svg'></img>
                            </div>
                        <h1><b>Detailed Records</b></h1>
                        <h3>Gain insights into who is clicking your links.</h3>
                    </div>
                </div>
                <div class={Style.verticalLine}>
                </div>
                <div className={Style.cardWrapper}>

                    <div className={Style.card}>
                            <div className={Style.icon}>  
                                <img src='/icon-fully-customizable.svg'></img>
                            </div>
                        <h1><b>Fully customizable</b></h1>
                        <h3>Improve brand awareness and content discoverability.</h3>
                    </div>
            </div>
        </div>
    </section>
)
}

export default Statistics;