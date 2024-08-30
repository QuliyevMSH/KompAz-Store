import React, { useState, useMemo } from 'react';
import axios from 'axios';
import ReactStars from 'react-stars';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Comment = () => {
  const { userInfo } = useSelector(state => state.auth);

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [catagory, setCatagory] = useState('');
  const navigation = useNavigate();
  const goHome = () => {
    navigation('/')
  }


  useMemo(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      rating,
      review,
      name,
      catagory,
      email,
      addedAt: new Date().toISOString(),
    };

    try {
      const response = await axios.post('http://localhost:5000/api/reviews', formData);
      console.log('Response:', response.data);
      setRating(0);
      setReview('');
      setCatagory('');
      alert('Yorumunuz ve puanınız kaydedildi!');
    } catch (error) {
      console.error('Yorum kaydedilirken hata oluştu:', error);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column", height:"720px", gap:"20px" }}>
      <button
        onClick={goHome}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Home
      </button>
      <div className="max-w-4xl mx-auto px-8 py-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Rəy bildirin</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Adınız:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                disabled // Name should not be editable
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Emailiniz:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                disabled // Email should not be editable
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Puan:</label>
            <ReactStars
              count={5}
              value={rating}
              onChange={setRating}
              size={36}
              color2={'#ffd700'}
              className="mt-2"
            />
          </div>
          <div>
            <label htmlFor="review" className="block text-sm font-medium text-gray-700">
              Rəyiniz:
            </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-32 resize-none"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="catagory" className="block text-sm font-medium text-gray-700">
              Category:
            </label>
            <select
              id="catagory"
              value={catagory}
              onChange={(e) => setCatagory(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Kateqoriyanı seçin</option>
              <option value="Mouse">Siçan</option>
              <option value="Qulaqliq">Qulaqlıq</option>
              <option value="Monitor">Monitor</option>
              <option value="YaddasKarti">Yaddaş Kartı</option>
              <option value="Oyun PC">Oyun PC Kasa</option>
              <option value="Notbuk">Notbuk</option>
              <option value="Klaviatura">Klaviatura</option>
              <option value="Kreslo">Kreslo</option>
            </select>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            Göndər
          </button>
        </form>
      </div>
    </div>

  );
};

export default Comment;
