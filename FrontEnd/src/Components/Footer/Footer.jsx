import React from 'react';
import styles from './Footer.module.css';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const HeaderLogoImage = require('../Images/Logo.png');
    const navigation = useNavigate();

    const goHome = () => {
        navigation('/')
    }
    const goBasket = () => {
        navigation('/sebet')
    }
    const goWishlist = () => {
        navigation('/wishlist')
    }
    const goMelumat = () => {
        navigation('/haqqimizda')
    }
    const goContact = () => {
        navigation('/contact')
    }

    return (
        <div className={styles.footerDistributed}>

            <div className={styles.footerLeft}>
                <div className={styles.logos}>
                    <img src={HeaderLogoImage} alt="logo" />
                <h3>KompAz<span>Store</span></h3>
                </div>
                

                <p className={styles.footerLinks}>
                    <a  className={styles.linkOne} onClick={goHome}>Home</a>

                    <a  onClick={goBasket}>Səbət</a>

                    <a  onClick={goWishlist}>Favorilər</a>

                    <a onClick={goMelumat}>Haqqımızda</a>
                </p>

                <p className={styles.footerCompanyName}>KompAz Store © 2024</p>
            </div>

            <div className={styles.footerCenter}>

                <div className={styles.boxs}>
                    <div className={styles.icons}><IoLocationSharp /></div>
                    <p><span>13 mkr.</span> Azerbaujan, Sumgait</p>
                </div>

                <div  className={styles.boxs}>
                    <div className={styles.icons}> <FaPhone /></div>

                    <p>+994506847834</p>
                </div>

                <div className={styles.boxs}>
                    <div className={styles.icons}><IoIosMail /></div>

                    <p><a href=""  onClick={goContact}>Mailimizə Mesaj Göndər</a></p>
                </div>

            </div>

            <div className={styles.footerRight}>

                <p className={styles.footerCompanyAbout}>
                    <span>Bizimlə Əlaqə</span>
                    Əgər sizin hər hansı bir sualınız və ya təklifiniz varsa, bizimlə əlaqə saxlamaqdan çəkinməyin. Sizə kömək etməkdən məmnun olarıq.
                </p>

                <div className={styles.footerIcons}>

                    <a target='_blank' href="https://www.instagram.com/quliyevmsh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
                    <a target='_blank' href="https://github.com/QuliyevMSH"><FiGithub /></a>
                    <a target='_blank' href="#"><FaTwitter /></a>

                </div>

            </div>
        </div>
    )
}

export default Footer
