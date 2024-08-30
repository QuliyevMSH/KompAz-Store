import React, { useEffect, useState } from 'react'
import styles from './ButunMehsullar.module.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaComment } from "react-icons/fa";


const ButunMehsullar = () => {
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    const goComment = () => {
        navigate(`/comment-yaz`)
    }

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/notes');
                setNotes(response.data.allNotes);
            } catch (error) {
                console.error('Notları getirirken hata oluştu:', error);
            }
        };

        fetchNotes();
    }, []);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };





    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Bütün Məhsullarımız</h1>
                <div className={styles.products}>
                    {notes.map((note) => (
                        <div className={styles.productBox}>
                            <div className={styles.containerBox}>
                                <div className={styles.image}>
                                    <img src={note.thumbnail} alt="product" />
                                </div>
                                <div className={styles.content}>
                                    <h1>{truncateText(note.title, 55)}</h1>
                                    <p>{truncateText(note.description, 20)}</p>
                                    <span>{note.price} ₼</span>
                                    <div className={styles.btns}>
                                        <button onClick={() => navigate(`/product/${note._id}`)}>Məhsula Bax</button>
                                    </div>

                                </div>
                            </div>
                            <button className={styles.favBtn} onClick={goComment}><FaComment /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ButunMehsullar
