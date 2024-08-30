import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './InterestInformation.module.scss'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Commentar from '../../Comment/Commentar';

const InterestInformation = () => {
    const navigation = useNavigate();

    

    const truncate = (str, num) => {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + '...';
    };

    const [notes, setNotes] = useState([]);
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/notes');
                const limitedNotes = response.data.allNotes.slice(0, 8); // ilk 8 notu alın
                setNotes(limitedNotes);
            } catch (error) {
                console.error('Notları getirirken hata oluştu:', error);
            }
        };

        fetchNotes();
    }, []);


    const goMouse = () => {
        navigation(`/mouse`)
    }
    const goQulaqliq = () => {
        navigation(`/qulaqliqlar`)
    }
    const goMonitor = () => {
        navigation(`/monitorlar`)
    }
    const goSDkart = () => {
        navigation(`/sd-kartlar`)
    }
    const goPCkasa = () => {
        navigation(`/oyunpc-ve-kasasi`)
    }
    const goNotbuk = () => {
        navigation(`/notbuklar`)
    }
    const goKlaviatura = () => {
        navigation(`/klaviaturalar`)
    }
    const goKreslo = () => {
        navigation(`/kreslolar`)
    }
    const goComment = () => {
        navigation(`/comment-yaz`)
    }



    return (
        <div className={styles.interestInformation}>
            <div className={styles.container}>
                <div className={styles.head}>
                    <h1>Ən Çox Satılan Məhsullar</h1>
                </div>
                <div className={styles.productBoxs}>


                    <div className={styles.box}>
                        <div className={styles.containerBoxs}>
                            <div className={styles.image}>
                                <img src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0511175_816769.jpg" alt="product" />
                                <div className={styles.information}>
                                    <a onClick={goMouse} href="">Hamısına Bax</a>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <span>Gaming Mouse Logitech G502 X Plus Wireless Black</span>
                                <p>329.99 ₼</p>
                                <p>Mouse</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.containerBoxs}>
                            <div className={styles.image}>
                                <img src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/666528_571877_01_front_comping.jpg" alt="product" />
                                <div className={styles.information}>
                                    <a onClick={goQulaqliq} href="">Hamısına Bax</a>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <span>HyperX Cloud III Gaming Headset - Black</span>
                                <p>119.99 ₼</p>
                                <p>Qulaqlıq</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.containerBoxs}>
                            <div className={styles.image}>
                                <img src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/671227_616631_01_front_comping.jpg" alt="product" />
                                <div className={styles.information}>
                                    <a onClick={goMonitor} href="">Hamısına Bax</a>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <span>'Acer Nitro XV272U (2560 x 1440) 180Hz Gaming Monitor</span>
                                <p>530.00 ₼</p>
                                <p>Monitor</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.containerBoxs}>
                            <div className={styles.image}>
                                <img src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0658457_482083.jpg" alt="product" />
                                <div className={styles.information}>
                                    <a onClick={goSDkart} href="">Hamısına Bax</a>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <span>'Micro Center 32GB microSDHC Memory Card with Adapter</span>
                                <p>9.99 ₼</p>
                                <p>Yaddaş Kartı</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.containerBoxs}>
                            <div className={styles.image}>
                                <img src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/671237_616300_01_front_comping.jpg" alt="product" />
                                <div className={styles.information}>
                                    <a onClick={goPCkasa} href="">Hamısına Bax</a>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <span>'PowerSpec G446 Gaming PC</span>
                                <p>3100.00 ₼</p>
                                <p>Oyun PC və Kasası</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.containerBoxs}>
                            <div className={styles.image}>
                                <img src="https://strgimgr.umico.az/sized/1680/740874-58d0c27e335b1b521ad504c4dc49a284.jpg" alt="product" />
                                <div className={styles.information}>
                                    <a onClick={goNotbuk} href="">Hamısına Bax</a>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <span>Notbuk Asus TUF Gaming A15 FA506NF-HN018 (90NR0JE7-M001M0)</span>
                                <p>1499.00 ₼</p>
                                <p>Notbuk</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.containerBoxs}>
                            <div className={styles.image}>
                                <img src="https://umico.az/_ipx/_/https://strgimgr.umico.az/sized/840/510105-e998fab894fe81ac43bbaa7016d6d490.jpg" alt="product" />
                                <div className={styles.information}>
                                    <a onClick={goKlaviatura} href="">Hamısına Bax</a>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <span>Klaviatura Razer Ornata V2 USB RU (RZ03-03380700-R3R1)</span>
                                <p>189.00 ₼</p>
                                <p>Klaviatura</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.containerBoxs}>
                            <div className={styles.image}>
                                <img src="https://kontakt.az/media/catalog/product/cache/b34559cb8eb520f2bea0d3245ba154fd/t/m/tm-dg-acs-1109-gc-0066_1.png" alt="product" />
                                <div className={styles.information}>
                                    <a onClick={goKreslo} href="">Hamısına Bax</a>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <span>Oyun kreslosu Cougar Outrider S Royal</span>
                                <p>599.00 ₼</p>
                                <p>Kreslo</p>
                            </div>
                        </div>
                    </div>
                    


                </div>
            </div>

            <button className={styles.commentBtn} onClick={goComment}>Rəy Bildirin</button>

            <Commentar/>

        </div>
    )
}

export default InterestInformation
