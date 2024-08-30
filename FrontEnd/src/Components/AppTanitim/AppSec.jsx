import React from 'react'
import styles from './AppSec.module.scss'

const AppSec = () => {

    const AppImage = require('../Images/appimg.png')
    const LogoImage = require('../Images/Logo.png');


    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>İstədiyiniz hərşey <br /> Bir tətbiqdə!</h1>
                    <p>Tezliklə...</p>
                    <div className={styles.arrow}>
                        <img src="https://sikayet.az/imgs/pngwing%201.png" alt="arrow" />
                    </div>
                    <div className={styles.platforms}>
                        <div className={styles.appImage}>
                            <img src="https://sikayet.az/imgs/Badge.png" alt="store" />
                        </div>
                        <div className={styles.appImage}>
                            <img src="https://sikayet.az/imgs/Group.png" alt="store" />
                        </div>
                    </div>
                </div>
                <div className={styles.logo}>
                    <img src={LogoImage} alt="Logo" />
                    <h1>Komp <p>AZ</p> </h1>
                </div>
                <div className={styles.appPhoto}>
                    <img src={AppImage} alt="app" />
                </div>
            </div>
        </div>
    )
}

export default AppSec
