import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { RiLoginBoxFill } from "react-icons/ri";
import { RiLoginBoxLine } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import axios from "axios";

export const Navlinks = [
    {

        id: 2,
        name: "Admin",
        link: "/admin-home",
        admin: "/admin",

    }
];
const Header = () => {


    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigation = useNavigate();


    const goHome = () => {
        navigation('/')
    }
    const goBasket = () => {
        navigation('/sebet')
    }
    const goWishlist = () => {
        navigation('/favoriler')
    }
    const goDashBoard = () => {
        navigation('/dashboard')
    }
    const goRegister = () => {
        navigation('/register')
    }
    const goLogin = () => {
        navigation('/login')
    }
    const goProfile = () => {
        navigation('/profile')
    }
    const goMelumat = () => {
        navigation('/haqqimizda')
    }
    const goContact = () => {
        navigation('/contact')
    }

    const handleOpen = () => {
        setOpen(!open);
    };
    // const handleClose = () => {
    //     setOpen(false);
    // };

    const HeaderLogoImage = require('../Images/Logo.png');



    const { userInfo } = useSelector(state => state.auth);
    const [user, setUser] = useState(null);


    useEffect(() => {
        const token = localStorage.getItem("token"); // Local storage'dan token'ı alıyoruz
        axios.get('http://localhost:8000/api/users', {
            headers: {
                Authorization: `Bearer ${token}` // Token'ı Authorization header'ına ekliyoruz
            }
        })
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('Kullanıcı bilgileri alınamadı:', error);
            });
    }, []);


    return (
        <div className={styles.header}>
            <div className={styles.containerTop}>
                <a className={styles.large} onClick={goContact} href="#">Bizimlə əlaqəyə keçin</a>
                <a className={styles.small} onClick={goContact} href="#">Əlaqəyə keçin</a>

                <div className={styles.user}>
                    <button onClick={goLogin} className={styles.leftBtn}><RiLoginBoxFill /> Daxil olun</button>
                    <p>və ya</p>
                    <button onClick={goRegister} className={styles.rightBtn}>Qeydiyyatdan keçin <RiLoginBoxLine /></button>
                    <button onClick={goRegister} className={styles.rightBtnNone}><h1>Qeydiyyat <RiLoginBoxLine /></h1></button>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={HeaderLogoImage} alt="Logo" />
                    <h1 onClick={goHome}>Komp <p>AZ</p> </h1>
                </div>
                <div className={styles.searchInput}>
                    <input
                        type="text"
                        placeholder="Nə Axtarırsınız ?"
                         />
                    <button className={styles.searchIcon}>
                        <IoIosSearch />
                    </button>
                </div>


                <div className={styles.navbar}>
                    <nav>
                        <ul>
                            <li><a href="" onClick={goHome}>Home</a><p>|</p></li>
                            <li><a href="" onClick={goProfile}>Profiliniz</a><p>|</p></li>

                            <li><a href="" onClick={goBasket}>Səbət</a><p>|</p></li>

                            <li><a href="" onClick={goWishlist}>Favorilər</a><p>|</p></li>
                            {Navlinks.filter(({ name }) => name !== "Admin" || (name === "Admin" && userInfo && userInfo.userType === "Admin")).map(({ id, name, link, target }) => (
                                <li key={id}>
                                    <a
                                        href={link}
                                        target={target}
                                    >
                                        {name}
                                    </a>
                                    <p>|</p>
                                </li>
                            ))}


                            <li><a href="#" onClick={goMelumat}>Haqqımızda</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.dropdown} ref={dropdownRef}>
                    <button className={styles.leftbtn} onClick={handleOpen}>MENYU</button>
                    <button className={styles.rightbtn} onClick={handleOpen}><FaBarsStaggered /></button>
                    {open ? (
                        <ul className={styles.menu}>
                            <li className={styles.menuItem}>
                                <button onClick={goHome}>Home</button>
                            </li>
                            <li className={styles.menuItem}>
                                <button onClick={goProfile}>Profiliniz</button>
                            </li>
                            <li className={styles.menuItem}>
                                <button onClick={goBasket}>Səbət</button>
                            </li>
                            <li className={styles.menuItem}>
                                <button onClick={goWishlist}>Favorilər</button>
                            </li>
                            <li className={styles.menuItem}>
                                <button onClick={goMelumat}>Haqqımızda</button>
                            </li>
                        </ul>

                    ) : null}

                </div>

            </div>
            {/* <div className={styles.searchResults}>
                {data.length > 0 ? (
                    <ul>
                        {data.map(item => (
                            <li key={item.id}>{item.title}</li> // Burada item.title yerine item'ın sahip olduğu diğer özellikleri kullanabilirsiniz.
                        ))}
                    </ul>
                ) : (
                    searchQuery && <p>Sonuç bulunamadı</p> // Arama sorgusu varsa ve sonuç yoksa "Sonuç bulunamadı" mesajı gösterilir.
                )}
            </div> */}
        </div>
    );
};

export default Header;
