import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './ReadMore.module.scss';
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaOpencart } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ReadMore = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { note_id } = useParams();
    const { userInfo } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/notes/${note_id}`);
                const data = response.data;
                if (data && data.getById) {
                    setProduct(data.getById);
                } else {
                    setError('Ürün bulunamadı.');
                }
            } catch (error) {
                console.error('Ürün alınırken hata oluştu:', error);
                setError('Ürün detayları alınırken bir hata oluştu.');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [note_id]);

    const handleAddToBag = () => {
        if (!userInfo) {
            toast.warn('Sepete eklemek için kayıt olmalısınız.');
            setTimeout(() => {
                navigate('/register', { state: { from: window.location.pathname } });
            }, 3000); // 3 saniye sonra yönlendirme
            return;
        }

        const storedUserInfo = localStorage.getItem('userInfo');
        let basketList = [];

        if (storedUserInfo) {
            const userInfoObject = JSON.parse(storedUserInfo);

            const productToAdd = {
                _id: userInfo._id,
                id: note_id,
                title: product.title,
                price: product.price,
                name: userInfo.name,
                thumbnail: product.thumbnail,
                addedAt: new Date().toISOString()
            };

            if (localStorage.getItem('basketList')) {
                basketList = JSON.parse(localStorage.getItem('basketList'));
                const existingProduct = basketList.find(item => item.id === note_id);
                if (!existingProduct) {
                    basketList.push(productToAdd);
                    toast.success(`${product.title} sepete eklendi!`);
                } else {
                    toast.info(`${product.title} zaten sepette bulunmaktadır.`);
                }
            } else {
                basketList.push(productToAdd);
                toast.success(`${product.title} sepete eklendi!`);
            }

            localStorage.setItem('basketList', JSON.stringify(basketList));
        } else {
            console.log('Kullanıcı bilgisi bulunamadı. Giriş yapmalısınız.');
        }
    };
    const handleAddToFav = () => {
        if (!userInfo) {
            toast.warn('Sepete eklemek için kayıt olmalısınız.');
            setTimeout(() => {
                navigate('/register', { state: { from: window.location.pathname } });
            }, 3000); // 3 saniye sonra yönlendirme
            return;
        }

        const storedUserInfo = localStorage.getItem('userInfo');
        let basketList = [];

        if (storedUserInfo) {
            const userInfoObject = JSON.parse(storedUserInfo);

            const productToAdd = {
                _id: userInfo._id,
                id: note_id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail
            };

            if (localStorage.getItem('wishList')) {
                basketList = JSON.parse(localStorage.getItem('wishList'));
                const existingProduct = basketList.find(item => item.id === note_id);
                if (!existingProduct) {
                    basketList.push(productToAdd);
                    toast.success(`${product.title} sepete eklendi!`);
                } else {
                    toast.info(`${product.title} zaten favorilerde bulunmaktadır.`);
                }
            } else {
                basketList.push(productToAdd);
                toast.success(`${product.title} sepete eklendi!`);
            }

            localStorage.setItem('wishList', JSON.stringify(basketList));
        } else {
            console.log('Kullanıcı bilgisi bulunamadı. Giriş yapmalısınız.');
        }
    };

    if (loading) {
        return <div className={styles.loading}>Yükleniyor...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (!product) {
        return <div className={styles.error}>Ürün bulunamadı.</div>;
    }

    return (
        <div className={styles.detailContent}>
            <Header/>
            <div className={styles.productDetails}>
                <img src={product.thumbnail} alt={product.title} className={styles.image} />
                <div className={styles.info}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.price}>Qiymət: {product.price} ₼</p>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.category}>Kateqoriya: {product.catagory}</p>
                    <div className={styles.ratings}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div className={styles.btns}>
                        <button onClick={handleAddToBag}>Səbətə Əlavə Et <FaOpencart />
                        </button>
                        <button onClick={handleAddToFav}>Favorilərə Əlavə Et <MdOutlineFavoriteBorder />
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
            <ToastContainer />
        </div>
    );
};

export default ReadMore;
