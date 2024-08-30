import React, { useEffect, useState } from "react";
import styles from '../Basket/Basket.module.scss';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

// Sepet listesi bileşeni
const Wishlist = () => {
    const [favItems, setFavItems] = useState([]);
    const { userInfo } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        // localStorage'den sepet listesini alın
        const storedWishList = localStorage.getItem('wishList');

        if (storedWishList) {
            const parsedWishList = JSON.parse(storedWishList);
            // Her ürünün count değerini sayıya dönüştür
            const updatedFavItems = parsedWishList.map(item => ({
                ...item,
                count: parseInt(item.count) || 1, // Eğer count NaN veya undefined ise 1 olarak ayarla
                price: parseFloat(item.price).toFixed(2) // Fiyatı ondalık kısmı iki basamakla sınırla
            }));
            setFavItems(updatedFavItems);
        }
    }, []);

    // Ürün sayısını artırma işlevi
    const handleIncreaseQuantity = (itemId) => {
        const updatedFavItems = favItems.map(item => {
            if (item.id === itemId) {
                const newCount = item.count + 1;
                const newPrice = item.price / item.count * newCount; // Yeni fiyatı hesapla

                return {
                    ...item,
                    count: newCount,
                    price: newPrice.toFixed(2) // Fiyatı güncelle, ondalık kısmı iki basamakla sınırla
                };
            }
            return item;
        });

        // Güncellenmiş sepet listesini localStorage'e kaydedin
        localStorage.setItem('wishList', JSON.stringify(updatedFavItems));
        
        // State'i güncelleyin
        setFavItems(updatedFavItems);
    };

    // Ürün sayısını azaltma veya ürünü sepetten kaldırma işlevi
    const handleDecreaseQuantity = (itemId) => {
        const updatedFavItems = favItems.map(item => {
            if (item.id === itemId) {
                if (item.count > 1) {
                    const newCount = item.count - 1;
                    const newPrice = item.price / item.count * newCount; // Yeni fiyatı hesapla

                    return {
                        ...item,
                        count: newCount,
                        price: newPrice.toFixed(2) // Fiyatı güncelle, ondalık kısmı iki basamakla sınırla
                    };
                } else {
                    // Ürün adedi 1 ise ürünü sepetten kaldır
                    return null;
                }
            }
            return item;
        }).filter(item => item !== null); // null olanları filtrele
        
        // Güncellenmiş sepet listesini localStorage'e kaydedin
        localStorage.setItem('wishList', JSON.stringify(updatedFavItems));
        
        // State'i güncelleyin
        setFavItems(updatedFavItems);
    };

    // Kullanıcının sepet listesini _id'ye göre filtrele (userInfo varsa)
    const filteredFavItems = userInfo ? favItems.filter(item => item._id === userInfo._id) : [];

    const handlePayment = (itemPrice) => {
        navigate('/odenis', { state: { itemPrice } });
    };

    // Check if user is logged in, otherwise show toast and redirect to registration
    const handleWishlistView = () => {
        if (!userInfo) {
            toast.warn('Sepete eklemek için kayıt olmalısınız.');
            setTimeout(() => {
                navigate('/register', { state: { from: window.location.pathname } });
            }, 3000); // 3 saniye sonra yönlendirme
            return;
        }
    };

    useEffect(() => {
        handleWishlistView();
    }, [userInfo]); // Run on userInfo change

    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.basketList}>
                <h2>Favoriləriniz</h2>
            <ul>
                {filteredFavItems.map((item, index) => (
                    <li key={index}>
                        <div className={styles.image}><img src={item.thumbnail} alt={item.title} /></div>
                        
                        <div>
                            <h3>{item.title}</h3>
                            <p>Qiymət: {item.price} ₼</p>
                            <p>Ədəd: {item.count}</p>
                            <div className={styles.btns}>
                                <button onClick={() => handleIncreaseQuantity(item.id)}>Artır</button>
                            {item.count === 1 && <button onClick={() => handleDecreaseQuantity(item.id)}>Sil</button>}
                            {item.count > 1 && <button onClick={() => handleDecreaseQuantity(item.id)}>Azalt</button>}
                            <button onClick={() => handlePayment(item.price)}>Ödə</button>
                            </div>
                            
                        </div>
                    </li>
                ))}
            </ul>
            </div>
            <Footer/>
            
            <ToastContainer />
        </div>
    );
};

export default Wishlist;