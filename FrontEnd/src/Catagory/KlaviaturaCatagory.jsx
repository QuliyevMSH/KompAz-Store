import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import KlaviaturaComment from './KlaviaturaComment';

const KlaviaturaCatagory = () => {
    const [charms, setCharms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/notes');
                const filteredNotes = res.data.allNotes.filter(note => note.catagory === 'Klaviatura');
                setCharms(filteredNotes);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchNotes();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Yükleniyor...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen">Hata: {error}</div>;
    }

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap:"20px" }}>
            <Header />
            <h1 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
                Klaviaturalar
            </h1>
            <div style={{ width: "90%" }} className="container mx-auto py-12">

                <div style={{width: "100%", display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"15px" }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {charms.length > 0 ? (
                        charms.map((note) => (
                            <div key={note._id} style={{ width: "23%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"space-between", gap:"5px" }} className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-up">
                                {note.thumbnail && (
                                    <img style={{ width: "80%", height: "200px" }}
                                        src={note.thumbnail}
                                        alt="Thumbnail"
                                        className="w-full h-40 object-cover rounded-md mb-4"
                                    />
                                )}
                                <div style={{ width: "90%",display:"flex", flexDirection:"column", gap: "10px", justifyContent:"space-between" }}>
                                    <h3 style={{fontSize:"15px"}} className="text-lg font-semibold mb-2">{note.title}</h3>
                                    <p className="text-gray-600 mb-4">{note.price} ₼</p>
                                    <button style={{width:"80%", height:"30px", display:"flex", alignItems:"center", justifyContent:"center", gap:"3px", fontSize:"14px", border:"none", borderRadius:"5px", color:"white", cursor:"pointer", backgroundColor:"#52b9f0"}}
                                        onClick={() => navigate(`/product/${note._id}`)}
                                        className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
                                    >
                                        Ətraflı
                                    </button>
                                </div>

                            </div>
                        ))
                    ) : (
                        <div className="text-center col-span-full">Ürün bulunamadı.</div>
                    )}
                </div>
            </div>
            <KlaviaturaComment/>
            <Footer />
        </div>
    );
};

export default KlaviaturaCatagory;
