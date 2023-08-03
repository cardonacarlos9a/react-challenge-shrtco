import Style from '../styles/url-list.module.css'
import StylesGlobal from '../styles/global/global.module.css'
import { useRef, useState } from 'react'
export default function UrlList(props){
    
    const [copiedUrl, setCopiedUrl] = useState('')

    const handleCopy=(url)=>{
        navigator.clipboard.writeText(url)
        setCopiedUrl(() => url)
    }
    

    return (
        <div className={Style.parent}>
            {props.shortenedList.map((url)=>(
            <div key={url.short} className={Style.card}>
                <h3 className={Style.oriUrl}>{url.url}</h3>
                <hr></hr>
                <div className={Style.halfRightCard}>
                    <h3>{url.short}</h3>
                    <button className={`${StylesGlobal['button-semi-rounded']} ${Style.copyButton}`} 
                    onClick={() => handleCopy(url.short)}>{`${url.short == copiedUrl? 'Copied!':'Copy'}` }</button>
                </div>
            </div>
            ))}
        </div>
    )
}