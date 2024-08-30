import React from 'react'
import styles from './BestPC.module.scss'
import { useNavigate } from 'react-router-dom';

const BestPC = () => {

    const navigation = useNavigate();

    const goHome = () => {
        navigation('/product/6685bb6117eeff9de79b9542')
    }

    return (
        <div className={styles.bestPc}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Asus TUF Gaming F-15</h1>
                    <h1>Qutu Açılışı və Dərindən İncələmə!</h1>
                    <p><span onClick={goHome}><b>Sizlər üçün Asus TUF Gaming F-15 </b></span> notbukunun qutu açılışını və detallı incələməsini təqdim edirik. Güclü performansı, şık dizaynı və oyun təcrübənizi zirvəyə qaldıracaq xüsusiyyətləri ilə sizə təqdim edirik. Bu notbuk haqqında hər şeyi öyrənmək üçün videomuzu izləyin. <br /> <i> Abunə olmağı unutmayın və fikirlərinizi şərhlərdə bölüşün!</i></p>
                </div>
                <div className={styles.video}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Nb29bMt7mao"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default BestPC
