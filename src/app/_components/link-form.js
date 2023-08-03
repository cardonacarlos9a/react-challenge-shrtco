import Styles from '../styles/link-form.module.css'
import StylesGlobal from '../styles/global/global.module.css'
import { useState } from 'react'

export default function LinkForm({shortenUrl, error}){
    const [enteredUrl, setEnteredUrl]= useState('')

    const performShortening = ()=>{
        shortenUrl(enteredUrl)
    }
    const handleTextChange = (event) => {
        setEnteredUrl(event.target.value);
    };


    return (
        <section className={Styles.parent}>
            <div className={`${Styles['input-link-card']}`}>
                <div className={`${Styles['input-link-card2']}`}>
                    <input className={Styles.inputText} type="text" placeholder="Shorten a link here..." value={enteredUrl} onChange={handleTextChange}>
                    </input>
                    <button type='submit' className={`${StylesGlobal['button-semi-rounded']} ${Styles.shortenButton}`} onClick={performShortening} disabled={!enteredUrl ? true:false}>Shorten It!</button>
                </div>
                <label className={Styles.error}>{error}</label>
            
            </div>

        </section>
    )
}