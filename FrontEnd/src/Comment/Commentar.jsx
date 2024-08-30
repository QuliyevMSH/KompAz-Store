import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactStars from 'react-stars';

const Commentar = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Yorumlar getirilirken hata oluştu:', error);
      }
    };

    fetchReviews();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '...';
};

  return (
    <div className="bg-gray-100 py-14 sm:pb-24">
      <div className="container px-4 mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 sm:text-4xl">
            Müştərilərin Rəyləri və Reytinqlər
          </h2>
          <p className="text-center text-gray-600">
            Müştərilərimizin məhsullarımız və xidmətimizlə bağlı rəyləri burada görünür.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="rounded-full w-12 h-12 bg-gray-300 flex items-center justify-center">
                    {review.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.email}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(parseInt(review.rating))].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.543L0 6.908l6.561-.955L10 0l3.439 5.953L20 6.908l-5.245 4.639 1.123 6.543z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">{truncateText(review.review, 40)}</p>
              <p className="text-gray-700">{review.catagory}</p>
              <p className="text-sm text-gray-500 mt-2">
                Göndərilmə tarixi: {review.addedAt ? new Date(review.addedAt).toLocaleString() : 'Qeyd Olunmayıb'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commentar;
