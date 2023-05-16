import React from 'react';
import './App.css';

function Reviews() {
    // Data Dummy JSON
    const users = [
      {
        "id": 1,
        "name": "Frank Alisson",
        "review": "The price is very good and the quality is amazing",
        "photo": "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        "id": 2,
        "name": "Alana Martini",
        "review": "This shoes is amazing",
        "photo": "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        "id": 3,
        "name": "Alex Bob",
        "review": "I use this shoes for everyday, and the quality was amazed me",
        "photo": "https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ];
    const listReview = users.map((itemReview) =>
      <div key={itemReview.id} className="item">
        <img src={itemReview.photo}/>
        <div className="user">
          <h3>{itemReview.name}</h3>
          <p>{itemReview.review}</p>
        </div>
      </div>
    );
    return (
      <div className="review-box">
        <h2>Reviews</h2>
        {listReview}
      </div>
    );
  }

export default Reviews;